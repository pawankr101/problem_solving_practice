
console.log("Hi Guys");

/**
* @param {string} str
* @param {function(string): void} cb
*/
function fun(str, cb) {
	console.log("inside fun");
	queueMicrotask(()=> {
        cb(str);
    });
	console.log("After CB");
}
function newFunc(st, s) {
    console.log("newFunc: " + st);
    console.log("newFunc: " + s);
}

fun("value", function(s) {
	console.log(s);
	fun("innerValue", function(st) {
        console.log(st);
        console.log(s);
        newFunc(st, s);
    });
	console.log("done");
});

// newFunc();

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