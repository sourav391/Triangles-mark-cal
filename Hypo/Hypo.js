console.log('connected!')

const sideA = document.querySelector('#side-a')
const sideB = document.querySelector('#side-b')
const calHypo = document.querySelector('.hypoAns')
const outputMsg = document.querySelector('.outputMsg')

calHypo.addEventListener('click', calculateHypotenuse)

function calculateHypotenuse() {
    let sqSideA = sideA.value * sideA.value
    let sqSideB = sideB.value * sideB.value
    let hypo = Math.sqrt(sqSideA + sqSideB)
    console.log(hypo)
    outputMsg.innerText = `Answer is ${hypo}`
}