

const b1=document.getElementById("b1")
const b2=document.getElementById("b2")
const b3=document.getElementById("b3")
const b4=document.getElementById("b4")
const b5=document.getElementById("b5")
const b6=document.getElementById("b6")
const b7=document.getElementById("b7")
const b8=document.getElementById("b8")
const b9=document.getElementById("b9")
const b0=document.getElementById("b0")
const suma=document.getElementById("suma")
const resta=document.getElementById("resta")
const bc=document.getElementById("bc")
const igual=document.getElementById("igual")
const display=document.getElementById("display")

let result={
    leftNumber:null,
    operador:null,
    rightNumber:null,
    resultado:null,
}


b1.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "1": result.leftNumber + "1"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "1": result.rightNumber + "1"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b2.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "2": result.leftNumber + "2"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "2": result.rightNumber + "2"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b3.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "3": result.leftNumber + "3"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "3": result.rightNumber + "3"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b4.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "4": result.leftNumber + "4"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "4": result.rightNumber + "4"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b5.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "5": result.leftNumber + "5"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "5": result.rightNumber + "5"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b6.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "6": result.leftNumber + "6"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "6": result.rightNumber + "6"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b7.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "7": result.leftNumber + "7"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "7": result.rightNumber + "7"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b8.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "8": result.leftNumber + "8"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "8": result.rightNumber + "8"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b9.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "9": result.leftNumber + "9"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "9": result.rightNumber + "9"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

b0.addEventListener("click",function(){
    if(!result.operador){
        result.leftNumber = !result.leftNumber ? "0": result.leftNumber + "0"
        display.textContent = result.leftNumber
    } else {
        result.rightNumber = !result.rightNumber ? "0": result.rightNumber + "0"
        display.textContent = result.leftNumber + result.operador + result.rightNumber
    }
})

suma.addEventListener("click",function(){
    if(!result.leftNumber){
        alert("Falta algún número")
    }else if(!result.rightNumber){
        result.operador = "+"; 
        display.textContent = result.leftNumber + " " + result.operador
    }
})

resta.addEventListener("click",function(){
    if(!result.leftNumber){
        alert("Falta algún número")
    }else if(!result.rightNumber){
        result.operador = "-"; 
        display.textContent = result.leftNumber + " " + result.operador
    }
})

igual.addEventListener("click",function(){
    if(!result.operador){
        alert("Falta el operador")
    }else if(!result.rightNumber || !result.leftNumber){
        alert("Falta algún número")
    }else{
        if(result.operador === "+"){
            result.resultado = +result.leftNumber + +result.rightNumber;
            display.textContent = result.resultado;
        }else if(result.operador === "-"){
            result.resultado = +result.leftNumber - +result.rightNumber;
            display.textContent = result.resultado;
        }
    }
})

bc.addEventListener("click",function(){
    result = {leftNumber:null,
        operador:null,
        rightNumber:null,
        resultado:null,};
        display.textContent = "0"
})

//leftNumber:null
//leftNumber:1
//leftNumber:null