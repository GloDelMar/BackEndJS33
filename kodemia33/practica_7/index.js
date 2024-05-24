const fs = require("fs")
const express = require("express")

const server = express()
server.use(express.json())

const BaseDatosKoders = "dbkoders.json"

const kodersData = JSON.parse(fs.readFileSync(BaseDatosKoders, "utf-8"))

  

server.get("/koders", (request, response)=>{
    const kodersExisten = JSON.parse(fs.readFileSync(BaseDatosKoders, "utf-8")); 
    
    if(!kodersExisten || kodersExisten.koders.length === 0 ){
        response.status(200)
        response.json({
        message: "Vacío"
    })
   }
   else{
    response.json({
        koders: kodersExisten.koders
    })
   }
    
})

server.post("/koders", (request, response)=>{

    const newKoder = request.body;

    kodersData.koders.push(newKoder);

    fs.writeFileSync(BaseDatosKoders, JSON.stringify(kodersData));

    response.json({
        message: "Nuevo koder agregado",
        koders: kodersData.koders
    })
})

server.delete("/koders/:indice", (request, response)=>{
    const indexToDelete = parseInt(request.params.indice)
    

    if (isNaN(indexToDelete) || indexToDelete < 0 || indexToDelete >= kodersData.koders.length) {
        response.status(400);
        response.json({
            message: "Índice inválido"
        });
        return;
    }
    const deletedKoder = kodersData.koders.splice(indexToDelete, 1)[0]
    fs.writeFileSync(BaseDatosKoders, JSON.stringify(kodersData))
    
    response.json({
        message: `Koder eliminado correctamente: ${deletedKoder.name}`,
    })
})

server.listen(8080, ()=>{
    console.log("Server running on port 8080")
})