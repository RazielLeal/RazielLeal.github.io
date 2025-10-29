document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ARQUITECTURA DE DATOS ---
    // Array de objetos que contiene todas las preguntas, opciones y respuestas correctas.
    const questions = [
        {
            question: "¿Quién es el máximo goleador en la historia de los Mundiales?",
            choices: ["Miroslav Klose", "Ronaldo Nazário", "Gerd Müller", "Just Fontaine"],
            correctAnswer: "Miroslav Klose"
        },
        {
            question: "¿Quién es el máximo goleador en la historia de los Mundiales?",
            choices: ["Miroslav Klose", "Ronaldo Nazário", "Gerd Müller", "Just Fontaine"],
            correctAnswer: "Miroslav Klose"
        },
    ];

    // --- 2. VARIABLES DE ESTADO Y REFERENCIAS AL DOM ---
    let currentQuestionIndex = 0;
    let score = 0;

    // Almacenamos las referencias a los elementos del DOM para un acceso más eficiente.
    const preguntaTexto = document.getElementById('pregunta-texto');
    const respuestasContainer = document.getElementById('respuestas-container');
    const contadorPuntuacion = document.getElementById('contador-puntuacion');
    const contadorProgreso = document.getElementById('contador-progreso');
    const botonCerrar = document.querySelector('.boton-cerrar');
    const modal = document.getElementById('modal-cerrar');
    const botonNo = document.querySelector('.modal-boton-no');

    // --- 3. LÓGICA DEL JUEGO ---

    /**
     * Inicia el juego o muestra la siguiente pregunta.
     */
    function startGame() {
        currentQuestionIndex = 0;
        score = 0;
        contadorPuntuacion.textContent = score;
        displayQuestion();
    }

    /**
     * Muestra la pregunta actual y sus opciones de respuesta en la UI.
     */
    function displayQuestion() {
        // Resetea el contenedor de respuestas.
        respuestasContainer.innerHTML = '';

        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            preguntaTexto.textContent = currentQuestion.question;
            contadorProgreso.textContent = `${currentQuestionIndex + 1}/${questions.length}`;

            // Crea y añade los botones de respuesta.
            currentQuestion.choices.forEach(choice => {
                const button = document.createElement('a');
                button.href = "#";
                button.textContent = choice;
                button.classList.add('respuesta-boton');
                respuestasContainer.appendChild(button);
            });
        } else {
            // Fin del juego.
            endGame();
        }
    }

    /**
     * Maneja la selección de una respuesta por parte del usuario.
     * @param {Event} e - El objeto del evento de clic.
     */
    function selectAnswer(e) {
        // Usamos delegación de eventos: solo procesamos si se hizo clic en un botón.
        if (!e.target.classList.contains('respuesta-boton')) {
            return;
        }
        
        const selectedButton = e.target;
        const selectedAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = currentQuestion.correctAnswer;

        // Deshabilita todos los botones para evitar múltiples respuestas.
        const allButtons = respuestasContainer.querySelectorAll('.respuesta-boton');
        allButtons.forEach(button => button.classList.add('disabled'));

        // Comprueba si la respuesta es correcta y aplica los estilos correspondientes.
        if (selectedAnswer === correctAnswer) {
            score++;
            contadorPuntuacion.textContent = score;
            selectedButton.classList.add('correct');
        } else {
            selectedButton.classList.add('incorrect');
            // Muestra también cuál era la respuesta correcta.
            allButtons.forEach(button => {
                if (button.textContent === correctAnswer) {
                    button.classList.add('correct');
                }
            });
        }

        // Espera un momento antes de pasar a la siguiente pregunta.
        setTimeout(showNextQuestion, 1500);
    }

    /**
     * Avanza al siguiente estado del juego (siguiente pregunta o fin).
     */
    function showNextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    /**
     * Muestra el resultado final de la trivia.
     */
    function endGame() {
        preguntaTexto.textContent = `¡Trivia completada! Tu puntuación final es ${score} de ${questions.length}.`;
        respuestasContainer.innerHTML = '<a href="#" id="restart-button" class="respuesta-boton">Volver a Jugar</a>';
        contadorProgreso.textContent = `Fin`;
        
        // Añade el event listener para el botón de reinicio.
        document.getElementById('restart-button').addEventListener('click', startGame);
    }

    // --- 4. MANEJO DEL MODAL ---
    function mostrarModal() {
        modal.classList.add('show');
    }

    function ocultarModal() {
        modal.classList.remove('show');
    }

    // --- 5. INICIALIZACIÓN Y EVENT LISTENERS ---
    // Añade el listener principal al contenedor de respuestas usando delegación de eventos.
    respuestasContainer.addEventListener('click', selectAnswer);
    botonCerrar.addEventListener('click', mostrarModal);
    botonNo.addEventListener('click', ocultarModal);

    // Inicia el juego al cargar la página.
    startGame();
});