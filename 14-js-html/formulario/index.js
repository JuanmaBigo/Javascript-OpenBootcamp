const f = document.getElementById("formula")

console.log(f)

f.addEventListener("submit", evento => {
console.log(evento)
evento.preventDefault()
})