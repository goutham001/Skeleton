const workerModel = require('../../models').worker;
module.exports = {
    createmany(req, res) {
        var workers = req.body;
        workerModel.bulkCreate(workers).then(workers => {
            if (workers.length > 0)
                res.send("inserted succesfully")
            else
                res.send("no data to insert")
        })
            .catch(error => { console.log(error) })

    },
    // Finding one worker sort by name given by end user;
    findOne(req, res) {
        var workerName = req.query.workerName;
        workerModel.findOne({
            where: { name: workerName }
        }).then(workers => {
            if (workers)
                res.send(workers);
            else
                res.send('No data')
        })
            .catch(error => { console.log(error) })
    },
    // Finding all workers data order by salary 1000;
    findAll(req, res) {
        workerModel.findAll({ where: { salary: 1000 } }).then(workers => {
            if (workers)
                res.send(workers);
            else
                res.send('No data');
        })
            .catch(error => { console.log(error) })
    },
}
    
   

