const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ujian'
});

connection.connect(function(error) {
    if (error) {
        console.log(error);
        return;
    }

    console.log('Database connected');
});

app.get('/', function(request, response) {

    connection.query(
        'SELECT * FROM users',
        function(error, results) {

            if (error) {

                response.status(500).json({
                    error: error.message
                });

                return;
            }

            response.json({
                data: results
            });
        }
    );
});

app.listen(3000, function() {
    console.log('Server berjalan di port 3000');
});