const express = require("express")

const server = express()

const koders = [
    {
        name: "Omar",
        generacion: 33

    },
    {
        name: "Hugo",
        generacion: 33
    },
    {
        name: "Fer",
        generacion: 33
    }
]

server.use(express.json())//habilita nuestro server para poder recibir
// peticiones en formato json

server.get(`/`,(request, response)=> {
     console.log(`GET root`)
     
     response.writeHead(200,{
        "Content-Type": "text/plain"
     })
     response.end("Hola, mundo")
})

server.post("/koders", (request, response)=>{
    console.log("body: ", request.body)
    const newKoderName = request.body.name
    const newKoderGeneration = request.body.generacion

    const newKoder = {
        name: newKoderName,
        generacion: newKoderGeneration
    }

    koders.push(newKoder)

    response.json(koders)
})

server.get(`/koders`,(request, response)=>{
/*response.writeHead(200,{
    "Content-Type": "application/json"

})
response.end(JSON.stringify(koders))*/
response.status(500)
response.json(koders)
})

server.listen(8080, ()=>{
    console.log(`Server ready`)
})