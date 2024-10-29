const fs =    require('fs');

exports.writeTasksToFile = (data) =>{
    fs.writeFileSync('./../data/tasks.json', JSON.stringify(data))
    return data
}

exports.readTasksFormFile = () =>{
    if(!fs.existsSync('./../data/taska.json')){
        this.writeTasksToFile([]);
    }

    const data = fs.readFileSync('./../data/tasks.json');
    return JSON.parse(data)
}