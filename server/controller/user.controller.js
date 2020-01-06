const userModel = require('../../models').users;
module.exports = {
    createUser(req, res) {
        var user = req.body;
        userModel.create(user).then(userRes => {
            if (userRes)
                res.send('user created successfully');
            else
                res.send('user created failed');
        })
            .catch(error => { console.log(error) })
    },
    createMany(req, res) { },
    findAll(req, res) {
        userModel.findAll().then(users => {
            if (users)
                res.send(users);
            else
                res.send('data empty');
        })
            .catch(error => { console.log(error) })
    }
}