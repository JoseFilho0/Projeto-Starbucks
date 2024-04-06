let circulo = document.querySelector(".circulo")
let imgCopo = document.querySelector(".copog")
let verde = document.querySelector(".verde")
let amarelo = document.querySelector(".amarelo")
let rosa = document.querySelector(".rosa")

amarelo.addEventListener("click", () => {
    imgCopo.src = "./img/img2.png"
    circulo.style.background = "#eb7495"
})
verde.addEventListener("click", () => {
    imgCopo.src = "./img/img1.png"
    circulo.style.background = "#017143"
})
rosa.addEventListener("click", () => {
    imgCopo.src = "./img/img3.png"
    circulo.style.background = "#d752b1"
})