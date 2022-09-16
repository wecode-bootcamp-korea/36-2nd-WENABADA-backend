const { database } = require('./database');
const error = require("../middlewares/errorConstructor");

const productRegister = async (name, userId, price, description, local, image_url, category) => {
  try {
    return await database.query(
      `
      INSERT INTO products (name, user_id, price, description, address_id, image_url, tertiary_categories_id) 
      VALUES ('${name}', '${userId}', '${price}', '${description}', '${local}', '${image_url}', '${category}');
      `
    )
  } catch (err) {
    throw new error('INVALID_DATA_INPUT', 500)
  }
}

const selectLocation = async (address) => {
  try {
    return await database.query(
      `
      select id as location FROM address a WHERE a.address='${address}'   
      `
    ) 
  } catch (err) {
    throw new error('INVALID_DATA_INPUT', 500)
  }
}

module.exports = {
  productRegister,
  selectLocation
}