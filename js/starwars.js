$(document).ready(() => {
    cargarPersonajesStarWars();
});

function cargarPersonajesStarWars() {
    $.ajax({
        url: "https://swapi.dev/api/people/",
        method: "GET"
    }).done(function (resp) {

        let personajes = resp.results;

        personajes.forEach((personaje, index) => {
            
            let imageUrl = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;

            let template = `
            <div class="card col-12 col-xl-2 my-3 border-primary shadow text-center">
              <img class="card-img-top img-fluid" src="${imageUrl}" alt="Imagen de ${personaje.name}" onerror="this.src='https://via.placeholder.com/200?text=No+Image';">
              <div class="card-body">
                <h4 class="card-title">${personaje.name.capitalize()}</h4>
                <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal-detalles-${index + 1}">Ver más</button>
              </div>
            </div>
            `;

            var modal = `
            <!-- Modal para detalles -->
            <div class="modal fade" id="modal-detalles-${index + 1}">
              <div class="modal-dialog">
                <div class="modal-content">

                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">${personaje.name.capitalize()} - Detalles</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  <!-- Modal body -->
                  <div class="modal-body">
                    <p><strong>Nombre:</strong> ${personaje.name}</p>
                    <p><strong>Altura:</strong> ${personaje.height} cm</p>
                    <p><strong>Peso:</strong> ${personaje.mass} kg</p>
                    <p><strong>Género:</strong> ${personaje.gender}</p>
                    <p><strong>Año de nacimiento:</strong> ${personaje.birth_year}</p>
                    <p><strong>Color de pelo:</strong> ${personaje.hair_color}</p>
                    <p><strong>Color de piel:</strong> ${personaje.skin_color}</p>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                  </div>

                </div>
              </div>
            </div>
            `;

            $("main div.row").append(template);
            $("body").append(modal);
        });
    });
}

// Función para poner mayuscula la primera letra
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});
