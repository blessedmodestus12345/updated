const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('about');
    }
    res.end(`<h1>Ooops</h1>
    <p>We can't seems to find the page we are looking for</p>
    <a href="/">Back home</a>
    `)
})
server.listen(5000);

