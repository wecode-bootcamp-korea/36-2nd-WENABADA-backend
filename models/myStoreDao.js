const {database} = require('./database');
const error = require("../middlewares/errorConstructor");

const getMyStoreInfo = async (userId) => {
  try{
    return await database.query(
      `
      SELECT
      (SELECT  
        JSON_ARRAYAGG(JSON_OBJECT('social_id', u.social_id, 'user_id', u.id,
        'create', DATE_FORMAT(created_at, "%Y-%c-%e"),  'product',
        (  select  count(p.user_id) AS count  
        FROM products p LEFT JOIN users u on p.user_id = u.id WHERE u.id=${ userId} GROUP BY user_id  ),
        'follower',( select count(f.follower_id) as count  
        FROM follow f 
      LEFT JOIN users u on f.follower_id = u.id 
      WHERE u.id = ${ userId}
group by follower_id )
)) AS json) AS shop_info
          FROM  users u 
          WHERE u.id = ${ userId}
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const updateRecentView = async (id, userId) => {
  try{
    return await database.query(
      `
      UPDATE users u SET recently_product_id = ${id}
      WHERE u.social_id = ${userId}
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const getMyStoreProductInfo = async (userId) => {
  try{
    return await database.query(
      `
      SELECT
      (SELECT JSON_ARRAYAGG(JSON_OBJECT
      ('id', p.id,
      'name', name,
      'price', price,
      'image_url', image_url,
      'location', a.address,'create', DATE_FORMAT(p.created_at, "%Y-%c-%e")
      ))  json) as product
            FROM products p 
        LEFT JOIN address a on p.address_id = a.id
	LEFT JOIN users u on p.user_id = u.id
          WHERE u.id = ${userId}
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const getMyStoreReviewInfo = async (userId) => {
  try{
    return await database.query(
      `
      select(select json_arrayagg(json_object('id', p.id, 'review', r.review,'social_id', u.social_id, 'name',p.name, 'price',p.price, 'address',a.address,'image_url', image_url)) josn) as review
      from review r
      left  join orders o on r.order_id = o.id
      left join users u on o.buyer_id = u.id
      inner join products p on o.product_id = p.id
      left join address a on p.address_id = a.id
      where o.seller_id = (select id from users u where u.id =  ${userId})
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const getMyStoreLikeInfo = async (userId) => {
  try{
    return await database.query(
      `
      select(select json_arrayagg(json_object( 'id',p.id, 'name',p.name,'image_url', p.image_url, 'price', p.price, 'user_id',p.user_id, 'date', DATE_FORMAT(p.created_at , "%Y-%c-%e"), 'address', a.address)) json)as likes
      from products p 
      left join address a on p.address_id = a.id
      left join likes l on l.product_id = p.id
      where l.user_id =${userId}
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const getMyStoreFollowerInfo = async (userId) => {
  try{
    return await database.query(
      `
      select(select json_arrayagg(json_object(
        'followee_id', f.followee_id, 
        'social_id',u.social_id, 
        'follow', ( select count(follower_id) as count  
        from follow group by follower_id   having follower_id=u.id) , 
        'product',(  select count(user_id) as count  
        from products p left join users u  on p.user_id = u.id 
        left join follow f on f.follower_id = u.id 
        group by user_id   
        having f.followee_id=p.user_id) )) json ) as follow  
        from users u 
        left join follow f on followee_id=u.id 
        where f.follower_id= ${userId}
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const getMyStoreFollowingInfo = async (userId) => {
  try{
    return await database.query(
      `
      select(select json_arrayagg(json_object(
        'user_id', u.id,
        'social_id',u.social_id, 
        'follow',  ( select count(follower_id) as count  
        from follow group by follower_id   having follower_id=u.id) , 
        'product', (  select count(user_id) as count  
        from products p 
        left join users u  on p.user_id = u.id 
        left join follow f on f.follower_id = u.id 
        group by user_id   having f.followee_id=p.user_id) ))json ) as following 
        from users u 
        left join follow f on f.followee_id = u.id 
        where follower_id=${userId}
      
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const checkFollow = async ( userId, followId ) => {
  try{
    return await database.query(
      `
      SELECT EXISTS 
      (SELECT * FROM follow
        WHERE follower_id=(select id from users u where u.id=${userId}) AND followee_id=${followId} )
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const addFollow = async (userId, followId) => {
  try{
    return await database.query(
      `
      INSERT INTO follow(follower_id, followee_id) VALUES ((select id from users u where u.id=${userId}), ${followId})
      `, 
  )} catch (err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const deleteFollow = async (userId, followId) => {
  try{
    return await database.query(
      `
      delete FROM follow f 
      WHERE f.follower_id=(
        select id from users u where u.id=${userId}) 
        AND f.followee_id=${followId}
      `
    )
  } catch (err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}


module.exports = {
  getMyStoreInfo,
  updateRecentView,
  getMyStoreProductInfo,
  getMyStoreReviewInfo,
  getMyStoreLikeInfo,
  getMyStoreFollowerInfo,
  getMyStoreFollowingInfo,
  checkFollow,
  addFollow,
  deleteFollow,
}