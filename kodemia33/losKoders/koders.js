const fs = require("fs")

const BaseDatosKoders = "dbkoders.json"

function init(){
    const kodersExisten = fs.existsSync(BaseDatosKoders)
    if(!kodersExisten){
        fs.writeFileSync(BaseDatosKoders, JSON.stringify({koders:[]}))
    }
}

function getListaKoders(){
    const content = fs.readFileSync(BaseDatosKoders, "utf8")
    return JSON.parse(content).koders
}

function actualizaListaK(koders){
    const newKoders = {koders: koders}
    const nuevoKodersAsString = JSON.stringify(newKoders)
    fs.writeFileSync(BaseDatosKoders, nuevoKodersAsString)
}

function add(elKoder){
    const koders = getListaKoders()
    koders.push(elKoder)
    actualizaListaK(koders)
}

function done(indiceDelKoder){
    const koders = getListaKoders()
    koders.splice(indiceDelKoder, 1)
    actualizaListaK(koders)
}

function ls(){
    const koders = getListaKoders()
    if(!koders.length){
        console.log("[Vacío]")
        process.exit()
    }
    koders.forEach((element, indice)=>{
        console.log(indice, "-", element)
    })
}

function apocalipsis(){
    actualizaListaK([])
}

function main(){
    const command = process.argv[2]
    const elCompa = process.argv[3]

    init()
    if(command === "ls"){
        ls()
    }
    else if(command === "add"){
        if(!elCompa){
            console.error("¿A quién tenía que agregar?")
            process.exit(1)
        }
        add(elCompa)
        ls()
        console.log("Koder agregado")
    }
    else if(command === "done"){
        if(!elCompa){
            console.log("¿De quién me hablas?")
            process.exit(1)
        }
        const indice = parseInt(elCompa)
        if(isNaN(indice)){
            console.error("Índice inválido")
        }
        const koders = getListaKoders()

        if (indice < 0 || indice >= koders.length){
            console.error("Índice Inválido")
            process.exit(1)
        }
        done(indice)
        ls()
        console.log("Funaste un koder con éxito")
    }
    else if(command === "apocalipsis"){
        apocalipsis()
        console.log("Nadie fue salvado en el juicio final u.u")
    }
    else{
        console.error("Ese comando no te lo vengo manejando, joven: ", command)
        process.exit(1)
    }
}

main()