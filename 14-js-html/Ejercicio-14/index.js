const boton = document.querySelector(".btn")

boton.addEventListener("click", () => {
alert("click en el boton")
})

$(document).ready(() => {
    $(".btn").click(() => {
        console.log("Hola, estoy utilizando jQuery");
    });
});