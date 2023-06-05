const botaoLigar = document.querySelector("#ligar")
const botaoDesligar = document.querySelector("#desligar")
let fotoApagada = document.getElementById("apagada")

const imgAcesa = "lamp-acesa.jpg"
const imgApagada = "lamp-apagada.jpg"
const imgQuebrada = "lamp-quebrada.jpg"

const lampAcesa = () => {
    fotoApagada.src = imgAcesa
}

const lampApagada = () => {
    fotoApagada.src = imgApagada
}

const lampQuebrada = () => {
    fotoApagada.src = imgQuebrada
}

botaoLigar.addEventListener("click", lampAcesa )
botaoDesligar.addEventListener("click", lampApagada)
fotoApagada.addEventListener("dblclick", lampQuebrada)