module.exports = {
    arrCon(req, res) {
        var data = [
            { Username: 'a', age: 25, Sex: "Male" },
            { Username: 'x', age: 20, Sex: "Male" },
            { Username: 'y', age: 22, Sex: "Male" },
            { Username: 'z', age: 24, Sex: "Male" }
        ]
        var above22 = [];
        var below22 = [];
        var equal22 = [];
        var i = 0;
        do {
            // for (var i = 0; i < data.length; i++) 
            // {
                if (data[i].age > 22) {
                    above22.push(data[i])
                }
                else if (data[i].age < 22) {
                    below22.push(data[i])
                }
                else
                    equal22.push(data[i])
            // } 
            i++;
        } while (i < data.length)

        console.log('age above 22');
        above22.forEach(e => {
            console.log(e);
        });
        console.log('age below 22');
        below22.forEach(e => {
            console.log(e);
        });
        console.log('Age equal to 22');
        equal22.forEach(element => {
            console.log(element);

        });



        /*        //Method 2
        
                below22 = data.filter(lessThn22);
                function lessThn22(v, i, a) {
                    return v.age < 22;
                }
                above22 = data.filter(grtThn22);
                function grtThn22(v, i, a) {
                    return v.age > 22;
                }
                equal22 = data.filter(eqlThn22);
                function eqlThn22(v, i, a) {
                    return v.age == 22;
                }
        
                console.log(above22);
        */
        res.send(data);
    }
}
