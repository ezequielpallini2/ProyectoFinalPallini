const tableBody = document.querySelector('div#container.container')
const precioEvento = parseInt(eventoSeleccionado.price);
const btnComprar = document.querySelector('button#btnComprar')
const btnCancelar = document.querySelector('button#btnCancelar')


function mostrarEventoHTML(evento, cantidad) {
    const total = precioEvento * cantidad;
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
                        <option value="5" ${cantidad === 5 ? 'selected' : ''}>5</option>
                    </select>
                <p id="totalRow">Total: $${total}</p>
                
            </div>
            </div>`;
}

// Leer la cantidad guardada por defecto desde localStorage

tableBody.innerHTML = mostrarEventoHTML(eventoSeleccionado, cantidadGuardada);

const numeroSeleccionado = document.querySelector("#numeroSeleccionado");

numeroSeleccionado.addEventListener("change", function () {
    const cantidadSeleccionada = parseInt(numeroSeleccionado.value);
    localStorage.setItem('cantidadGuardada', cantidadSeleccionada);
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
            localStorage.
            Swal.fire('Muchas gracias por su compra!', '', 'success')
            sectionProductos.innerHTML = mostrarMsgCarritoVacio()
        }
    })
})

btnCancelar.addEventListener('click', ()=> {
    localStorage.removeItem('eventoSeleccionado')
    localStorage.removeItem('cantidadSeleccionada')

})

