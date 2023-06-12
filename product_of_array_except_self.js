/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let numbersInfo = getNumbersInfo(nums);
    if(numbersInfo.zeroCount>1) return new Array(nums.length).fill(0);
    if(numbersInfo.zeroCount===1) {
        let products = new Array(nums.length).fill(0);
        products[numbersInfo.zeroPosition] = numbersInfo.totalMultiplication;
        return products;
    }
    if(numbersInfo.zeroCount==0) {
        let products = new Array(nums.length);
        for(let i=0,l=nums.length;i<l;i++) {
            products[i] = numbersInfo.totalMultiplication / nums[i];
        }
        return products;
    }
    return nums;
};

/**
 * @param {number[]} numbers
 * @return {{totalMultiplication: number, zeroCount: number, zeroPosition: number}}
 */
function getNumbersInfo(numbers) {
    let totalMultiplication=1, zeroPosition=-1, zeroCount=0;
    for(let i=0,l=numbers.length;i<l;i++) {
        if(numbers[i]) {
            if(totalMultiplication) totalMultiplication *= numbers[i];
        } else {
            if(zeroCount<2) {
                zeroCount++;
                zeroPosition = i;
            }
        }
    }
    return {totalMultiplication,zeroCount,zeroPosition};
}

/*****************Sample Case*****************/
(async function run() {
    let numbers = [0,2,3,4];
    console.log('\n********** Product of Array Except Self **********');
    console.log(`Numbers: \n\t[${numbers.join(', ')}]`);
    console.log(`Product of Array Except Self: \n\t[${productExceptSelf(numbers).join(', ')}]`);
    console.log('**************************************************\n');
})();