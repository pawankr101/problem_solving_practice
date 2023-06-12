/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    /**
     *  @type {Map<number, number>}
     */
    let counts = new Map()
    for(let i=0,l=nums.length;i<l;i++) {
        if(counts.has(nums[i])) counts.set(nums[i], counts.get(nums[i])+1);
        else counts.set(nums[i], 1);
    }
    return Array.from(counts.entries()).sort((a, b) => (b[1] - a[1])).slice(0,k).map(v=>v[0]);
};


/*****************Sample Case*****************/
(async function run() {
    let numbers = [1,1,1,2,2,3], k = 2;
    console.log('\n********** Top K Frequent Elements **********');
    console.log(`Inputs: \n\tNumbers: [${numbers.join(', ')}], K: ${k}`);
    console.log(`Top K Frequent Elements: \n\t[${topKFrequent(numbers, k).join(', ')}]`);
    console.log('*********************************************\n');
})();