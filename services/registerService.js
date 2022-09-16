const registerDao = require('../models/registerDao');
const eNum = require("../models/eNum");

const productRegister = async ( title, userId, price, description, address, img, lastCategory ) => {    
  const address_id = await registerDao.selectLocation(address)
  if(address_id.length == 0) {
    throw new error('ADDRESS_NOT_CORRECT', 400)
  }
  let location = await Number(Object.values(address_id[0])[0]);
  let local = location.toString();
  let category = lastCategory.toString();
  const register = await registerDao.productRegister(title, userId, price, description, local, img, category );
  return register;
}

module.exports = {
  productRegister,
}