
console.log("Hi Guys");

/**
 * @type {function(): void}
 */
let newFunc;

/**
* @param {string} str
* @param {function(string): void} cb
*/
function fun(str, cb) {
	console.log("inside fun");
	cb(str);
	console.log("After CB");
}

fun("value", function(s) {
	console.log(s);
	fun("innerValue", function(st) {
        console.log(st);
        console.log(s);
        newFunc = function() {
            console.log(st);
            console.log(s);
        }
    });
	console.log("done");
});

newFunc();

console.log("End");

/** Answer:-
 * Hi Guys
 * inside fun
 * value
 * inside fun
 * innerValue
 * value
 * After CB
 * done
 * After CB
 * innerValue
 * value
 * End
 */