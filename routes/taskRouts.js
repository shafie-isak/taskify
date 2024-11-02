const { getTesks } = require("../controller/taskController");

const taskRoutes = (req, res) => {
    if(req.method == 'GET'){
        getTesks(req,res);
    }
    else if(req.method == 'POST'){
        (req,res);
    }
    else if(req.method == 'PATCH'){
        updateTasks(req,res);
    }
    else if(req.method == 'DELETE'){
        deleteTasks(req,res);
    }
    else{
        res.writeHead(404,'Not Found', {'content-type': 'application/js'});
        res.end(JSON.stringify({
            message: "page not found"
        }))
    }
}

module.exports = taskRoutes;