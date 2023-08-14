let arrayeventos = []
const URL_DATA = 'https://64cd129fbb31a268409a5658.mockapi.io/Eventos'; 
const eventoSeleccionado = JSON.parse(localStorage.getItem('eventoSeleccionado')); 
let cantidadGuardada = parseInt(localStorage.getItem('cantidadGuardada')) || 1;





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

function obtenerEventos() {
    fetch(URL_DATA)
        .then((response) => response.json())
        .then((data) => {
            arrayeventos = data;
            console.log(arrayeventos); // Asegúrate de que los datos se carguen correctamente
            cargareventos(arrayeventos);
        })
        .catch((error) => {
            console.error(error);
            container.innerHTML = retornarCardError();
        });
}

