
var mysql = require('mysql');
var conection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'kolbowsky',
    database: 'antojo_gambeta'
});

conection.connect(function (error){
    if(error){
        console.log('Se produjo un error' + error.stack);
        return;
    }else{
        console.log('Se conecto bien');
    }


});
conection.end();

