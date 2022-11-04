const parrafos = document.querySelectorAll(".parrafo");
const containers = document.querySelectorAll(".container");
const papelera = document.querySelector(".recycleBin");

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event => {
        parrafo.classList.add('dragging');
        event.dataTransfer.setData('id', parrafo.id);
    })
    parrafo.addEventListener('dragend', event => {
        parrafo.classList.remove('dragging');
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', event => {
        event.preventDefault();
        const parrafo = document.querySelector('.dragging');
        container.appendChild(parrafo);
        event.dataTransfer.dropEffect = 'move';
    })
    papelera.addEventListener('dragover', event => {
        const parrafo = document.querySelector('.dragging');
        parrafo.remove();
    })

})



