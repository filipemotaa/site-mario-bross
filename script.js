const form = document.querySelector(".formulario-conosco")
const mascara = document.querySelector(".mascara-formulario")
const sair = document.querySelector(".mascara-formulario")


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50px)"
    mascara.style.visibility = "visible"

}

function saiDaMascara() {
    sair.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
}