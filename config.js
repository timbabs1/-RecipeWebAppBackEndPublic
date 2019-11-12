//use the value stored in the environment otherwise use the default one
exports.config = {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "recipe_composer",
    connectionLimit: 100
};