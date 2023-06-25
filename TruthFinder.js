
const arr = ['Hi', null, 0, true, 0n, '', [], {}, (100/0), parseInt('Hi'), ()=>{}, undefined, '0']

function isTruthy(value) {
    return value ? true : false;
}

/**
 * @param {any[]} arr 
 */
function truthFinder(arr) {
    for(const el of arr) {
        console.log(`${el} => ${isTruthy(el)}`)
    }
}

truthFinder(arr);