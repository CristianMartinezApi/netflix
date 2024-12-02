let botonsom = document.querySelector(".boton-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botonsom.addEventListener("click", ligasom)

function ligasom() {
    video.muted = false
}

botao.addEventListener("click", mostrarmodal)
modal.addEventListener("click", escondermodal)
function mostrarmodal() {
    modal.style.display = "block"
}

function escondermodal() {
    modal.style.display = "none"
}

window.addEventListener("load", tocaraudio)
function tocaraudio() {
    audio.play()
}