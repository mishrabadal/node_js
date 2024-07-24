
const http = require("http");

const data = require("./test");
http.createServer((req,res)=>{
res.writeHead(200,{
    'Content-Type':'application/json'
});
res.write(JSON.stringify(data));
console.log(data);
res.end();
}).listen(8080);