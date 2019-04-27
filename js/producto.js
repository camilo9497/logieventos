const comentarios = document.getElementById('comentarios')
const descripcion = document.getElementById('descripcion')
const detalles = document.getElementById('detalles')
const leeResenas = document.getElementById('lee-resenas')
const contenidoComentarios = document.getElementById('contenido-comentarios')
const contenidoDescripcion = document.getElementById('contenido-descripcion')
const contenidoDetalles = document.getElementById('contenido-detalles')



const mostrarComentario = (e) => {
    contenidoDescripcion.classList.remove('mostrar')
    contenidoDetalles.classList.remove('mostrar')
    contenidoComentarios.classList.add('mostrar')
    descripcion.classList.remove('seleccionado')
    detalles.classList.remove('seleccionado')
    comentarios.classList.add('seleccionado')

}

comentarios.addEventListener('click', mostrarComentario)

descripcion.addEventListener('click', (e) => {

    contenidoDescripcion.classList.add('mostrar')
    contenidoDetalles.classList.remove('mostrar')
    contenidoComentarios.classList.remove('mostrar')
    descripcion.classList.add('seleccionado')
    detalles.classList.remove('seleccionado')
    comentarios.classList.remove('seleccionado')
})
detalles.addEventListener('click', (e) => {
    contenidoDescripcion.classList.remove('mostrar')
    contenidoDetalles.classList.add('mostrar')
    contenidoComentarios.classList.remove('mostrar')
    descripcion.classList.remove('seleccionado')
    detalles.classList.add('seleccionado')
    comentarios.classList.remove('seleccionado')
})

leeResenas.addEventListener('click', mostrarComentario)


