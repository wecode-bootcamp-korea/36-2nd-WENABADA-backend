require("dotenv").config();

const { createApp } = require("./app");
const { database } = require("./models/database.js");

const startServer = async () => {
    const app = createApp();
    const PORT = process.env.PORT;
    await database.initialize();
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`);
    });
};

startServer();