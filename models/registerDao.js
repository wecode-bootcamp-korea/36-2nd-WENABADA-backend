const { SimpleConsoleLogger } = require('typeorm');
const { database } = require('./database');

const productRegister = async (name, insertUserId, price, description, local, image_url, category) => {
  console.log(name, insertUserId, price, description, local, image_url, category)
  try {
    return await database.query(
      `
      INSERT INTO products (name, user_id, price, description, address_id, image_url, tertiary_categories_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?);
      `, [name, insertUserId, price, description, local, image_url, category]
    )
  } catch (err) {
    console.log(err);
  }
}

const selectLocation = async (address) => {
  console.log(address);
  try {
    return await database.query(
      `
      select id as location FROM address a WHERE a.address='${address}'   
      `
    ) 
  } catch (err) {
   console.log(err);
  }
}

const selectUserId = async (socialId) => {
  console.log(socialId);
  try {
    return await database.query(
      `
      select id as userId FROM users u WHERE u.social_id='${socialId}'   
      `
    ) 
  } catch (err) {
   console.log(err);
  }
}

module.exports = {
  productRegister,
  selectLocation,
  selectUserId,
}