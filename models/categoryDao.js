const {database} = require('./database');
const error = require("../middlewares/errorConstructor");

const getFirstCategoryProductList = async ( firstCategory, pageNo, Limit ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, store_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date ,(select count(p.id) FROM products p 
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory}) AS counts
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory}
      LIMIT ${Limit} OFFSET ${offset}
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",400);  }
}

const getSubCategoryProductList = async ( firstCategory, subCategory, pageNo, Limit  ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, store_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date, (select count(p.id) FROM products p 
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id=${subCategory}) AS counts 
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id=${subCategory}
      LIMIT ${Limit} OFFSET ${offset}
      `
    )} catch(err) {
      throw new error("INVALID_DATA_INPUT",400);
  }
}

const getLastCategoryProductList = async (firstCategory, subCategory, lastCategory, pageNo, Limit ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, store_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date,(select count(p.id) FROM products p 
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id=${subCategory} AND last_category_id=${lastCategory}) AS counts 
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id=${subCategory} AND last_category_id=${lastCategory}
      LIMIT ${Limit} OFFSET ${offset}
      `
    )} catch(err) {
      throw new error("INVALID_DATA_INPUT",400);
  }
}

const getPriceFilterList = async (firstCategory, subCategory, lastCategory, pageNo, Limit, option ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, store_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date, (select count(p.id) FROM products p 
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE last_category_id=${firstCategory}) as counts  
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id=${subCategory} AND last_category_id=${lastCategory}
      ORDER BY price ${option}
      LIMIT ${Limit} OFFSET ${offset}
      `
  )} catch (err) {
    throw new error("INVALID_DATA_INPUT",400);
  }
}

const getNewDateList = async (firstCategory, subCategory, lastCategory, pageNo, Limit, option ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, store_id, a.address, name, price, image_url, address_id,  DATE_FORMAT(created_at, "%Y-%c-%e") as date,
      (select count(p.id) FROM products p 
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE last_category_id=${lastCategory}) as counts
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id=${subCategory} AND last_category_id=${lastCategory}
      ORDER BY created_at ${option}
      LIMIT ${Limit} OFFSET ${offset}
      `
  )} catch (err) {
    throw new error("INVALID_DATA_INPUT",400);
  }
}

const getFirstCategoryPriceFilterList = async (firstCategory, pageNo, Limit, option ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, store_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date, (select count(p.id) FROM products p 
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory}) as counts  
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN last_category_id lc on p.last_category_id = lc.id
      LEFT JOIN sub_categories sc on lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc on sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} 
      ORDER BY price ${option}
      LIMIT ${Limit} OFFSET ${offset}
      `
    )}  catch (err) {
      throw new error("INVALID_DATA_INPUT",400);
    }
}

const getFirstCategoryNewList = async (firstCategory, pageNo, Limit, option ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, store_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date, (select count(p.id) FROM products p 
      LEFT JOIN last_category_id lc ON p.last_category_id = lc.id
      LEFT JOIN sub_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory}) as counts  
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN last_category_id lc on p.last_category_id = lc.id
      LEFT JOIN sub_categories sc on lc.sub_category_id = sc.id
      LEFT JOIN main_categories mc on sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} 
      ORDER BY created_at ${option}
      LIMIT ${Limit} OFFSET ${offset}
      `
    )}  catch (err) {
      throw new error("INVALID_DATA_INPUT",400);
    }
}


module.exports = {
  getFirstCategoryProductList,
  getSubCategoryProductList,
  getLastCategoryProductList,
  getPriceFilterList,
  getNewDateList,
  getFirstCategoryPriceFilterList,
  getFirstCategoryNewList,
}