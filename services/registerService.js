const registerDao = require('../models/registerDao');

const productRegister = async (title, userId, price, description, address, img, lastCategory ) => {
  let address_id = await registerDao.selectLocation(address)
  let location = await Number(Object.values(address_id[0])[0]);
  let local = location.toString();
  let category = lastCategory.toString();
  const register = await registerDao.productRegister(title, userId, price, description, local, img, category );
  return register;
}

module.exports = {
  productRegister,
}