
const { Console } = require("console");
const fs = require("fs");
const input  = process.argv;
console.log(input);
//fs.writeFileSync("apple.txt","i am apple");
console.log(input);
if(input[2]=="add"){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=="del"){
fs.unlinkSync(input[3]);
}

// creating multiple files
const path =  require("path");
const dirPath = path.join(__dirname,'/files');
console.log(dirPath);
for(i=0;i<5;i++){
fs.writeFileSync(`${dirPath}/file_${i}.txt`,`number ${i} a simple text file`);
}

//reading all the files
fs.readdir(dirPath,(err,files)=>{
files.forEach((item)=>{
console.log(item);
});
});
