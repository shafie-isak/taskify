const { getTesks, createTask, deleteTesks, upadatTesks } = require("../controller/taskController");

const taskRoutes = (req, res) => {
    if(req.method == 'GET'){
        getTesks(req,res);
    }
    else if(req.method == 'POST'){
        createTask(req,res);
    }
    else if(req.method == 'PATCH'){
        upadatTesks(req,res);
    }
    else if(req.method == 'DELETE'){
        deleteTesks(req,res);
    }
    else{
        res.writeHead(404,'Not Found', {'content-type': 'application/js'});
        res.end(JSON.stringify({
            message: "page not found"
        }))
    }
}

module.exports = taskRoutes;
