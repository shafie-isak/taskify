const { escape } = require("querystring");

const taskRoutes = (req, res) => {
    if(req.method == 'GET'){
        res.end('Get all tasks')
    }
    else if(req.method == 'POST'){
        res.end('Create a new task')
    }
    else if(req.method == 'PATCH'){
        res.end('Update a task')
    }
    else if(req.method == 'DELETE'){
        res.end('Delete a task')
    }
    else{
        res.writeHead(404,'Not Found', {
            'content-type': 'application/js'
        });
        res.end(JSON.stringify({
            message: "page not found"
        }))
    }
}

module.exports = taskRoutes;