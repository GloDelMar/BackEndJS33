const number = process.argv[2]

let theNumber = parseFloat(number)

if (isNaN(theNumber)) {
    console.log("no es número")

} else if (theNumber % 2 === 0) {
    console.log("ese número par")

} else {
    console.log("ese número es impar");
}