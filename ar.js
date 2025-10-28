
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Script `ar.js` iniciado.');

  const nombresPaises = [
    "Estados Unidos",  // targetIndex: 0
    "Mexico",          // targetIndex: 1
    "Canada",          // targetIndex: 2
    "Nueva Zelanda",   // targetIndex: 3
    "Iran",            // targetIndex: 4
    "Argentina",       // targetIndex: 5
    "Uzbekistan",      // targetIndex: 6
    "Corea del sur",   // targetIndex: 7
    "Egipto",        // targetIndex: 8
    "Australia",       // targetIndex: 9
    "Brasil",          // targetIndex: 10
    "Ecuador",         // targetIndex: 11
    "Uruguay",         // targetIndex: 12
    "Cabo verde",      // targetIndex: 13
    "Paraguay",        // targetIndex: 14
    "Tunez",          // targetIndex: 15
    "Argelia",         // targetIndex: 16
    "Arabia Saudita"  // targetIndex: 17

  ];

  // --- CÓDIGO NUEVO: Base de Datos de Jugadores ---
  const jugadoresPorPais = {
    "Estados Unidos": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "Flag_of_the_United_States.svg.jpeg" // y esta también
    }],
    "Mexico": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Canada": [{
      nombre: "Alphonso Davies",
      calificacion: 5,
      imagen: "gimenez.jpeg" // Asegúrate de tener esta imagen
    }],
    "Nueva Zelanda": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Iran": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Argentina": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Uzbekistan": [{
      nombre: "chava Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Corea del sur": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Egipto": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Australia": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Brasil": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Ecuador": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Uruguay": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Cabo verde": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Paraguay": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Tunez": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Argelia": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    "Arabia Saudita": [{
      nombre: "Santiago Giménez",
      calificacion: 4,
      imagen: "gimenez.jpeg" // y esta también
    }],
    // Agrega más países y jugadores aquí
  };
  // ---------------------------------------------

  // --- Seleccionar elementos del DOM ---
  const sceneEl = document.querySelector('a-scene');
  const countryUi = document.querySelector('#nombre-pais-ui');
  const countryNameEl = document.querySelector('#nombre-pais');

  // --- CÓDIGO NUEVO: Seleccionar elementos de la tarjeta ---
  const playerCard = document.querySelector('#player-card');
  const playerNameEl = document.querySelector('#player-name');
  const playerImageEl = document.querySelector('#player-image');
  const playerRatingEl = document.querySelector('#player-rating');
  // ----------------------------------------------------

  // --- Verificar que todos los elementos existen ---
  if (!sceneEl || !countryUi || !countryNameEl || !playerCard) { // <-- Añadimos playerCard a la verificación
    console.error('❌ ¡ERROR! Falta uno o más elementos esenciales en el HTML.');
    return;
  }
  console.log('✅ Elementos HTML encontrados correctamente.');

  // --- Lógica de Eventos ---
  
  sceneEl.addEventListener('targetFound', event => {
    // --- (Esta parte de tu código no cambia) ---
    const targetIndex = event.target.components['mindar-image-target'].data.targetIndex;
    if (typeof targetIndex === 'number') {
      const nombreDelPais = nombresPaises[targetIndex];
      console.log(`👍 Target válido encontrado. Índice: ${targetIndex}, País: ${nombreDelPais}`);
      countryNameEl.textContent = nombreDelPais;
      countryUi.classList.add('show');
      // ---------------------------------------------

      // --- CÓDIGO NUEVO: Lógica para mostrar la tarjeta ---
      const jugadores = jugadoresPorPais[nombreDelPais];
      if (jugadores && jugadores.length > 0) {
        const primerJugador = jugadores[0]; // Mostramos el primer jugador de la lista

        playerNameEl.textContent = primerJugador.nombre;
        playerImageEl.setAttribute('src', primerJugador.imagen);
        
        // Generar y mostrar las estrellas
        let estrellasHTML = '';
        for (let i = 0; i < 5; i++) {
          estrellasHTML += i < primerJugador.calificacion ? '★' : '☆';
        }
        playerRatingEl.innerHTML = estrellasHTML;

        playerCard.classList.add('show');
      }
      // ----------------------------------------------------
    }
  });

  sceneEl.addEventListener('targetLost', event => {
    console.log('💨 Target perdido. Ocultando UI.');
    countryUi.classList.remove('show');
    
    // --- CÓDIGO NUEVO: Ocultar también la tarjeta ---
    playerCard.classList.remove('show');
    // ---------------------------------------------
  });


  // ---------------------------------------------
  // MODAL DE FILTROS
  // ---------------------------------------------

  // 1. Seleccionar los nuevos elementos
  const filtersBtn = document.querySelector('#filters-btn');
  const filtersModal = document.querySelector('#filters-modal');
  const closeModalBtn = document.querySelector('#close-modal-btn');
  const filterOptions = document.querySelectorAll('.filter-option');
  const aScene = document.querySelector('a-scene');

  // 2. Abrir el modal
  filtersBtn.addEventListener('click', () => {
    filtersModal.classList.add('modal-visible');
    filtersModal.classList.remove('modal-hidden'); // Opcional, dependiendo del CSS
  });

  // 3. Cerrar el modal
  const closeModal = () => {
    filtersModal.classList.remove('modal-visible');
    filtersModal.classList.add('modal-hidden'); // Opcional
  };

  closeModalBtn.addEventListener('click', closeModal);
  filtersModal.addEventListener('click', (event) => {
    // Cierra el modal solo si se hace clic en el fondo (overlay)
    if (event.target === filtersModal) {
      closeModal();
    }
  });

  // 4. Aplicar un filtro
  filterOptions.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.dataset.filter;
      console.log(`Aplicando filtro: ${filterValue}`);
      
      // Aplicamos el filtro directamente al canvas de A-Frame
      aScene.canvas.style.filter = filterValue;
      
      closeModal(); // Cierra el modal después de seleccionar un filtro
    });
  });
});