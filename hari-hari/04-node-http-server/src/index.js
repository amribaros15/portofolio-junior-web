const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {

    if (request.method !== 'GET') {
        response.writeHead(405, {
            'Content-Type': 'text/plain'
        });

        response.end('Method Not Allowed');
        return;
    }

    if (request.url === '/') {

        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        response.end('hello world');
        return;
    }

    const filePath = path.join(
        __dirname,
        '../public',
        request.url
    );

    fs.readFile(filePath, (error, data) => {

        if (error) {

            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.end('File Not Found');
            return;
        }

        response.writeHead(200);
        response.end(data);
    });
});

server.on('error', () => {
    console.log('Server Error');
});

server.listen(8000, () => {
    console.log('Server berjalan di http://localhost:8000');
});