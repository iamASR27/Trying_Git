const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Internal Server Error');
                return;
            }

            const existingMessages = data.split('\n').filter(message => message !== '');

            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write('<body>');
            res.write('<ul>');
            existingMessages.forEach(message => {
                res.write(`<li>${message}</li>`)
            });
            res.write('</ul>')
            res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>');
            res.write('</body>')
            res.write('</html>');
            return res.end();
        });
        return;
    }


    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
        
            fs.appendFile('message.txt', message + '\n', 'utf8', (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }

        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        res.end();
}


// module.exports = requestHandler;

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';
