const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // process.exit();
    // console.log(req.url, req.method, req.headers)
    // console.log(req.headers, req.method, req.url)
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        res.end();
    }else if (url === '/home'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>');
        res.end();
    }else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        res.end();
    }else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        res.end();
    }
    // res.setHeader('Content-Type', 'text/html');
   
    // res.end();
});

server.listen(4000);