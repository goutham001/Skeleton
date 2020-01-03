module.exports = {
    getPattern1(req, res) {
        for (let i = 1; i < 5; i++) {
            for (let j = 1; j <= i; j++) {
                console.log(j);
            }
            console.log('\n');
        }
        res.send('success');
    }
}