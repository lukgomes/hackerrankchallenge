let arr = [-4, 1, -7, 0, 2, 7]

let size = arr.length
let positive = 0
let negative = 0
let zero = 0

for (let i = 0; i < size; i++) {
    if (arr[i] > 0) {
        positive++
    } else if (arr[i] < 0) {
        negative++
    }else {
        zero++
    }
}

positive = (positive / size).toFixed(6)
negative = (negative / size).toFixed(6)
zero = (zero / size).toFixed(6)

console.log(`${positive}\n${negative}\n${zero}`)