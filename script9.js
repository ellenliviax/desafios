let btn1 = document.getElementById("btn1")   
//let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. //

let btn2 = document.getElementById("btn2")

let btn3 = document.getElementById("btn3")


btn1.addEventListener ('click',function(){
    alert("Você clicou no 1° botão")
})

btn2.addEventListener ('click',function(){
    alert("Você clicou no 2° botão")
})

btn3.addEventListener ('click',function(){
    alert("Você clicou no 3° botão")
})