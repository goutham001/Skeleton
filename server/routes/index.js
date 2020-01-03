const authorize = require('../../middlewares/auth').authorize,
    authenticate = require('../../middlewares/auth').authenticate,
    userController = require('../controller/user.controller');

module.exports = (app) => {
    app.get('/', (req, res) => res.send({ message: 'Welcome to web application' }));
}
