const pool = require("./db");

async function testConnection() {
    try {
        const connection = await pool.getConnection();

        console.log("MySQL Database Connected Successfully!");

        connection.release();
        await pool.end();

    } catch (error) {
        console.log("Database Connection Failed!");
        console.error(error);
    }
}

testConnection();