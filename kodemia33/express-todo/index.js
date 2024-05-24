const express = require("express")

const server = express()
server.use(express.json())

const todos = []

//listar los todos
server.get("/todos", (request, response)=>{
    response.json({
        message: `all todos`,
        todos: todos
    })
})

//agregar un todo
server.post(`/todos`, (request, response)=>{
    const newTodo = request.body.todos
    todos.push(newTodo)

    if(!newTodo){
        response.status(400)
        response.json({
            message: "todo is required"
        })
        return
    }

    response.json({
        message: `new todo added`,
        todos: todos
    })
})

//eliminar un todo
server.delete(`/todos/:idx`, (request, response)=>{
    const indexToDelete = request.params.idx
    const indexasInteger = parseInt(indexToDelete)

    if(isNaN(indexasInteger)){
        response.status(400)
        response.json({
            message: `invalid index, must be a number`
        })
    }

    if(indexasInteger < 0 || indexasInteger >= todos.length){
        response.status(400)
        response.json({
            message: "invalid index, out of bound"
        })
        return
    }

    todos.splice(indexasInteger, 1)

    response.json({
        message: "todo deleted successfully",
        todos: todos
    })
})

server.listen(8080, ()=>{
    console.log(`server running on port 8080`)
})
