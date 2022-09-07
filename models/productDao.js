const { database } = require('./database');
const error = require("../middlewares/errorConstructor");

const getProductRandomList = async (randomLimit) => {
    return database.query(`
        SELECT 
            id,
            name,
            price,
            image_url,
            DATE_FORMAT(created_at, '%Y-%c-%e %T') AS created_at,
            user_id
        FROM products
        ORDER BY RAND() LIMIT ?`,
        [randomLimit]
    )
}

const getProductRecommendList = async (categoryId) => {
    return database.query(`
        SELECT 
            id,
            name,
            price,
            image_url,
            DATE_FORMAT(created_at, '%Y-%c-%e %T') AS created_at,
            user_id
        FROM products
        WHERE tertiary_categories_id = ?`, 
        [categoryId]
    )
}

const getUserLikeCategory = async (mainId) => {
    return database.query(`
        SELECT 
            tertiary_categories_id
        FROM products
        INNER JOIN users ON products.id = recently_product_id
        WHERE users.id = ?`, 
        [mainId]
    )
}

const updateProductRecentWatchList = async (productId, mainId) => {
    try {
        return database.query(`
        UPDATE users SET
            recently_product_id = ?
        WHERE users.id = ?`, 
        [productId, mainId])
    } catch (err) {
        throw new error('INVALID_DATA_INPUT', 500)
    }
}

const getProductRecentWatchList = async (mainId) => {
    return database.query(`
        SELECT 
            products.id,
            name,
            price,
            image_url,
            DATE_FORMAT(products.created_at, '%Y-%c-%e %T') AS created_at,
            user_id
        FROM users 
        INNER JOIN products ON recently_product_id = products.id
        WHERE users.id = ?`,
        [mainId]
    )
}

const getProductlikeNumber = async (mainId) => {
    return database.query(`
        SELECT 
            count(*) AS count
        FROM likes
        WHERE user_id = ?`,
        [mainId]
    )
}

const getProductSearchList = async (values) => {
    return database.query(`
        SELECT 
            products.id,
            name,
            price,
            image_url,
            DATE_FORMAT(created_at, '%Y-%c-%e %T') AS created_at,
            user_id,
            address
        FROM products
        INNER JOIN address ON address_id = address.id
        WHERE CONCAT(
            name,
            price,
            address) 
        REGEXP "${values[0]}"`
    )
}

const getProductInfo = async ( id, userId ) => {
  try{
    return await database.query(
      `
      select
      (select json_arrayagg(json_object(
        'order_state', o.order_status_id,
        'userId', p.user_id,
        'description', p.description, 
        'productId', p.id, 'name', p.name, 
        'price', p.price, 
        'date', DATE_FORMAT(p.created_at, "%Y-%c-%e"),
        'address', a.address, 
        'image_url', image_url,
        'likes', ( select  count(l.user_id) from likes l  left  join users u
      on l.user_id = u.id where u.id=${userId})
      )) json) as product_info
      from products p
      left join tertiary_categories lc on p.tertiary_categories_id = lc.id
      left join secondary_categories sc on lc.sub_category_id = sc.id
      left join primary_categories mc on sc.main_category_id =  mc.id
      left  join orders o on o.product_id = p.id
      left join address a on p.address_id = a.id
      where p.id=${id}
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const getProductCategoryInfo = async (id) => {
  try{
    return await database.query(
      `
      SELECT (select json_arrayagg(json_object('first', mc.id, 'second', sc.id, 'third', lc.id))json) as category_info
      from products p
      left join tertiary_categories lc on p.tertiary_categories_id = lc.id
      left join secondary_categories sc on lc.sub_category_id = sc.id
      left join primary_categories mc on sc.main_category_id =  mc.id
      where p.id=${id};
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const updateRecentView = async (id, userId) => {
  try{
    return await database.query(
      `
      update users u set recently_product_id = ${id}
      where u.social_id = ${userId}
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const checkLike = async (id, userId) => {
  try{
    return await database.query(
      `
      SELECT EXISTS 
      (SELECT * FROM likes l  LEFT JOIN users u on u.id = l.user_id
        WHERE u.id=${userId} AND product_id=${id}) 
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const addLike = async (id, userId) => {
  try{
    return await database.query(
      `
      INSERT into likes (user_id, product_id)
      values ((select id from users u where u.id=${userId}), ${id})
      `
  )} catch (err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const deleteLike = async (id, userId) => {
  try{
    return await database.query(
      `
      delete  FROM likes l   
      WHERE user_id = 
      (select id from users u where u.id= ${userId}) 
      AND l.product_id=${id}
      `
    )
  } catch (err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const getSellerInfo = async (id, userId) => {
  try{
    return database.query(
      `
      select u.social_id,
      (select  count(p.user_id) as count  
      from products p group by p.user_id having p.user_id = (select p.user_id from products p where p.id=${id})) as product,  
      (select count(followee_id) as count  
      from follow group by followee_id   having followee_id=u.id)  
      as follower 
      from users u 
      LEFT JOIN products p on p.user_id=u.id 
      where p.id=${id}
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const getSellerProduct = async (id) => {
  try{
    return database.query(
      `
      select(select json_arrayagg(json_object(
        'image_url', p.image_url,
        'price', p.price,
        'id', p.id,
        'seller_id', p.user_id)) json) as product  
        from  products p  
        where p.user_id=(select user_id from products where id =${id})
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const getSellerReview = async (id) => {
  try{
    return database.query(
      `
      select  (select json_arrayagg(json_object(
      'review', r.review,
      'social_id',  u.social_id   ))json ) as review
      from orders o
      left join review r on r.order_id=o.id
      left join users u on o.buyer_id=u.id
      where o.seller_id=(select o.seller_id from products p  left join orders o on o.product_id = p.id where p.id = ${id})
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const getSidebarInfo = async (id,userId) => {
  try{
    return database.query(
      `
      select(select json_arrayagg(json_object('id', p.id,'name', p.name,'price', p.price ,'likes', ( select  count(l.user_id) as counts from likes l  left  join users u
      on l.user_id = u.id where u.social_id=  ${userId} ) ))json) as nav from products p left join users u on u.recently_product_id = p.id where u.social_id = ${userId}
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const getRelateInfo = async (id ,firstCategory, subCategory, lastCategory) => {
  try{
    return database.query(
      `
      SELECT p.id, p.name as name, user_id as seller_id , image_url
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id = ${subCategory} AND lc.id=${lastCategory}
      `
    )
  } catch(err) {
        throw new error('INVALID_DATA_INPUT', 500)
  }
}

const getCheckLikeInfo = async (id, result) => {
  try {
    return database.query(
      `
      SELECT EXISTS 
      (SELECT * FROM likes l  LEFT JOIN users u on u.id = l.user_id
        WHERE l.user_id=${result} AND product_id=${id}) 
      `
      )
  } catch (err) {
    throw new error('INVALID_DATA_INPUT', 500)
  }
}

const getSocialInfo = async ( userId ) => {
  try {
    return database.query(
      `
      select u.id from users u  where u.id = ${userId}
      `
    )
  } catch (err) {
    throw new error('INVALID_DATA_INPUT', 500)
  }
}

module.exports = {
  getProductInfo,
  getProductCategoryInfo,
  updateRecentView,
  checkLike,
  addLike,
  deleteLike,
  getSellerInfo,
  getSellerProduct,
  getSellerReview,
  getSidebarInfo,
  getRelateInfo,
  getCheckLikeInfo,
  getSocialInfo,
  getProductRandomList, 
  getProductRecommendList, 
  getUserLikeCategory, 
  updateProductRecentWatchList, 
  getProductRecentWatchList, 
  getProductlikeNumber, 
  getProductSearchList,
}

