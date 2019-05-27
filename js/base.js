const miCuenta = document.querySelector('.list-menu:last-child')
const iniciarSesion = document.querySelector('.list-menu:nth-child(5)')
const barra = document.querySelector(".list-menu:nth-child(4)")

const botonMenu = document.getElementById('contenedor-menu')
const modal = document.getElementById('modal-menu')

iniciarSesion.addEventListener('mouseover', () => {
    barra.classList.toggle('agrandar')
})
iniciarSesion.addEventListener('mouseout', () => {
    barra.classList.toggle('agrandar')
})


botonMenu.addEventListener('click', (e) => {
    modal.classList.toggle('mostrar-menu')
})

