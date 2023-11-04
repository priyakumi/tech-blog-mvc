const {
    User
} = require('../models');

const userData = [
    {
        username: 'rani',
        email: 'rani@gmail.com',
        password: 'password123'
    },
    {
        username: 'raj',
        email: 'raj@gmail.com',
        password: 'password123'
    },
    {
        username: 'nila',
        email: 'nila@gmail.com',
        password: 'password123'
    },
    {
        username: 'priya',
        email: 'priya@gmail.com',
        password: 'password123'
    },
    {
        username: 'balu',
        email: 'balu@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
