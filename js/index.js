// Acceso al DOM, aquí :)
const container = document.querySelector('div#container.container');
const inputSearch = document.querySelector('input#inputSearch');


function activarClickEnBotones() {
    const botones = document.querySelectorAll('.btn.btn-primary');
    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            let evento = arrayeventos.find((evento) => parseInt(evento.id) === parseInt(boton.id));
            localStorage.setItem('eventoSeleccionado', JSON.stringify(evento));
        });
    });
}

function cargareventos(array) {
    container.innerHTML = ""
    array.forEach((evento) => container.innerHTML += retornarCardHTML(evento))
    activarClickEnBotones();
}


inputSearch.addEventListener('search', ()=> {
    localStorage.setItem("ultimaBusqueda", inputSearch.value)
    const resultado = arrayeventos.filter((evento)=> evento.description.toLowerCase().includes(inputSearch.value.toLowerCase()))
    cargareventos(resultado)
})


// Llamada inicial para obtener los eventos
obtenerEventos()