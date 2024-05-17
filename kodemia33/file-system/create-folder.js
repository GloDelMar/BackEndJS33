const fs = require("node:fs")

fs.mkdirSync("carpetaDePrueba",{recursive:true}, (err)=>{
    if(err) throw err
})