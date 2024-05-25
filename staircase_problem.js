

/**
 * Top-down stair-case
 * @param {number} n 
 * @param {number} sl 
 * @param {number[]} w 
 * @returns 
 */
function climb(n, sl, w) {
  if(sl>=n) {
    if(sl===n) console.log(`For n=${sl} => snapshot=[${w}]`);
    return;
  }
  
  //console.log(`For n=${sl} => snapshot=[${w}]`);
  w.push(1);
  climb(n, sl+1, w);
  w.pop();

  if(sl+1<n) {
    //console.log(`For n=${sl} => snapshot=[${w}]`);
    w.push(2);
    climb(n, sl+2, w);
    w.pop();
  }
}
climb(10, 0, []);

// -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5

/**
  1 => 1 => 1 => 1 => 1
  1 => 1 => 1 => 2
  1 => 1 => 2 => 1
  1 => 2 => 1 => 1
  1 => 2 => 2
  2 => 1 => 1 => 1
  2 => 1 => 2
  2 => 2 => 1
*/


/**
 * Algorithms to learn for System Design
 * * Consistent Hashing Algorithm
 * * Quadtree/Geohash
 * * Leacky Bucket/Token Bucket
 * * Trie search Algorithm
 * * Bloom Filter
 * * Raft Consensus Algorithm
 */
