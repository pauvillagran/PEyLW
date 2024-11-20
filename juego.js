//Juego de preguntas en Alemán :)

//Array con las preguntas y respuestas correctas en alemán
const questions = [
    {
        question: "¿Cómo se dice 'Hola' en alemán?",
        options: ["Hallo", "Tschüss", "Danke", "Bitte"],
        correctAnswer: "Hallo"
    },
    {
        question: "¿Cómo se dice 'Gracias' en alemán?",
        options: ["Bitte", "Danke", "Hallo", "Tschüss"],
        correctAnswer: "Danke"
    },
    {
        question: "¿Cómo se dice 'Adiós' en alemán?",
        options: ["Tschüss", "Danke", "Bitte", "Hallo"],
        correctAnswer: "Tschüss"
    },
    {
        question: "¿Cómo se dice 'Por favor' en alemán?",
        options: [ "Tschüss", "Hallo", "Danke", "Bitte"],
        correctAnswer: "Bitte"
    }
];

let currentQuestionIndex = 0;

// Función para mostrar la pregunta y las opciones
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    // Mostrar la pregunta
    questionElement.textContent = currentQuestion.question;

    // Limpiar las opciones anteriores
    optionsContainer.innerHTML = "";

    // Mostrar las opciones como botones
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-button");
        button.onclick = function() {
            checkAnswer(option); // Pasar la opción directamente
        };
        optionsContainer.appendChild(button);
    });
}

// Función para verificar la respuesta del usuario
function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultText = document.getElementById("result");

    // Limpiar los espacios y convertir a minúsculas para una comparación más precisa
    const correctAnswer = currentQuestion.correctAnswer.trim().toLowerCase();
    const userAnswerFormatted = userAnswer.trim().toLowerCase();

    // Depuración: Mostrar las respuestas que se están comparando
    console.log("Pregunta: " + currentQuestion.question);
    console.log("Respuesta correcta:", correctAnswer);
    console.log("Respuesta del usuario:", userAnswerFormatted);

    // Comprobar si la respuesta es correcta
    if (userAnswerFormatted === correctAnswer) {
        resultText.textContent = "¡Correcto!";
        resultText.style.color = "green";
    } else {
        // Mostrar la respuesta correcta si el usuario se equivoca
        resultText.textContent = `¡Incorrecto! La respuesta correcta era: ${currentQuestion.correctAnswer}`;
        resultText.style.color = "red";
    }

    // Avanzar a la siguiente pregunta después de 2 segundos
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(); // Mostrar la siguiente pregunta
            resultText.textContent = ""; // Limpiar el mensaje de resultado
        } else {
            resultText.textContent = "¡Has terminado el juego! Ya hablás alemán, ahre";
        }
    }, 2000);
}

// Función para iniciar el juego
function startGame() {
    currentQuestionIndex = 0;
    displayQuestion(); // Mostrar la primera pregunta
}

// Iniciar el juego cuando cargue la página
window.onload = startGame;