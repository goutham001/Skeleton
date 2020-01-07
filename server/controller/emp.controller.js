const empModel = require('../../models').emps;
module.exports = {
    createEmp(req, res) {
        var emp = req.body;
        empModel.create(emp).then(empRes => {
            if (empRes)
                res.send('Employee created successfully');
            else
                res.send('Employee creation failed');
        })
            .catch(error => { console.log(error) })
    },

    createmany(req, res) {
        var employees = req.body;
        empModel.bulkCreate(employees).then(emps => {
            if (emps.length > 0)
                res.send("inserted succesfully")
            else
                res.send("no data to insert")
        })
            .catch(error => { console.log(error) })

    },

    findOne(req, res) {
        var empName = req.query.empName;
        empModel.findOne({
            where: { name: empName }
            }).then(emps => {
            if (emps)
                res.send(emps);
            else
                res.send('No data')
        })
            .catch(error => { console.log(error) })
    },
    findAll(req, res) {
        empModel.findAll().then(emps => {
            if (emps)
                res.send(emps);
            else
                res.send('data empty');
        })
            .catch(error => { console.log(error) })
    }
}
