const numbers = document.querySelectorAll (".number")

const calculatorScreen = document.querySelector (".calculator-screen")

const operators = document.querySelectorAll(".operator")

const equalSign = document.querySelector(".equal-sign")

const clearBtn = document.querySelector(".all-clear")

const decimal =  document.querySelector(".decimal")

//decimal
decimal.addEventListener("click", (event) => {
    console.log(event.target.value)
})
// AC
clearBtn.addEventListener("click", () => {
    clearAll ()
    updateScreen (currentNumber)
})

//kalkukasi
equalSign.addEventListener("click", () => {
   calculate()
   updateScreen(currentNumber)
})

//memanggil operator
operators.forEach ((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//variable kalkulasi
let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

//beri number ke variable current
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number 
    }
}

//definisi inputOperator 

const inputOperator = (operator) => {
   if (calculationOperator === "") {
    prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
}

// ambil nilai
numbers.forEach ((number) => {
    number.addEventListener("click", (event) => {
        inputNumber (event.target.value)
        updateScreen (currentNumber)
    })
})

//ubah nilai screen
const updateScreen = (number) => {
    calculatorScreen.value = number
}


//fungsi kalkukasi
const calculate = () => {
    let results = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber/currentNumber
            break
        default:
          return
    }
currentNumber = result
calculationOperator = " "
}

//fungsi AC
const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}

//fungsi desimal
inputDecimal = (dot) => {
   if(currentNumber.includes(".")) {
    return
   }
   currentNumber += dot
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})