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

module.exports = {
    getProductRandomList, 
    getProductRecommendList, 
    getUserLikeCategory, 
    updateProductRecentWatchList, 
    getProductRecentWatchList, 
    getProductlikeNumber, 
    getProductSearchList
}