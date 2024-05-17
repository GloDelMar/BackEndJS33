
// todo add "limpiar mi cuarto"
// todo done 10 (por indice de tareas)
// todo ls (para ver todas las tareas que tenemos)
// todo alv

// necesitamos
// - un archivo para guardar los todos (.json)
// - una función para cada comando
// - usar process.argv para leer los comandos
// - usar fs para leer y escribir el archivo

const fs = require("fs");


 const dbFile = "db.json"

 function init () {
    // crear el achivo de base de datos
   ;
    const fileExists = fs.existsSync(dbFile);

    if(!fileExists){
        fs.writeFileSync(dbFile, JSON.stringify({todos: []}))
    }
}

function getTodos(){
   
    const content = fs.readFileSync(dbFile, "utf8")
    return JSON.parse(content).todos
}

function updateTodos(todos){
    const newTodos = {todos: todos }
    const newTodosAsString = JSON.stringify(newTodos)
    fs.writeFileSync(dbFile, newTodosAsString)
}


function add(task) {
const todos = getTodos()
todos.push(task)
updateTodos(todos)
}

function done(taskIndex){
    const todos = getTodos()
    todos.splice(taskIndex, 1)
    updateTodos(todos)
}

function ls(){
    const todos = getTodos()

    if(!todos.length){
        console.log("[EMPTY]")
        process.exit()
    }

    todos.forEach((element, idx)=>{
        console.log(idx, "-", element)
    } )
}

function alv(){
updateTodos([])
}

function main(){
    const command = process.argv[2];
    const arg = process.argv[3]

    init()
    if(command=== "ls"){
        ls()
    } else if(command === "add"){
        if(!arg){
            console.error("missing task")
            process.exit(1)
        }

        add(arg)
        ls()
        console.log("Task added")
        
    } else if(command==="done"){
        if(!arg){
            console.error("missing task")
            process.exit(1)
        }
        const idx = parseInt(arg)
        if(isNaN(idx)){
            console.error("Invalid index")
        }
        const todos = getTodos()

        if(idx < 0 || idx >= todos.lenght ){
            console.error("Invalid index")
            process.exit(1)
        }

        done(idx)
        ls()
        console.log("task completed!")
    }else if (command === "alv"){
        alv()
        console.log("Algo linfo vendrá :D")
    }else{
        console.error("Invalid command: ", command)
        process.exit(1)
    }
}

main()


/* 
const todos = getTodos()
todos.push("nueva Tarea")
updateTodos(todos)

    // borrar

*/