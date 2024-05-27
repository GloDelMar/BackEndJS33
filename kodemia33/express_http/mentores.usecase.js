const db = require("./db")

function add(newMentor){
    if(!newMentor.name)throw new Error(`name is required`)
    
    if(!newMentor.gender) throw new Error("gender ir required")    
    if(!["f","m","mb"].includes(newMentor.gender.toLowerCase())){
        throw new Error("only, m, f and nb values are allowed")
     }

     if(!newMentor.age) throw new Error("age is required")
        newMentor.age = parseInt(newMentor.age)
    if(isNaN(newMentor.age))throw new Error("age must be a number")
    if(newMentor.age <= 0) throw new Error("age must be greater than 0")
    
    if (typeof newMentor.isActive !== "boolean"){
        throw new Error("isActive must be a boolean")
    }
    const dbData = db.read()
    if (!dbData.mentores) {
        dbData.mentores = []
    }
    dbData.mentores.push(newMentor)

    db.write(dbData)

    return dbData.mentores
}

function deleteAll(){
    const dbData = db.read()

    dbData.mentores = []

    db.write(dbData)

    return dbData.mentores
}

function deleteByName(name){
    if(!name) throw new Error("name is require")
    
    const dbData = db.read()

   dbData.mentores = dbData.mentores.filter((mentor)=> mentor.name !== name)
    

    db.write(dbData)

    return dbData.mentores
}

function getAll(){
   return db.read().mentores
}


module.exports ={
    add,
    deleteAll,
    deleteByName,
    getAll,
}