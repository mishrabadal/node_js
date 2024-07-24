const express = require("express");
const app = express();
app.get("/",(request,response)=>{
response.send({
    name:'badal kumar',
    class:'3rd sem',
    roll: '23DCS02'

});
});
app.get("/about",(request,response)=>{
    response.send("<h1>hello india</h1>");
});

app.get("/friend",(request,response)=>{
    response.send("welcome : "+request.query.name);
});

app.listen(8080);