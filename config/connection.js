// Dependencies
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our db
const sequelize = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize( 'tech_blog_db', 'root', '<your root password>',{
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;