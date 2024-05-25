
/**
 * 
 * @param {string} infStr 
 * @param {string} toFind 
 */
function canBeFormed(infStr, toFind) {
    let i=0, j=0, isl = infStr.length, tfl = toFind.length;
    while(j<tfl) {
        if(infStr[i]!=toFind[j]) return 'NO';
        i++;
        j++;
        if(i===isl) i=0;
    }
    return 'YES';
}

console.log(canBeFormed('abcd', 'abce'));