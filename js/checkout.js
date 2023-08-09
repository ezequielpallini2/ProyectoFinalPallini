const tableBody = document.querySelector('div#container.container')
const precioEvento = parseInt(eventoSeleccionado.price);
const btnComprar = document.querySelector('button#btnComprar')
const btnCancelar = document.querySelector('button#btnCancelar')


function mostrarEventoHTML(evento, cantidad) {
    const total = precioEvento * cantidad;
     // Calcula el máximo entre 5 y el stock disponible
    const maximasEntradas = Math.min(5, evento.stock);
    return `<div class="card" style="width: 18rem;">
            <img src="${evento.imagen}" class="card-img-top" alt="${evento.description}">
            <div class="card-body">
                <h5 class="card-title">Primavera 2023</h5>
                <p class="card-text">${evento.description}</p>
                <p class="card-text">$${evento.price}</p>
                <p class="card-text">¡Quedan solo ${evento.stock} entradas! </p>
                <p>Cantidad de entradas:</p>
                    <select id="numeroSeleccionado">
                        <option value="1" ${cantidad === 1 ? 'selected' : ''}>1</option>
                        <option value="2" ${cantidad === 2 ? 'selected' : ''}>2</option>
                        <option value="3" ${cantidad === 3 ? 'selected' : ''}>3</option>
                        <option value="4" ${cantidad === 4 ? 'selected' : ''}>4</option>
                        <option value="5" ${cantidad === maximasEntradas ? 'selected' : ''}>5</option>
                    </select>
                <p id="totalRow">Total: $${total}</p>
                
            </div>
            </div>`;
}

// Leer la cantidad guardada por defecto desde localStorage

tableBody.innerHTML = mostrarEventoHTML(eventoSeleccionado, cantidadGuardada);

const numeroSeleccionado = document.querySelector("#numeroSeleccionado");

function restarStock(eventoId, cantidadARestar) {
    const url = `https://64cd129fbb31a268409a5658.mockapi.io/Eventos/${eventoId}`;
    
    // Obtener el evento actual
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al obtener el evento');
        }
        return response.json();
    })
    .then((evento) => {
        const stockActual = evento.stock;
        const nuevoStock = stockActual - cantidadARestar;
        
        // Actualizar el stock en la API
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                stock: nuevoStock,
            }),
        });
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al actualizar el stock');
        }
        console.log('Stock actualizado correctamente');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


numeroSeleccionado.addEventListener("change", function () {
    const cantidadSeleccionada = parseInt(numeroSeleccionado.value);
    localStorage.setItem('cantidadGuardada', cantidadSeleccionada);
    cantidadGuardada = cantidadSeleccionada
    const maxEntradas = Math.min(5, eventoSeleccionado.stock);
    const cantidadMaxima = Math.min(maxEntradas, cantidadSeleccionada); // Calcula el mínimo entre maxEntradas y cantidadSeleccionada
    if (cantidadSeleccionada !== cantidadMaxima) {
        numeroSeleccionado.value = cantidadMaxima; // Limita la cantidad seleccionada al máximo
    }
    const total = precioEvento * cantidadSeleccionada;
    document.getElementById('totalRow').textContent = `Total: $${total}`;
});

btnComprar.addEventListener('click', ()=> {
    Swal.fire({
        title: '¿Confirmas la compra?',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: 'CONFIRMAR',
        denyButtonText: 'CANCELAR',
        customClass: {
            confirmButton: 'bg-primary ', // Clase para el botón de confirmación
            denyButton: 'bg-secondary',    // Clase para el botón de cancelación
          },
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('eventoSeleccionado')
            localStorage.removeItem('cantidadSeleccionada')
            restarStock(eventoSeleccionado.id, cantidadGuardada);
            Swal.fire('¡Muchas gracias por su compra!', '', 'success')
        }
    })
})

btnCancelar.addEventListener('click', ()=> {
    localStorage.removeItem('eventoSeleccionado')
    localStorage.removeItem('cantidadSeleccionada')

})

