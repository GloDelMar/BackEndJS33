const express = require("express")
const  kodersUseCase = require("./koders.usecase")
const mentoresUseCase = require("./mentores.usecase")

const server = express()

server.use(express.json())

server.get("/", (request, response)=>{
    response.json({
        message: "Kodeamia APIv1"
    })
})

//GET /koders -----> Endpoint (convinacion de un método y una URL)
server.get(`/koders`, (request, response)=>{
    try {
        const koders = kodersUseCase.getAll()

        response.json({
            message: "All koders",
            data:{
                koders: koders,
            },
        })
    } catch(error){
        response.status(error.status || 500)
        response.json({
            error: error.message
        })

    }
})

server.post("/koders",(request, response)=>{
    try{
        const newKoder = request.body
        const koders = kodersUseCase.add(newKoder)

        response.json({
            message: "Koder added",
            data: {koders}
        })
    } catch(error){
response.status(error.status || 500)

response.json({
    error: error.message
})
    }
})

server.delete("/koders", (request, response)=>{
    try{
        const koders = kodersUseCase.deleteAll()
        response.json({
            message: "All koders deleted",
            data: {koders}
        })

    } catch(error){
        response.status(error.status || 500)

        response.json({
            error: error.message
        })  
    }
})

server.delete("/koders/:name", (request, response)=>{
    try{
        const name = request.params.name
        const koders = kodersUseCase.deleteByName(name)

        response.json({
            message: "Koder deleted",
            data:{koders}
        })
    }catch(error){
        response.status(error.status || 500)

        response.json({
            error: error.message
        })  
    }
})

server.get(`/mentores`, (request, response)=>{
    try {
        const mentores = mentoresUseCase.getAll()

        response.json({
            message: "All mentors",
            data:{
                mentores: mentores,
            },
        })
    } catch(error){
        response.status(error.status || 500)
        response.json({
            error: error.message
        })

    }
})

server.post("/mentores",(request, response)=>{
    try{
        const newMentor = request.body
        const mentores = mentoresUseCase.add(newMentor)

        response.json({
            message: "Mentor added",
            data: {mentores}
        })
    } catch(error){
response.status(error.status || 500)

response.json({
    error: error.message
})
    }
})

server.delete("/koders", (request, response)=>{
    try{
        const mentores = mentoresUseCase.deleteAll()
        response.json({
            message: "All mentors deleted",
            data: {mentores}
        })

    } catch(error){
        response.status(error.status || 500)

        response.json({
            error: error.message
        })  
    }
})

server.delete("/mentores/:name", (request, response)=>{
    try{
        const name = request.params.name
        const mentores = mentoresUseCase.deleteByName(name)

        response.json({
            message: "Mentor deleted",
            data:{mentores}
        })
    }catch(error){
        response.status(error.status || 500)

        response.json({
            error: error.message
        })  
    }
})


module.exports = server