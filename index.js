console.log('connected!')

const inpAngle1 = document.querySelector('#inpAngle1')
const inpAngle2 = document.querySelector('#inpAngle2')
const inpAngle3 = document.querySelector('#inpAngle3')
const checkBtn = document.querySelector('.check-btn')
const outputMsg = document.querySelector('.outputMsg')

checkBtn.addEventListener('click', validTriangle)

function validTriangle() {
    let sum = Number(inpAngle1.value) + Number(inpAngle2.value) + Number(inpAngle3.value)
    let totalAngle = Number(sum)
    console.log(totalAngle)
    if (totalAngle === 180){
        outputMsg.innerText = "These angles will make a Triangle"
    }
    else {
        outputMsg.innerText = "Opps! Sorry"
    }
}