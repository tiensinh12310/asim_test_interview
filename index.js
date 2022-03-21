var _ = require('lodash')


// test 1
const test_1 = (A, B) => {
    const C = _.difference(A, B) //number in A, not in B
    const D = _.difference(B, A)  // number not in A, in B
    const E = _.intersection(A, B)  // number in A,in B

    return {C, D, E}
}
// A, B input
const A = [1,2,3,4]
const B = [2,3,4,5]
console.log(test_1(A,B))

// test 2
const test_2 = (array) => {
    const sorted = array.sort((a, b) => a - b)
    const length = array.length
    const number_1 = sorted[length -1]
    const number_2 = sorted[length -2]
    const number_3 = sorted[length -3]
    const F = number_3 + 2 * number_2 + 3 * number_1

    return {[`${number_3+ '_' + number_2 + '_' + number_1}`] : F}
}

const array = [-1,-2,-3,-4,-20]
console.log(test_2(array))

// test 3
function circleNum(number) {
    let count_circleNum = 0;
    if(number < 10) {
        count_circleNum = number
    }

    if(number >= 10) {
        count_circleNum = 9;
        const split = number.toString().split('')
        const length = split.length
        const begin = split[0]
        const end = split[length - 1]
        if(+begin <= +end) count_circleNum += 1

        const step = Math.floor(number/10) - 1
        if(step >= 1) {
            count_circleNum += step
        }
    }
    return count_circleNum
}

function circleNum_L_R(L, R) {
    const circleNum_L = circleNum(L)
    const circleNum_R = circleNum(R)

    const split_L = L.toString().split('')
    const length_L = split_L.length
    const begin_L = split_L[0]
    const end_L = split_L[length_L - 1]

    let result = circleNum_R - circleNum_L
    if(begin_L === end_L ) result += 1

    return { [`${circleNum_L + '_' + circleNum_R}`] : result }
}

const L = 9
const R = 19
console.log(circleNum_L_R(L, R))