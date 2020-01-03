const Controller1 = require('../controller/controller1');
const loopController = require('../controller/loop.controller');
module.exports = (app) => {
    app.get('/', (req, res) => res.send({ message: 'Welcome to web application' }));
    app.get('/get_my_name',Controller1.getMyName);
    app.post('/set_my_name',Controller1.setMyName);
    app.post('/set_my_name_by_body',Controller1.setMyNameByBody);
    app.get('/get_pattern1',loopController.getPattern1);
}
