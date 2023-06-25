
/**
 * @function factorialByLooping
 * @param {number} n
 * @returns {number}
 */
function factorialByLooping(n) {
    if(n<=0) return 0;
    if(n===1) return 1;
    let fn_2=0, fn_1=1;
    for(let i=2, t; i<=n; i++) {
        t = fn_2;
        fn_2 = fn_1;
        fn_1 = t+fn_2;
    }
    return fn_1;
}

/**
 * @function factorialByRecursion
 * @param {number} n
 * @returns {number}
 */
function factorialByRecursion(n) {
    if(n<=0) return 0;
    if(n===1) return 1;
    return factorialByRecursion(n-1) + factorialByRecursion(n-2);
}

/**
 * @function factorialByRecursionWithMemoization
 * @param {number} n
 * @returns {number}
 */
let factorialByRecursionWithMemoization = (function() {
    /**
     * @type {Array<number>}
     */
    var memo;

    /**
     * @param {number} n
     * @returns {number}
     */
    function factorial(n) {
        if(n<=0) return 0;
        if(n===1) return 1;
        if(!memo[n-2]) memo[n-2] = factorial(n-1) + factorial(n-2);
        return memo[n-2];
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    return function(n) {
        memo = new Array(n-1);
        return factorial(n);
    }
})();

let factorialByRecursionWithTopDown = (function() {

    /**
     * @type {number}
     */
    let num;
    
    /**
     * @type {number}
     */
    let counter;

    /**
     * @param {number} n2
     * @param {number} n1
     * @returns {number}
     */
    function factorial(n2, n1) {
        if(counter++<num) {
            return factorial(n1, n1+n2)
        }
        return n2+n1;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    return function(n) {
        if(n<=0) return 0;
        if(n===1) return 1;
        num=n;
        counter = 2;
        return factorial(0, 1);
    }
})();

/*****************Sample Case*****************/
(async function run() {
    let num = 10;
    console.log('\n************************* Factorial **************************');
    console.log(`Inputs: \n\tnum: ${num}`);
    console.log(`Factorial By Recursion With Top Down: \t${factorialByRecursionWithTopDown(num)}`);
    console.log('*******************************************************************\n');
})();
