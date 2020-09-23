const Express = require ('express');

const app = Express();


app.listen(8187,()=>{
    console.log("servidor iniciado");
})

app.get("/",(request,response)=>{
    response.send("Seja bem vindo");
})