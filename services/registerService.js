const registerDao = require('../models/registerDao');

const productRegister = async (title, userId, price, description, address, img, lastCategory ) => {
  let address_id = await registerDao.selectLocation(address)
  let getUserId = await registerDao.selectUserId(userId)

  let location = await Number(Object.values(address_id[0])[0]);
  let transUserId = await Number(Object.values(getUserId[0])[0]);
  
  let local = location.toString();
  let insertUserId = transUserId.toString();
  let category = lastCategory.toString();

  console.log(title, insertUserId, price, description, local, img, category)
  const register = await registerDao.productRegister(title, insertUserId, price, description, local, img, category );
  return register;
}

module.exports = {
  productRegister,
}