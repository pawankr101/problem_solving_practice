
/**
 * 
 * @param {number[]} arr 
 * @param {number} K - Range
 * @returns 
 */
function matchRating(arr, K) {
    /** @type {number[]} */
    let res = new Array(arr.length);
    for (let i=0, j=0, found=false, l=arr.length; i < l; i++) {
        for (j=0; j < i; j++) {
            if(res[j] === -1) {
                if((arr[j] >= (arr[i] - K)) && (arr[j] <= (arr[i] + K))) {
                    res[i] = j+1;
                    res[j] = i+1;
                    found = true;
                    break;
                }
            }
        }
        if(!found) {
            res[i] = -1;
        } else found = false;
    }
    return res;
}

console.log([6, 9, 4, 1, 3]);
console.log(matchRating([6, 9, 4, 1, 3], 2));