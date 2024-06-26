
/*******************************************************************************************************************/

// /**
//  * @param {string[]} str
//  * @return {string[][]}
//  */
// var groupAnagrams = function(str) {
//     /**
//      * @type {string[][]}
//      */
//     let result = [];

//     for(let i=0, l=str.length;i<l;i++) {
//         fillInResults(str[i], result);
//     }
//     for(let i=0, l=result.length;i<l;i++) {
//         result[i].length = result[i].length - 1;
//     }
//     return result;
// };

// /**
//  * @param {string} str
//  * @returns {number}
//  */
// function getHash(str) {
//     let res=1, primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
//     for(let i=0, len=str.length;i<len;i++) {
//         res *= primeNumbers[str.charCodeAt(i) - 97];
//     }
//     return res;
// }

// /**
//  * @param {string} str
//  * @param {string[][]} result 
//  */
// function fillInResults(str, result) {
//     let len=result.length, hash = getHash(str), filled = false;
//     for(let i=0;i<len;i++) {
//         if(result[i][result[i].length-1] === hash) {
//             result[i][result[i].length-1] = str;
//             result[i].push(hash);
//             filled = true;
//             break;
//         }
//     }
//     if(!filled) result.push([str, hash]);
// }

/*******************************************************************************************************************/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    /**
     * @type {{[x:string]: string[]}}
     */
    const result = {};

    for(var i=0, hash, l=strs.length;i<l;i++) {
        hash = getHash(strs[i]);
        if(result[hash]) result[hash].push(strs[i]);
        else result[hash] = [strs[i]];
    }
    return Object.values(result)
};

/**
 * @param {string} str
 * @returns {string}
 */
function getHash(str) {
    let res=1, primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
    for(var i=0, len=str.length;i<len;i++) {
        res *= primeNumbers[str.charCodeAt(i) - 97];
    }
    return '' + res;
}


/*******************************************************************************************************************/

/*****************Sample Case*****************/
(async function run() {
    let strings = ["eat","tea","tan","ate","nat","bat"];
    console.log('\n************************* Group Anagrams **************************');
    console.log(`Inputs: \n\tNumbers: [${strings.join(',\t')}]`);
    console.log(`Group Anagrams: \n\t[${groupAnagrams(strings).map((row)=>`[${row.join(',\t')}]`).join('\n\t')}]`);
    console.log('*******************************************************************\n');
})();