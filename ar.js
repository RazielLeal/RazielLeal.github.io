    //   document.addEventListener('DOMContentLoaded', () => {
    //     console.log('✅ Script iniciado.');


    //     const nombresPaises = [
    //     "1","2","3","4","5","6",
    //     "Canada","8","9","10","11","Mexico","13",];
    //     const sceneEl = document.querySelector('a-scene');
    //     const countryUi = document.querySelector('#nombre-pais-ui');
    //     const countryNameEl = document.querySelector('#nombre-pais'); // Seleccionamos el <p>

    //     // --- Verificar que todos los elementos existen ---
    //     if (!sceneEl || !countryUi || !countryNameEl) {
    //       console.error('❌ ¡ERROR! Falta uno o más elementos esenciales (a-scene, #nombre-pais-ui, o #nombre-pais). Revisa tu HTML.');
    //       return; // Detiene el script si algo falta
    //     }
    //     console.log('✅ Elementos HTML encontrados correctamente.');
    
    //     sceneEl.addEventListener('targetFound', event => {      
    //       console.log('🎯 ¡Target detectado! Añadiendo la clase .show');
    //       countryUi.classList.add('show')
          
    //       if (event.detail && event.detail.target) {
    //           console.log("👍 Datos del target válidos. Mostrando UI.");

    //           // Obtenemos el índice y el nombre del país
    //           const targetIndex = event.detail.target.index;
    //           const nombreDelPais = nombresPaises[targetIndex];

    //           // AHORA sí, actualizamos el texto y hacemos visible la UI
    //           countryNameEl.textContent = nombreDelPais;
    //           countryUi.classList.add('show');
    //         } else {
    //           console.log("🤔 Evento 'targetFound' disparado sin datos del target. Ignorando.");
    //           console.log(event.target);
    //         }
    //       });

    //     sceneEl.addEventListener('targetLost', event => {
    //       console.log('💨 Target perdido. Quitanto la clase .show');
    //       countryUi.classList.remove('show');
    //     });






    //     // 1. VERIFICAR LA SELECCIÓN DEL ELEMENTO
    //     if (countryUi) {
    //       console.log('✅ Elemento de la UI encontrado:', countryUi);
    //     } else {
    //       console.error('❌ ¡ERROR! No se encontró el elemento con id="nombre-pais-ui". Revisa tu HTML.');
    //       return; 
    //     }

    //     if (!sceneEl) {
    //       console.error('❌ ¡ERROR! No se encontró la escena <a-scene>.');
    //       return;
    //     }
    //   });


    document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Script `ar.js` iniciado.');

  const nombresPaises = [
    "waos",         // targetIndex: 0
    "Estados Unidos", // targetIndex: 1
    "otro",         // targetIndex: 2
    "Brasil",         // targetIndex: 3
    "Argentina",      // targetIndex: 4
    "España",         // targetIndex: 5
    "Canada",        // targetIndex: 6
    "Alemania",       // targetIndex: 7
    "Italia",         // targetIndex: 8
    "Japón",          // targetIndex: 9
    "China",          // targetIndex: 10
    "Mexico",      // targetIndex: 11
    "Sudáfrica"       // targetIndex: 12
  ];

  // --- Seleccionar elementos del DOM ---
  const sceneEl = document.querySelector('a-scene');
  const countryUi = document.querySelector('#nombre-pais-ui');
  const countryNameEl = document.querySelector('#nombre-pais');

  // --- Verificar que todos los elementos existen ---
  if (!sceneEl || !countryUi || !countryNameEl) {
    console.error('❌ ¡ERROR! Falta uno o más elementos esenciales (a-scene, #nombre-pais-ui, o #nombre-pais).');
    return;
  }
  console.log('✅ Elementos HTML encontrados correctamente.');

  // --- Lógica de Eventos ---
  
  sceneEl.addEventListener('targetFound', event => {
    // CAMBIO CLAVE: Obtenemos el targetIndex directamente del componente del target.
    const targetIndex = event.target.components['mindar-image-target'].data.targetIndex;

    // Verificamos si el índice es un número válido.
    if (typeof targetIndex === 'number') {
      const nombreDelPais = nombresPaises[targetIndex];

      console.log(`👍 Target válido encontrado. Índice: ${targetIndex}, País: ${nombreDelPais}`);

      countryNameEl.textContent = nombreDelPais;
      countryUi.classList.add('show');
    }
  });

  sceneEl.addEventListener('targetLost', event => {
    console.log('💨 Target perdido. Ocultando UI.');
    countryUi.classList.remove('show');
  });
});