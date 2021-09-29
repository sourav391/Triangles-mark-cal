console.log('connected!')

const base = document.querySelector('#base')
const height = document.querySelector('#height')
const calArea = document.querySelector('.calArea')
const outputMsg = document.querySelector('.outputMsg')

calArea.addEventListener('click', calculateArea)

function calculateArea() {
    let formula = 0.5 * base.value * height.value
    console.log(formula)
    outputMsg.innerText = `The area of triangle is ${formula} units`
}