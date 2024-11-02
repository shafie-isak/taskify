const { IncomingForm } = require('formidable')
const { readTasksFormFile } = require("../utils/fileHandeler")

exports.getTesks = (req, res) => {
        const tasks = readTasksFormFile();
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(tasks))
}

exports.createTask = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if(err){
            res.writeHead(400,)
        }
    })
}

exports.upadatTesks = (req, res) => {
    
}

exports.deleteTesks = (req, res) => {}
