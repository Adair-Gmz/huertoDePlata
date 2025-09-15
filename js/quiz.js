let currentQuestion = 1;
let answers = {};
let questionHistory = [1];
const totalQuestions = 8;

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion(1);
    updateProgress();
    updateNavigationButtons();
}

function updateProgress() {
    const progress = (currentQuestion / totalQuestions) * 100;
    const progressBar = document.querySelector('.progress-bar');
    let progressFill = document.getElementById('progress');
    if (!progressFill) {
        progressFill = document.createElement('div');
        progressFill.id = 'progress';
        progressFill.className = 'progress-fill';
        progressBar.appendChild(progressFill);
    }
    progressFill.style.width = progress + '%';
}

function handleAnswer(questionNum, answer) {
    answers[questionNum] = answer;

    // Marcar la opción como seleccionada visualmente
    const questionCard = document.getElementById(`question-${questionNum}`);
    const optionButtons = questionCard.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.classList.remove('selected');
        if ((btn.textContent === 'Sí' && answer === 'si') ||
            (btn.textContent === 'No' && answer === 'no') ||
            (btn.textContent === 'Hombre' && answer === 'hombre') ||
            (btn.textContent === 'Mujer' && answer === 'mujer') ||
            (btn.textContent === 'Detener caída' && answer === 'caida') ||
            (btn.textContent === 'Estimular crecimiento' && answer === 'crecimiento') ||
            (btn.textContent === 'Ambos' && answer === 'ambos') ||
            (btn.textContent === 'Ninguno' && answer === 'ninguno')) {
            btn.classList.add('selected');
        }
    });

    // Avanzar automáticamente a la siguiente pregunta o mostrar resultado
    setTimeout(() => {
        if (currentQuestion < totalQuestions) {
            goToNextQuestion();
        } else {
            showResult();
        }
    }, 400);

    updateNavigationButtons();
}

function goToNextQuestion() {
    let nextQuestion = currentQuestion + 1;

    // Lógica especial para saltos de preguntas basada en respuestas
    if (currentQuestion === 1 && answers[1] === 'si') {
        nextQuestion = 6;
    } else if (currentQuestion === 2 && answers[2] === 'si') {
        nextQuestion = 6;
    }

    if (nextQuestion <= totalQuestions) {
        if (!questionHistory.includes(nextQuestion)) {
            questionHistory.push(nextQuestion);
        }
        showQuestion(nextQuestion);
    } else {
        showResult();
    }
}

function goToPreviousQuestion() {
    const currentIndex = questionHistory.indexOf(currentQuestion);
    if (currentIndex > 0) {
        const previousQuestion = questionHistory[currentIndex - 1];
        showQuestion(previousQuestion);
    }
}

function showQuestion(questionNum) {
    // Ocultar todas las preguntas
    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById(`question-${i}`).classList.remove('active');
    }
    currentQuestion = questionNum;
    updateProgress();

    setTimeout(() => {
        document.getElementById(`question-${questionNum}`).classList.add('active');
        updateNavigationButtons();
        restoreSelectedAnswer(questionNum);
    }, 200);
}

function restoreSelectedAnswer(questionNum) {
    if (answers[questionNum]) {
        const questionCard = document.getElementById(`question-${questionNum}`);
        const optionButtons = questionCard.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.classList.remove('selected');
            const answer = answers[questionNum];
            if ((btn.textContent === 'Sí' && answer === 'si') ||
                (btn.textContent === 'No' && answer === 'no') ||
                (btn.textContent === 'Hombre' && answer === 'hombre') ||
                (btn.textContent === 'Mujer' && answer === 'mujer') ||
                (btn.textContent === 'Detener caída' && answer === 'caida') ||
                (btn.textContent === 'Estimular crecimiento' && answer === 'crecimiento') ||
                (btn.textContent === 'Ambos' && answer === 'ambos') ||
                (btn.textContent === 'Ninguno' && answer === 'ninguno')) {
                btn.classList.add('selected');
            }
        });
    }
}

function updateNavigationButtons() {
    const currentIndex = questionHistory.indexOf(currentQuestion);

    // Actualizar botón "Anterior"
    const prevBtn = document.getElementById(`prev-btn-${currentQuestion}`);
    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
    }

    // Actualizar botón "Siguiente"
    const nextBtn = document.getElementById(`next-btn-${currentQuestion}`);
    if (nextBtn) {
        nextBtn.disabled = !answers[currentQuestion];
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';

    const recommendation = calculateRecommendation();
    document.getElementById('result-title').textContent = recommendation.title;
    document.getElementById('result-description').textContent = recommendation.description;
    document.getElementById('result').classList.add('show');
}

function calculateRecommendation() {
    // Agua clorada/salada
    if (answers[1] === 'si') {
        if (answers[6] === 'caida' || answers[6] === 'crecimiento' || answers[6] === 'ambos') {
            if (answers[7] === 'si') {
                return {
                    title: "Shampoo Reforzado o Melis",
                    description: "Perfecto para agua clorada y para fortalecer tu cabello bajo estrés o medicamentos. Ayudará con el crecimiento y la caída mientras protege de los químicos del agua."
                };
            }
            return {
                title: "Shampoo Clásico, Reforzado o Melis",
                description: "Ideal para agua clorada y problemas de caída o crecimiento. Cualquiera de estas opciones funcionará perfectamente para tus necesidades."
            };
        }
        return {
            title: "Cualquier Shampoo de El Huerto de Plata",
            description: "Todos nuestros shampoos están formulados para funcionar excelentemente con agua clorada o salada. Elige el que más te guste!"
        };
    }

    // Cabello rizado
    if (answers[2] === 'si') {
        if (answers[6] === 'caida' || answers[6] === 'crecimiento' || answers[6] === 'ambos') {
            return {
                title: "Shampoo Clásico, Reforzado o Melis",
                description: "Para cabello rizado con problemas de caída o crecimiento. Estos shampoos nutrirán tus rizos mientras abordan tus preocupaciones específicas."
            };
        }
        return {
            title: "Shampoo Hidratante o de Hidratación Media",
            description: "Perfecto para cabello rizado. Mantendrá tus rizos hidratados, definidos y saludables, dándoles la nutrición que necesitan."
        };
    }

    // Cuero cabelludo graso
    if (answers[4] === 'si') {
        if (answers[3] === 'hombre') {
            return {
                title: "Shampoo Control de Grasa",
                description: "Especialmente formulado para hombres con cuero cabelludo graso. Controlará la producción de sebo manteniendo tu cabello limpio y fresco."
            };
        } else {
            if (answers[5] === 'si') { // cabello largo
                return {
                    title: "Shampoo de Hidratación Media",
                    description: "Ideal para mujeres con cuero cabelludo graso y cabello largo. Equilibra la grasa del cuero cabelludo mientras hidrata las puntas."
                };
            }
            return {
                title: "Shampoo de Hidratación Media",
                description: "Perfecto para controlar la grasa del cuero cabelludo femenino sin resecar el cabello."
            };
        }
    }

    // Cabello largo con cuero cabelludo normal
    if (answers[5] === 'si' && answers[4] === 'no') {
        return {
            title: "Shampoo Hidratante",
            description: "Ideal para cabello largo con cuero cabelludo normal. Proporcionará la hidratación extra que tu cabello largo necesita para mantenerse saludable."
        };
    }

    // Estrés o medicamentos
    if (answers[7] === 'si') {
        return {
            title: "Shampoo Reforzado o Melis",
            description: "Especialmente formulado para cabello debilitado por estrés o medicamentos. Fortalecerá tu cabello desde la raíz y le dará la resistencia que necesita."
        };
    }

    // Tratamiento químico
    if (answers[8] === 'si') {
        return {
            title: "Shampoo Hidratante o Reparación Extrema",
            description: "Tu cabello necesita reparación y nutrición intensiva después de tratamientos químicos. Estos shampoos restaurarán su salud y vitalidad."
        };
    }

    // Por defecto
    return {
        title: "Shampoo Hidratante",
        description: "Una excelente opción para el cuidado general de tu cabello. Mantendrá tu cabello limpio, suave e hidratado día a día."
    };
}

function restartQuiz() {
    currentQuestion = 1;
    answers = {};
    questionHistory = [1];

    document.getElementById('result').classList.remove('show');

    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById(`question-${i}`).classList.remove('active');
        const questionCard = document.getElementById(`question-${i}`);
        const optionButtons = questionCard.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => btn.classList.remove('selected'));
        const nextBtn = document.getElementById(`next-btn-${i}`);
        if (nextBtn) {
            nextBtn.disabled = true;
        }
    }

    setTimeout(() => {
        document.getElementById('start-screen').style.display = 'block';
        document.getElementById('quiz-container').style.display = 'none';
    }, 500);
}