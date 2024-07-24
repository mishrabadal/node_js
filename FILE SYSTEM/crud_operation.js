const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

//creation of file
fs.writeFileSync(filePath,"hii i am apple");

//reading text of file
fs.readFile(filePath,'utf-8',(err,data)=>{
    console.log(data);
});
//update file
fs.appendFile(filePath," i am orange -",(err)=>{
    if(!err)
        console.log("file updated successfully");
});

//rename file
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err)
        console.log("file Renamed successfully");
});

//delete file
// fs.unlinkSync(`${dirPath}/fruit.txt`);