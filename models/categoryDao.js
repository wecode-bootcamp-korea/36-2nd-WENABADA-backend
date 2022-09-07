const {database} = require('./database');
const error = require("../middlewares/errorConstructor");

const getFirstCategoryProductList = async ( firstCategory, pageNo, limit ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, user_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date ,(select count(p.id) FROM products p 
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory}) AS counts
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory}
      LIMIT ${limit} OFFSET ${offset}
      `
    )
  } catch(err) {
    throw new error("INVALID_DATA_INPUT",500);  }
}

const getSubCategoryProductList = async ( firstCategory, subCategory, pageNo, limit  ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, user_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date ,(select count(p.id) FROM products p 
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id = ${subCategory}) AS counts
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      WHERE main_category_id=${firstCategory}  AND sub_category_id = ${subCategory}
      LIMIT ${limit} OFFSET ${offset}
      `
    )} catch(err) {
      throw new error("INVALID_DATA_INPUT",500); 
  }
}

const getLastCategoryProductList = async (firstCategory, subCategory, lastCategory, pageNo, limit ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, user_id, a.address, name, price, image_url,  DATE_FORMAT(created_at, "%Y-%c-%e") as date ,(select count(p.id) FROM products p 
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id = ${subCategory} AND lc.id=${lastCategory}) AS counts
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory} AND sub_category_id = ${subCategory} AND lc.id=${lastCategory}
      LIMIT ${limit} OFFSET ${offset}
      `
    )} catch(err) {
      throw new error("INVALID_DATA_INPUT",500); 
  }
}

const getPriceFilterList = async (firstCategory, subCategory, lastCategory, pageNo, limit, option ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, user_id, a.address, name, price, image_url, address_id,  DATE_FORMAT(created_at, "%Y-%c-%e") as date,
      (select count(p.id) FROM products p 
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE tertiary_categories_id=${lastCategory}) as counts  
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE  main_category_id=${firstCategory} AND sub_category_id = ${subCategory} AND tertiary_categories_id=${lastCategory}
      ORDER BY  price ${option}
      LIMIT ${limit} OFFSET ${offset}
      `
  )} catch (err) {
    throw new error("INVALID_DATA_INPUT",500); 
  }
}

const getNewDateList = async (firstCategory, subCategory, lastCategory, pageNo, limit, option ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, user_id, a.address, name, price, image_url, address_id,  DATE_FORMAT(created_at, "%Y-%c-%e") as date,
      (select count(p.id) FROM products p 
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE tertiary_categories_id=${lastCategory}) as counts
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE  main_category_id=${firstCategory} AND sub_category_id = ${subCategory} AND tertiary_categories_id=${lastCategory}
      ORDER BY created_at ${option}
      LIMIT ${limit} OFFSET ${offset}
      `
  )} catch (err) {
    throw new error("INVALID_DATA_INPUT",500);
  }
}

const getFirstCategoryPriceFilterList = async (firstCategory, pageNo, limit, option ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, user_id, a.address, name, price, image_url, address_id,  DATE_FORMAT(created_at, "%Y-%c-%e") as date,
      (select count(p.id) FROM products p 
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory}) as counts  
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE  main_category_id=${firstCategory}
      ORDER BY  price ${option}
      LIMIT ${limit} OFFSET ${offset}
      `
    )}  catch (err) {
      throw new error("INVALID_DATA_INPUT",500); 
    }
}

const getFirstCategoryNewList = async (firstCategory, pageNo, limit, option ) => {
  let offset = (10 * pageNo - 10);
  try{
    return await database.query(
      `
      SELECT p.id, user_id, a.address, name, price, image_url, address_id,  DATE_FORMAT(created_at, "%Y-%c-%e") as date,
      (select count(p.id) FROM products p 
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE main_category_id=${firstCategory}) as counts  
      FROM products p
      LEFT JOIN address a ON p.address_id = a.id
      LEFT JOIN tertiary_categories lc ON p.tertiary_categories_id = lc.id
      LEFT JOIN secondary_categories sc ON lc.sub_category_id = sc.id
      LEFT JOIN primary_categories mc ON sc.main_category_id = mc.id
      WHERE  main_category_id=${firstCategory}
      ORDER BY created_at ${option}
      LIMIT ${limit} OFFSET ${offset}
      `
    )}  catch (err) {
      throw new error("INVALID_DATA_INPUT",500);
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