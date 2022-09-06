require("dotenv").config();

const { createApp } = require("./app");
const { database } = require("./models/database.js");

const cors = require('cors');

const startServer = async () => {
    const app = createApp();
    const PORT = process.env.PORT;
    app.use(cors());

    await database.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
        database.destroy()
    });
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`);
    });
};

startServer();