const Controller1 = require('../controller/controller1');
const loopController = require('../controller/loop.controller');
const arrLogicController = require('../controller/arrlogic.controller');
const userController = require('../controller/user.controller');
const empController = require('../controller/emp.controller');
module.exports = (app) => {
    app.get('/', (req, res) => res.send({ message: 'Welcome to web application' }));
    app.get('/get_my_name',Controller1.getMyName);
    app.post('/set_my_name',Controller1.setMyName);
    app.post('/set_my_name_by_body',Controller1.setMyNameByBody);
    app.get('/get_pattern1',loopController.getPattern1);
    app.get('/get_data',arrLogicController.arrCon);
    app.post('/create_user',userController.createUser);
    app.get('/user/find_all',userController.findAll);
    app.post('/create_emp',empController.createEmp);
    app.get('/emp/find_all',empController.findAll);
    app.post('/emp/find_one',empController.findOne);
    app.post('/emp/create_many',empController.createmany);
}