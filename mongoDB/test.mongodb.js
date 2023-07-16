/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

use("test");

// function a() {
//     console.log("a");
// }
// a();

// let bcs = db.sales.find().toArray();
// let ar = bcs[0]._id.id;
// console.log(bcs[0]._id.toString())
// console.log((ar.toString()));
// console.log(JSON.stringify(ar));
// bcs;

// db.sales.find().toArray().map(el => {
//     el._id = (Date.now().toString(36) + Math.random().toString(36).substring(2)).toUpperCase();
//     return el;
// });

db.sales.find({}, {_id: 0, itemCount: '$item', price: 1, quantity:1});
// db.sales.find({quantity: {$all: 5}})