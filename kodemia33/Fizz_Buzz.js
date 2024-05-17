const number = process.argv[2]

let theNumber = parseFloat(number)

if (isNaN(theNumber)) {
    console.error("Eso no es un número")
    process.exit()

} else {

for (i=1; i<= theNumber; i++){
   
  if (i%3==0 && i%5==0){
        console.log(i+"- FizzBuzz")
    }
    else if (i%3==0){
        console.log(i+"- Fizz")
    }
    else if (i%5==0){
        console.log(i+"- Buzz")
    }
    else{
        console.log(i)
    }
}
}