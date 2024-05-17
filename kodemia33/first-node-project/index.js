const prompt = require("prompt-sync")()

function ingresarNombres() {
let nameArray = []
let answer = "sí"

while(answer === "sí") {
    answer = prompt("¿Deseas agregar un nombre? (sí/no): ");

    if(answer === "sí") {
        let name = prompt("Ingresa un nombre: ");
        nameArray.push(name);
    }
}
return nameArray
}

let totalidadNombres = ingresarNombres()

let totalNombres = totalidadNombres.length


console.log(`Ingresaste ${totalNombres} nombres en total`)

function getNombreMasLargo(nameArray) {
    let nombreMasLargo = "";
  
    for (let nombre of nameArray) {
        if (nombre.length > nombreMasLargo.length) {
            nombreMasLargo = nombre;
        }
    }
  
    return nombreMasLargo;
}

let elDeMasLetras = getNombreMasLargo(totalidadNombres)

console.log(`El nombre más lago de los que ingresaste es: ${elDeMasLetras}`)

function getNombreMasCorto(nameArray) {
    let nombreMasCorto = nameArray[0]
  
    for (let nombre of nameArray) {
        if (nombre.length < nombreMasCorto.length) {
            nombreMasCorto = nombre;
        }
    }
  
    return nombreMasCorto;
}

let menosLetras = getNombreMasCorto(totalidadNombres)
console.log(`El nombre más corto de los que ingresaste es: ${menosLetras}`)