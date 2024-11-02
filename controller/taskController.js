const { IncomingForm } = require('formidable')
const { readTasksFormFile, writeTasksToFile } = require("../utils/fileHandeler");
const { copyFileSync } = require('fs');
const path = require('path');

exports.getTesks = (req, res) => {
        const tasks = readTasksFormFile();
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(tasks))
}

exports.createTask = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if(err){
            res.writeHead(400, {'content-type': 'application/json'});
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }))
            return ;
        }
        const tasks = readTasksFormFile();
        const newTask = {
            id: Date.now(),
            title: fields.title,
            description: fields?.description || '',
            status: fields?.status || 'pending',
            image: files.image ? `/uploads/${files.image.name}` : null
        }
        tasks.push(newTask);
        writeTasksToFile(tasks)

        if(files.image){
            copyFileSync(files.image.path, path.join(__dirname), '../uploads', files.image.name);
            res.end(JSON.stringify(tasks))
        }
    })
}

exports.upadatTesks = (req, res) => {
    res.end(JSON.stringify({
        message: 'Update Not yet implemented!'
    }))
    
}

exports.deleteTesks = (req, res) => {
    res.end(JSON.stringify({
        message: 'Delete Not yet implemented!'
    }))
    
}
