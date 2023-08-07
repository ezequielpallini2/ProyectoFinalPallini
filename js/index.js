// Acceso al DOM, aquí :)
const container = document.querySelector('div#container.container');
const inputSearch = document.querySelector('input#inputSearch');
const URL_DATA = 'https://64cd129fbb31a268409a5658.mockapi.io/Eventos'; 


function retornarCardError() {
    return `<div class="card-error">
                <h2>Houston, tenemos un problema</h2>
                <h3>Vuelve a intentar en unos minutos...</h3>
                <h4>⏳</h4>
            </div>`;
}


function retornarCardHTML({ id, imagen, description, price, stock } = evento) {
    return `<div class="card" style="width: 18rem;">
            <img src="${imagen}" class="card-img-top" alt="${description}">
            <div class="card-body">
                <h5 class="card-title">Primavera 2023</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">$${price}</p>
                <p class="card-text">¡Quedan solo ${stock} entradas! </p>
                <a href="checkout.html" class="btn btn-primary" id="${id}">Comprar</a>
            </div>
            </div>`;
}


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



function obtenerEventos() {
    fetch(URL_DATA)
        .then((response) => response.json())
        .then((data)=> arrayeventos.push(...data))
        console.log(arrayeventos)
        cargareventos(arrayeventos)
        
        //.catch((error) => container.innerHTML = retornarCardError());
}


// Llamada inicial para obtener los eventos
obtenerEventos();

//const formSearch = document.querySelector('form[role="search"]');
//formSearch.addEventListener('submit', (event) => {
//    localStorage.setItem("ultimaBusqueda", inputSearch.value);
 //   const resultado = arrayeventos.filter((evento) => evento.description.toLowerCase().includes(inputSearch.value.toLowerCase()));
//    cargareventos(resultado);
//});

