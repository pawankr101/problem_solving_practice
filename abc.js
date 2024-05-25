/**
 *
 * @description this function takes integer array of which sub array has to be calculated.
 * @param {[number]} array 
 * @param {number} k is the size of window.
 * @returns {[[number]]}
 */
const getAllSubArray = (array,k) => {
    let i = 0;
    let j = 0;//pointer initialisation
  
    let result = [];
    let currResult = [];//result array and temp array initialisation
  
    while (j < arr.length) { //SW technique implimentation O(n)
      currResult.push(arr[j]);
      if (j - i + 1 < k) { // this parts executes till first window created.
        j++;
      } else if(j - i + 1 == k) { // this is the heart of algo where optimisation happens
        result.push([...currResult]);
        currResult = currResult.slice(1, k);
        j++;
        i++;
      }
    }
    return result;
  };
  console.log(getAllSubArray(arr,4));
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];// test input.
  
  
  ///op
  // [
  //   [1, 2, 3, 4],
  //   [2, 3, 4, 5],
  //   [3, 4, 5, 6],
  //   [4, 5, 6, 7],
  //   [5, 6, 7, 8],
  //   [6, 7, 8, 9],
  // ];
  



let firstInd = null, lastInd = null;

function search(nums, target, start, end) {
  if(start>end) {
    console.log("not found");
    return;
  }

  let mid = Math.floor((start+end)/2);

  if(nums[mid] === target) {
    if(firstInd == null && lastInd == null) firstInd = lastInd = mid;
    else {
      if(mid<firstInd) firstInd = mid;
      else if(mid>lastInd) lastInd = mid;
    }
  } else if(nums[mid] > target) {
    search(nums, target, start, mid-1);
  } else {
    search(nums, target, mid+1, end);
  }
}

let getFirstOccurrence = (nums=[2,3,4,5,5,5,5,5,7,7,8,8,8,9,9], target=5) => {
  search(nums, target, 0, nums.length-1);
  console.log(firstInd, lastInd);
}
