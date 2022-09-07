const { database } = require('./database');

const error = require("../middlewares/errorConstructor");

const checkMainId = async (userId) => {
    return database.query(`
        SELECT 
            id 
        from users 
        WHERE social_id  = ?`,
        [userId]
    )
}

const idCheck = async (userId) => {
    return database.query(`
        SELECT EXISTS(
            SELECT 
                social_id 
            from users 
            WHERE social_id  = ?
        ) AS RESULT`,
        [userId]
    )
}

const createUser = async (userId) => {
    try {
        return database.query(`
            INSERT INTO users(
                social_id
            ) VALUES (?)`, 
            [userId]
        )  
    }
    catch (err) {
        throw new error('INVALID_DATA_INPUT', 500)
    }
};


module.exports = {
    checkMainId, idCheck, createUser
}