const iniciarSesion = document.querySelector('.list-menu:last-child')
const barra = document.querySelector(".list-menu:nth-child(4)")

iniciarSesion.addEventListener('mouseover', () => {
    barra.classList.toggle('agrandar')
})
iniciarSesion.addEventListener('mouseout', () => {
    barra.classList.toggle('agrandar')
})