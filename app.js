const http = require('http');
const routes = require('./routes');
// const fs = require('fs');

// const server = http.createServer(routes);

console.log(routes.someText)
const server = http.createServer(routes.handler);

server.listen(4000);

// const server = http.createServer((req, res) => {
//     // console.log(req);
//     // process.exit();
//     // console.log(req.url, req.method, req.headers)
//     // console.log(req.headers, req.method, req.url)
//     const url = req.url;
//     res.setHeader('Content-Type', 'text/html');
//     if(url === '/'){
//         res.write('<html>');
//         res.write('<head><title>My First Response Page</title></head>');
//         res.write('<body><h1>Welcome to my Node Js project</h1></body>')
//         res.write('</html>');
//         res.end();
//     }else if (url === '/home'){
//         res.write('<html>');
//         res.write('<head><title>My First Response Page</title></head>');
//         res.write('<body><h1>Welcome home</h1></body>')
//         res.write('</html>');
//         res.end();
//     }else if(url === '/about'){
//         res.write('<html>');
//         res.write('<head><title>My First Response Page</title></head>');
//         res.write('<body><h1>Welcome to About Us page</h1></body>')
//         res.write('</html>');
//         res.end();
//     }else if(url === '/node'){
//         res.write('<html>');
//         res.write('<head><title>My First Response Page</title></head>');
//         res.write('<body><h1>Welcome to my Node Js project</h1></body>')
//         res.write('</html>');
//         res.end();
//     }
//     // res.setHeader('Content-Type', 'text/html');
   
//     // res.end();
// });

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     res.setHeader('Content-Type', 'text/html');
//     if(url === '/'){

//         const existingMessages = fs.readFileSync('message.txt', 'utf8').split('\n').filter(message => message !== "");

//         res.write('<html>');
//         res.write('<head><title>Enter message</title></head>');
//         res.write('<body>');
//         res.write('<ul>');
//         existingMessages.forEach(message => {
//             res.write(`<li>${message}</li>`)
//         });
//         res.write('</ul>')
//         res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>');
//         res.write('</body>')
//         res.write('</html>');
//         return res.end();
//     }

//     if(url === '/message' && method === 'POST'){
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log(parsedBody);
//             const message = parsedBody.split('=')[1];
//             // fs.writeFileSync('message.txt', message);
//             // fs.writeFile('message.txt', message, (err) => {
//             //     res.statusCode = 302;
//             //     res.setHeader('Location', '/');
//             //     return res.end();
//             // });
//             fs.appendFile('message.txt', message + '\n', 'utf8', (err) => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             });
//         })
//         // fs.writeFileSync('message.txt', 'DUMMY');
//     }

//         res.write('<html>');
//         res.write('<head><title>My First Response Page</title></head>');
//         res.write('<body><h1>Welcome to my Node Js project</h1></body>')
//         res.write('</html>');
//         res.end();
// })

// const server = http.createServer(routes);
// console.log(routes.someText)
// const server = http.createServer(routes.handler);

// server.listen(4000);