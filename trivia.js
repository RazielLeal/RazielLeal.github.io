document.addEventListener('DOMContentLoaded', () => {

    const preguntas = [
        {
            pregunta: "¿Cuál fue el mejor resultado de Estados Unidos en una Copa del Mundo masculina?",
            respuestas: ["a) Semifinales (1930)", "b) Cuartos de final (2002)", "c) Octavos de final (1994)"],
            correcta: 0 // a) Semifinales (1930)
        },
        {
            pregunta: "Contando la edición de 2026, ¿cuántas veces habrá sido México anfitrión de la Copa del Mundo?",
            respuestas: ["a) Una vez", "b) Dos veces", "c) Tres veces"],
            correcta: 2 // c) Tres veces
        },
        {
            pregunta: "¿En qué año anotó Canadá su primer gol en una Copa del Mundo masculina?",
            respuestas: ["a) 1986", "b) Nunca ha anotado", "c) 2022"],
            correcta: 2 // c) 2022 (Alphonso Davies)
        },
        {
            pregunta: "¿Qué hazaña logró Nueva Zelanda en la Copa del Mundo de 2010?",
            respuestas: ["a) Ganar su primer partido", "b) Ser el único equipo invicto", "c) Llegar a octavos de final"],
            correcta: 1 // b) Ser el único equipo invicto (empató sus 3 partidos)
        },
        {
            pregunta: "¿Contra qué equipo logró Irán su primera victoria en una Copa del Mundo (1998)?",
            respuestas: ["a) Estados Unidos", "b) Alemania", "c) Yugoslavia"],
            correcta: 0 // a) Estados Unidos
        },
        {
            pregunta: "¿Quién fue el capitán de la selección Argentina que ganó la Copa del Mundo en 1986?",
            respuestas: ["a) Lionel Messi", "b) Daniel Passarella", "c) Diego Maradona"],
            correcta: 2 // c) Diego Maradona
        },
        {
            pregunta: "¿Cuál es el apodo de la selección nacional de fútbol de Uzbekistán?",
            respuestas: ["a) Las Águilas del Desierto", "b) Los Lobos Blancos", "c) Los Leones de Samarcanda"],
            correcta: 1 // b) Los Lobos Blancos
        },
        {
            pregunta: "¿Cuál es el mejor resultado de Corea del Sur en una Copa del Mundo?",
            respuestas: ["a) Octavos de final", "b) Cuartos de final", "c) Semifinales"],
            correcta: 2 // c) Semifinales (2002)
        },
        {
            pregunta: "¿Cuántas Copas Africanas de Naciones ha ganado Egipto, siendo el máximo ganador del torneo?",
            respuestas: ["a) 5", "b) 7", "c) 3"],
            correcta: 1 // b) 7
        },
        {
            pregunta: "El apodo de la selección de Australia es...",
            respuestas: ["a) The Kangaroos", "b) The Socceroos", "c) The Wallabies"],
            correcta: 1 // b) The Socceroos
        },
        {
            pregunta: "¿Qué selección ha ganado más Copas del Mundo en la historia?",
            respuestas: ["a) Alemania", "b) Italia", "c) Brasil"],
            correcta: 2 // c) Brasil
        },
        {
            pregunta: "¿En qué edición del Mundial Ecuador logró su mejor participación, llegando a octavos de final?",
            respuestas: ["a) 2002", "b) 2006", "c) 2014"],
            correcta: 1 // b) 2006
        },
        {
            pregunta: "¿Qué país ganó la primera Copa del Mundo en 1930, celebrada en su propio territorio?",
            respuestas: ["a) Brasil", "b) Argentina", "c) Uruguay"],
            correcta: 2 // c) Uruguay
        },
        {
            pregunta: "El apodo de la selección de Cabo Verde es...",
            respuestas: ["a) Los Tiburones Azules", "b) Las Estrellas Negras", "c) Los Leones del Atlántico"],
            correcta: 0 // a) Los Tiburones Azules
        },
        {
            pregunta: "¿Quién es el máximo goleador histórico de la selección de Paraguay?",
            respuestas: ["a) Roque Santa Cruz", "b) José Saturnino Cardozo", "c) Nelson Haedo Valdez"],
            correcta: 0 // a) Roque Santa Cruz
        },
        {
            pregunta: "El apodo de la selección de Túnez es...",
            respuestas: ["a) Los Leones del Atlas", "b) Las Águilas de Cartago", "c) Los Faraones"],
            correcta: 1 // b) Las Águilas de Cartago
        },
        {
            pregunta: "¿En qué año ganó Argelia su única Copa Africana de Naciones hasta la fecha?",
            respuestas: ["a) 1990", "b) 2019", "c) Ambas son correctas"],
            correcta: 2 // c) Ambas son correctas (ganaron en 1990 y 2019)
        },
        {
            pregunta: "¿Cuál fue el resultado más sorprendente de Arabia Saudita en el Mundial 2022?",
            respuestas: ["a) Empatar con Polonia", "b) Ganarle a México", "c) Ganarle a Argentina"],
            correcta: 2 // c) Ganarle a Argentina
        }
    ];

    // --- FUNCIÓN PARA MEZCLAR UN ARRAY (ALGORITMO FISHER-YATES) ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
        }
        return array;
    }

    // --- SELECCIONAR 5 PREGUNTAS ALEATORIAS ---
    // 1. Mezclar todas las preguntas
    const preguntasMezcladas = shuffleArray(preguntas);
    // 2. Tomar solo las primeras 5
    const preguntasParaJugar = preguntasMezcladas.slice(0, 5);


    // --- VARIABLES DEL JUEGO ---
    let preguntaActualIndex = 0;
    let puntuacion = 0;
    
    // --- ELEMENTOS DEL DOM ---
    const preguntaTexto = document.querySelector('.pregunta');
    const respuestasContainer = document.querySelector('.respuestas-container');
    const puntuacionDisplay = document.getElementById('contador-puntuacion');
    const progresoDisplay = document.querySelector('.contador-progreso');
    const triviaContainer = document.querySelector('.trivia-container'); // Asegúrate de que este elemento exista en tu HTML
    const botonSaltar = document.querySelector('.boton-saltar'); // Asegúrate de que este elemento exista en tu HTML
    
    // --- FUNCIONES DEL JUEGO ---

    function cargarPregunta() {
        // Si ya no hay más preguntas, muestra el resultado final
        if (preguntaActualIndex >= preguntasParaJugar.length) {
            mostrarResultadoFinal();
            return;
        }

        const preguntaActual = preguntasParaJugar[preguntaActualIndex];

        // Actualizar el texto de la pregunta y el progreso
        preguntaTexto.textContent = preguntaActual.pregunta;
        progresoDisplay.textContent = `${preguntaActualIndex + 1}/${preguntasParaJugar.length}`;
        
        // Limpiar respuestas anteriores
        respuestasContainer.innerHTML = '';

        // Crear y añadir los botones de respuesta
        preguntaActual.respuestas.forEach((respuesta, index) => {
            const botonRespuesta = document.createElement('a');
            botonRespuesta.href = "#";
            botonRespuesta.classList.add('respuesta-boton');
            botonRespuesta.textContent = respuesta;
            botonRespuesta.addEventListener('click', () => seleccionarRespuesta(index));
            respuestasContainer.appendChild(botonRespuesta);
        });
    }

    function seleccionarRespuesta(indexSeleccionado) {
        const preguntaActual = preguntasParaJugar[preguntaActualIndex];

        // Comprobar si la respuesta es correcta
        if (indexSeleccionado === preguntaActual.correcta) {
            puntuacion++;
            puntuacionDisplay.textContent = puntuacion;
        }

        // Pasar a la siguiente pregunta
        preguntaActualIndex++;
        cargarPregunta();
    }

    function mostrarResultadoFinal() {
        triviaContainer.innerHTML = `<p class="pregunta" style="text-align: center;">¡Trivia completada!<br>Tu puntuación final es: ${puntuacion} de ${preguntasParaJugar.length}</p>`;
        botonSaltar.style.display = 'none'; // Ocultar el botón de saltar al final
    }

    // --- EVENTO PARA EL BOTÓN SALTAR ---
    if (botonSaltar) { // Asegurarse de que el botón existe
        botonSaltar.addEventListener('click', () => {
            preguntaActualIndex++; // Avanza a la siguiente pregunta
            cargarPregunta(); // Carga la siguiente pregunta
        });
    }
    // --- INICIAR EL JUEGO ---
    cargarPregunta();
});
