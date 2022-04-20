//Lösung 1-------------------

const output = document.getElementById('output')
let count = 0;
output.innerHTML = count


const counterPlusOne = () => {
    count++
    output.innerHTML = count

}

const counterMinusOne = () => {
    count--
    output.innerHTML = count
}
const counterPlusTen = () => {
    count += 10
    output.innerHTML = count
}
const counterMinusTen = () => {
    count -= 10
    output.innerHTML = count
}

const counterPlusHund = () => {
    count += 100
    output.innerHTML = count
}
const counterMinusHund = () => {
    count -= 100
    output.innerHTML = count
}

const counterMultpTwo = () => {
    count *= 2
    output.innerHTML = count
}
const counterReset = () => {
    count = 0
    output.innerHTML = count
}

//Lösung 2----------------------------
// const output = document.getElementById('output')
// let count = 0;
// output.innerHTML = count

// const plusOne = document.getElementById('plusOne')
// const minusOne = document.getElementById('minusOne')
// const plusTen = document.getElementById('plusTen')
// const minusTen = document.getElementById('minusTen')
// const plusHundred = document.getElementById('plusHundred')
// const minusHundred = document.getElementById('minusHundred')
// const multiplyTwo = document.getElementById('multiplyTwo')
// const reset = document.getElementById('reset')

// plusOne.addEventListener('click', () => {
//     count++
//     output.innerHTML = count
// })
// minusOne.addEventListener('click', () => {
//     count--
//     output.innerHTML = count
// })

// plusTen.addEventListener('click', () => {
//     count += 10
//     output.innerHTML = count
// })
// minusTen.addEventListener('click', () => {
//     count -= 10
//     output.innerHTML = count
// })
// plusHundred.addEventListener('click', () => {
//     count += 100
//     output.innerHTML = count
// })
// minusHundred.addEventListener('click', () => {
//     count -= 100
//     output.innerHTML = count
// })

// multiplyTwo.addEventListener('click', () => {
//     count *= 2
//     output.innerHTML = count
// })
// reset.addEventListener('click', () => {
//     count = 0
//     output.innerHTML = count
// })

//Lösung 3-----------------------

// const output = document.getElementById('output')
// let count = 0;
// output.innerHTML = count

// const inputCounter = document.querySelectorAll('.counter')
// console.log(inputCounter);
// for (let i = 0; i < inputCounter.length; i++) {
//     const input = inputCounter[i];
//     // console.log(input);

//     input.addEventListener('click', () => {
//         // console.log(input);

//         if (input.value == 'Reset') {
//             count = 0
//             output.innerHTML = count
//             console.log(output);
//         } else {
//             let newInput = input.value
//             let numInput = parseInt(newInput)
//                 // console.log(numInput);
//             count = count + numInput
//             output.innerHTML = count
//                 // console.log(output);
//         }

//         if (input.value == '*2') {

//             count = count * 2
//             output.innerHTML = count
//             console.log(output);
//         }

//     })

// }