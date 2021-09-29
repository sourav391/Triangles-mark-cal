console.log('connected')

const quizForm = document.querySelector('.quiz')
const formSubmit = document.querySelector('.formSubmit')
const outputMsg = document.querySelector('.outputMsg')

const correctAnswers = ["90", "Right Angled"]

formSubmit.addEventListener('click', calculateScore)

function calculateScore() {
    let score = 0
    let index = 0
    const formResults = new FormData(quizForm)
    for(let ans of formResults.values()){
        if (ans === correctAnswers[index]){
            score += 1;
        }
        index += 1
    }
    outputMsg.innerText = `Final Score  ${score}`
}