const http = require('http');
const taskRoutes = require('../routes/taskRouts');
const { log } = require('console');

const PORT = 9000;
const HOSTNAME = 'localhost';
const server = http.createServer((req, res)=>{
    if(req.url.startsWith('/task')){
        taskRoutes(req,res)
    }
    else{
        res.writeHead(404, 'Not Found', {'Content-type': 'application'})
        res.end(JSON.stringify({
            message: 'Page Not Found'
        }))
    }
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`server is running on port ${PORT}`)
})