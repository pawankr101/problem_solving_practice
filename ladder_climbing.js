

//let ar=[];
// let total = [];
// function climb(n, w, arr) {
//     // console.log(`---------------------------------before n<=0 => n=${n}, w=${w}, arr=[${arr.toString()}]`);
//     if(n<=0) {
//         total.push([...arr]);
//         // console.log(`---------------------------------inside n<=0 => n=${n}, w=${w}, arr=[${arr.toString()}]`);
//         return;
//     }

//     // console.log(`---------------------------------after n<=0 and before ar=[] => n=${n}, w=${w}, arr=[${arr.toString()}]`);
//     if(!w) arr = [];
//     // console.log(`---------------------------------after ar=[] and before n-1 call => n=${n}, w=${w}, arr=[${arr.toString()}]`);
    
//     arr.push(1)
//     climb(n-1, 1, arr);
//     arr.pop();

//     // console.log(`---------------------------------after n-1 call and before n-2 call => n=${n}, w=${w}, arr=[${arr.toString()}]`);

//     if(n>1) {
//         arr.push(2)
//         climb(n-2, 2, arr);
//         arr.pop();
//     }

//     // console.log(`---------------------------------after n-2 call => n=${n}, w=${w}, arr=[${arr.toString()}]`);
// }

// climb(4, 0, []);

// console.log(total);



/** CompleteExecution
---------------------------------before n<=0 => n=4, w=0, arr=[]
---------------------------------after n<=0 and before ar=[] => n=4, w=0, arr=[]
---------------------------------after ar=[] and before n-1 call => n=4, w=0, arr=[]
---------------------------------before n<=0 => n=3, w=1, arr=[1]
---------------------------------after n<=0 and before ar=[] => n=3, w=1, arr=[1]
---------------------------------after ar=[] and before n-1 call => n=3, w=1, arr=[1]
---------------------------------before n<=0 => n=2, w=1, arr=[1,1]
---------------------------------after n<=0 and before ar=[] => n=2, w=1, arr=[1,1]
---------------------------------after ar=[] and before n-1 call => n=2, w=1, arr=[1,1]
---------------------------------before n<=0 => n=1, w=1, arr=[1,1,1]
---------------------------------after n<=0 and before ar=[] => n=1, w=1, arr=[1,1,1]
---------------------------------after ar=[] and before n-1 call => n=1, w=1, arr=[1,1,1]
---------------------------------before n<=0 => n=0, w=1, arr=[1,1,1,1]
---------------------------------inside n<=0 => n=0, w=1, arr=[1,1,1,1]
---------------------------------after n-1 call and before n-2 call => n=1, w=1, arr=[1,1,1]
---------------------------------after n-2 call => n=1, w=1, arr=[1,1,1]
---------------------------------after n-1 call and before n-2 call => n=2, w=1, arr=[1,1]
---------------------------------before n<=0 => n=0, w=2, arr=[1,1,2]
---------------------------------inside n<=0 => n=0, w=2, arr=[1,1,2]
---------------------------------after n-2 call => n=2, w=1, arr=[1,1]
---------------------------------after n-1 call and before n-2 call => n=3, w=1, arr=[1]
---------------------------------before n<=0 => n=1, w=2, arr=[1,2]
---------------------------------after n<=0 and before ar=[] => n=1, w=2, arr=[1,2]
---------------------------------after ar=[] and before n-1 call => n=1, w=2, arr=[1,2]
---------------------------------before n<=0 => n=0, w=1, arr=[1,2,1]
---------------------------------inside n<=0 => n=0, w=1, arr=[1,2,1]
---------------------------------after n-1 call and before n-2 call => n=1, w=2, arr=[1,2]
---------------------------------after n-2 call => n=1, w=2, arr=[1,2]
---------------------------------after n-2 call => n=3, w=1, arr=[1]
---------------------------------after n-1 call and before n-2 call => n=4, w=0, arr=[]
---------------------------------before n<=0 => n=2, w=2, arr=[2]
---------------------------------after n<=0 and before ar=[] => n=2, w=2, arr=[2]
---------------------------------after ar=[] and before n-1 call => n=2, w=2, arr=[2]
---------------------------------before n<=0 => n=1, w=1, arr=[2,1]
---------------------------------after n<=0 and before ar=[] => n=1, w=1, arr=[2,1]
---------------------------------after ar=[] and before n-1 call => n=1, w=1, arr=[2,1]
---------------------------------before n<=0 => n=0, w=1, arr=[2,1,1]
---------------------------------inside n<=0 => n=0, w=1, arr=[2,1,1]
---------------------------------after n-1 call and before n-2 call => n=1, w=1, arr=[2,1]
---------------------------------after n-2 call => n=1, w=1, arr=[2,1]
---------------------------------after n-1 call and before n-2 call => n=2, w=2, arr=[2]
---------------------------------before n<=0 => n=0, w=2, arr=[2,2]
---------------------------------inside n<=0 => n=0, w=2, arr=[2,2]
---------------------------------after n-2 call => n=2, w=2, arr=[2]
---------------------------------after n-2 call => n=4, w=0, arr=[]
*/

/*******************************************************************************************/
/*******************************************************************************************/

/** [before n<=0]
---------------------------------before n<=0 => n=4, w=0, arr=[]
---------------------------------before n<=0 => n=3, w=1, arr=[1]
---------------------------------before n<=0 => n=2, w=1, arr=[1,1]
---------------------------------before n<=0 => n=1, w=1, arr=[1,1,1]
---------------------------------before n<=0 => n=0, w=1, arr=[1,1,1,1]
---------------------------------before n<=0 => n=0, w=2, arr=[1,1,2]
---------------------------------before n<=0 => n=1, w=2, arr=[1,2]
---------------------------------before n<=0 => n=0, w=1, arr=[1,2,1]
---------------------------------before n<=0 => n=2, w=2, arr=[2]
---------------------------------before n<=0 => n=1, w=1, arr=[2,1]
---------------------------------before n<=0 => n=0, w=1, arr=[2,1,1]
---------------------------------before n<=0 => n=0, w=2, arr=[2,2]
*/

/*******************************************************************************************/

/** [inside n<=0]
---------------------------------inside n<=0 => n=0, w=1, arr=[1,1,1,1]
---------------------------------inside n<=0 => n=0, w=2, arr=[1,1,2]
---------------------------------inside n<=0 => n=0, w=1, arr=[1,2,1]
---------------------------------inside n<=0 => n=0, w=1, arr=[2,1,1]
---------------------------------inside n<=0 => n=0, w=2, arr=[2,2]
*/

/*******************************************************************************************/

/** [after n<=0 and before ar=[]]
---------------------------------after n<=0 and before ar=[] => n=4, w=0, arr=[]
---------------------------------after n<=0 and before ar=[] => n=3, w=1, arr=[1]
---------------------------------after n<=0 and before ar=[] => n=2, w=1, arr=[1,1]
---------------------------------after n<=0 and before ar=[] => n=1, w=1, arr=[1,1,1]
---------------------------------after n<=0 and before ar=[] => n=1, w=2, arr=[1,2]
---------------------------------after n<=0 and before ar=[] => n=2, w=2, arr=[2]
---------------------------------after n<=0 and before ar=[] => n=1, w=1, arr=[2,1]
*/

/*******************************************************************************************/

/** [after ar=[] and before n-1 call]
---------------------------------after ar=[] and before n-1 call => n=4, w=0, arr=[]
---------------------------------after ar=[] and before n-1 call => n=3, w=1, arr=[1]
---------------------------------after ar=[] and before n-1 call => n=2, w=1, arr=[1,1]
---------------------------------after ar=[] and before n-1 call => n=1, w=1, arr=[1,1,1]
---------------------------------after ar=[] and before n-1 call => n=1, w=2, arr=[1,2]
---------------------------------after ar=[] and before n-1 call => n=2, w=2, arr=[2]
---------------------------------after ar=[] and before n-1 call => n=1, w=1, arr=[2,1]
*/

/*******************************************************************************************/

/** [after n-1 call and before n-2 call]
---------------------------------after n-1 call and before n-2 call => n=1, w=1, arr=[1,1,1]
---------------------------------after n-1 call and before n-2 call => n=2, w=1, arr=[1,1]
---------------------------------after n-1 call and before n-2 call => n=3, w=1, arr=[1]
---------------------------------after n-1 call and before n-2 call => n=1, w=2, arr=[1,2]
---------------------------------after n-1 call and before n-2 call => n=4, w=0, arr=[]
---------------------------------after n-1 call and before n-2 call => n=1, w=1, arr=[2,1]
---------------------------------after n-1 call and before n-2 call => n=2, w=2, arr=[2]
*/

/*******************************************************************************************/

/** [after n-2 call]
---------------------------------after n-2 call => n=1, w=1, arr=[1,1,1]
---------------------------------after n-2 call => n=2, w=1, arr=[1,1]
---------------------------------after n-2 call => n=1, w=2, arr=[1,2]
---------------------------------after n-2 call => n=3, w=1, arr=[1]
---------------------------------after n-2 call => n=1, w=1, arr=[2,1]
---------------------------------after n-2 call => n=2, w=2, arr=[2]
---------------------------------after n-2 call => n=4, w=0, arr=[]
*/

/*******************************************************************************************/
/*******************************************************************************************/

// /**
//  * @param {number} n total steps to climb (from bottom to top)
//  */
// function climbLadder(n) {
//     let result = [];

//     /**
//      * @param {number} n 
//      * @param {number[]} steps
//      */
//     function climb(n, steps) {
//         if(n<=0) {
//             if(n===0) result.push([...steps]);
//             return;
//         }

//         steps.push(1);
//         climb(n-1, steps);
//         steps.pop();

//         steps.push(2);
//         climb(n-2, steps);
//         steps.pop();
//     }

//     climb(n, []);
//     return result;
// }

// console.log(climbLadder(4));

// /**
//  * @param {number} n total steps to climb (from bottom to top)
//  */
// function climbLadderWithOptimizedBreakingCond(n) {
//     /**
//      * @type {Array<Array<number>>}
//      */
//     const result = [];

//     /**
//      * @param {number} n
//      * @param {number[]} steps
//      */
//     function climb(n, steps) {
//         if(n===0) {
//             result.push([...steps]);
//             return;
//         }
//         if(n>0) {
//             steps.push(1);
//             climb(n-1, steps);
//             steps.pop();

//             if(n>1) {
//                 steps.push(2);
//                 climb(n-2, steps);
//                 steps.pop();
//             }
//         }
//     }

//     climb(n, []);
//     return result;
// }

// console.log(climbLadderWithOptimizedBreakingCond(5));

/**
 * @param {number} n total steps to climb (from bottom to top)
 * @param {Array<number>} pw possible number of steps which can be climbed at a time.
 * @returns {Array<Array<number>>}
 */
function climbLadderInPossibleWays(n, pw) {

    /**
     * @type {Array<Array<number>>}
     */
    const result = [];
    let pwl=pw.length, i=0;

    function pushToStepAndClimb(n, steps, sc) {
        if(n>sc-1) {
            steps.push(sc);
            climb(n-sc, steps);
            steps.pop();
        }
    }


    /**
     * @param {number} n
     * @param {number[]} steps
     */
    function climb(n, steps) {
        if(n===0) {
            result.push([...steps]);
            return;
        }
        for(i=0; i<pwl; i++) {
            pushToStepAndClimb(n, steps, pw[i]);
        }
    }

    climb(n, []);
    return result;
}

console.log(climbLadderInPossibleWays(5, [1,2]));
