// Synchronous - JavaScript executes code one line at a time, in order.
// var a = "a";
// var b = "b";
// var c = "c";

// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//     console.log("one")
// }
// function two() {
//     console.log("two")
// }
// function three() {
//     console.log("three")
// }

// one()
// two()
// three()

// one()
// three()
// two()

// Asynchronous - means JavaScript can start an operation and continue executing other code without waiting for that operation to finish.

// sync
let posts = [
  { title: "post-1", body: "this is post one" },
  { title: "post-2", body: "this is post two" },
];

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 3000);
// }

// function getPost() {
//     setTimeout(() => {
//         let output = "";

//         posts.forEach((post)=>{
//             output += `<li>${post.title}</li>`
//         })

//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title:"post-3",body:"this is post three"})
// getPost()

// Async
// function createPost(post, cb) {
//   setTimeout(() => {
//     posts.push(post);
//     cb();
//   }, 3000);
// }

// function getPost() {
//   setTimeout(() => {
//     let output = "";

//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title:"post-3",body:"this is post three"}, getPost)

// In promise


