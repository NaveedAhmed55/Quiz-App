const quizData = [
    {
        question: "What is Capital of Pakistan?",
        a: "Islamabad",
        b: "Karachi",
        c: "Lahore",
        d: "Larkana",
        correct: "a",
    },
    {
        question: "Who is current Prime Minister Of Pakistan?",
        a: "Asif Ali Zardari",
        b: "Imran Khan",
        c: "Hamza Shahbaz Shareef",
        d: "Shahbaz Shareef",
        correct: "d",
    },
    {
        question: "What is National Languange of Pakistan?",
        a: "Sindhi",
        b: "Urdu",
        c: "Punjabi",
        d: "Seraki",
        correct: "b",
    },
    {
        question: "When Pakistan got independence in ?",
        a: "1967",
        b: "1922",
        c: "1947",
        d: "Never got indepedence",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } 
        else 
        {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})