module.exports = {
    getMyName(req, res) {
        var name = 'Gautham';
        res.send(name);
    },
    setMyName(req, res) {
        var myName = req.query.name;
        console.log(myName);
        res.send(myName);

    },
    setMyNameByBody(req, res) {
        var myName = req.body;
        console.log(myName);
        res.send('name: ' + myName.username + ' pass: ' + myName.password);
    }
}