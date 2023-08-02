const tableBody = document.querySelector('tbody');
const precioEvento = parseInt(eventoSeleccionado.price);

function mostrarEventoHTML(evento, cantidad) {
    const total = precioEvento * cantidad;
    return `<tr>
                <td style="width: 200px;">
                    <div class="div-card" style="background-image: url('${evento.imagen}'); background-size: cover;  background-color: rgba(255, 255, 255, 0.1);">
                    </div>
                </td>
                
                <td>
                    <p>${evento.description}</p>
                    <p>Cantidad de entradas:</p>
                    <select id="numeroSeleccionado">
                        <option value="1" ${cantidad === 1 ? 'selected' : ''}>1</option>
                        <option value="2" ${cantidad === 2 ? 'selected' : ''}>2</option>
                        <option value="3" ${cantidad === 3 ? 'selected' : ''}>3</option>
                        <option value="4" ${cantidad === 4 ? 'selected' : ''}>4</option>
                        <option value="5" ${cantidad === 5 ? 'selected' : ''}>5</option>
                    </select>
                    <p id="totalRow">Total: $${total}</p>
                    <div class="centrar-div">
                        <button class="button" id="btnComprar">COMPRAR</button>
                    </div>
                </td>
            </tr>`;
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


