const fs =    require('fs');
const path = require("path")

const filePath = './data/taska.js'

exports.writeTasksToFile = (tasks) =>{
    fs.writeFileSync(filePath, JSON.stringify(tasks))
    return data
}

exports.readTasksFormFile = () =>{
    if(!fs.existsSync(filePath)){
        this.writeTasksToFile([]);
    }

    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}