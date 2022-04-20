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