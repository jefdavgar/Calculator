//btn clear
const clean_one = document.getElementById("btn_one");
const clean_all = document.getElementById("btn_all")
//symbols
const multiply = document.getElementById("multiply")
const division = document.getElementById("division")
const plus = document.getElementById("plus")
const subtract = document.getElementById("subtract")
const point = document.getElementById("point")
const equal = document.getElementById("equal")
const default_ = document.getElementById("default")
//numbers 1-9
const number0 = document.getElementById("number0")
const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")
const number4 = document.getElementById("number4")
const number5 = document.getElementById("number5")
const number6 = document.getElementById("number6")
const number7 = document.getElementById("number7")
const number8 = document.getElementById("number8")
const number9 = document.getElementById("number9")

const input = document.querySelector("input")
let count = 0;
let operator= ""
let content_1=0
let content_2=0

clean_all.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=" "
})

clean_one.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value= input.value.slice(0, -1)
})

point.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"."
})

multiply.addEventListener("click", ()=>{
    content_1=input.value
    console.log(content_1)
    operator="*"
    input.value=" "
})

division.addEventListener("click", ()=>{
    content_1= parseFloat(input.value)
    console.log(content_1)
    operator="/"
    input.value=" "
})

plus.addEventListener("click", ()=>{
    content_1= parseFloat(input.value)
    console.log(content_1)
    operator="+"
    input.value=" "
})

subtract.addEventListener("click", ()=>{
    content_1= parseFloat(input.value)
    console.log(content_1)
    operator="-"
    input.value=" "
})

default_.addEventListener("click", ()=>{
    content_1= parseFloat(input.value)
    console.log(content_1)
    input.value="Hello Word"
})


equal.addEventListener("click", ()=>{
    content_2=parseFloat(input.value)
    console.log(content_1)
    console.log(content_2)
    switch(operator){
        case "*":
            input.value= content_1*content_2
            break
        case "/":
            input.value= content_1/content_2
            break
        case "-":
            input.value= content_1-content_2
            break
        case "+":
            input.value= content_1+content_2
            break
        default:
            input.value="Error 404"
            console.log("error 404")
            break
    }
})

number0.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"0"
})

number1.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"1"
})

number2.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"2"
})

number3.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"3"
})

number4.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"4"
})

number5.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"5"
})

number6.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"6"
})

number7.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"7"
})

number8.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"8"
})

number9.addEventListener("click", ()=>{
    count++
    console.log(count)
    input.value=input.value+"9"
})