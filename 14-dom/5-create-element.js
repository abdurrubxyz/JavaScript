// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <section class="">
//       <div class="container">
//         <div class="heading">
//           <h1 id="title">Tasks</h1>
//         </div>

//         <ul class="collections">
//           <li class="collection-item">
//             class item 1
//             <a href="" class="delete-item">
//               <i class="fa fa-remove"></i>
//             </a>
//           </li>
//         </ul>

//         <ul class="collections">
//           <li class="collection-item">
//             class item 1
//             <a href="" class="delete-item">
//               <i class="fa fa-remove"></i>
//             </a>
//           </li>
//         </ul>

//         <ul class="collections">
//           <li class="collection-item">
//             class item 1
//             <a href="" class="delete-item">
//               <i class="fa fa-remove"></i>
//             </a>
//           </li>
//         </ul>

//         <ul class="collections">
//           <li class="collection-item">
//             class item 1
//             <a href="" class="delete-item">
//               <i class="fa fa-remove"></i>
//             </a>
//           </li>
//         </ul>

//         <ul class="collections">
//           <li class="collection-item">
//             class item 1
//             <a href="" class="delete-item">
//               <i class="fa fa-remove"></i>
//             </a>
//           </li>
//         </ul>        
//       </div>
//     </section>
//     <script src="./14-dom/5-create-element.js"></script>
//   </body>
// </html>



/* <li class="collection-item">
  class item 1
  <a href="" class="delete-item">
    <i class="fa fa-remove"></i>
  </a>
</li>; */

let container = document.querySelector(".container");
console.log(container)

// let ul = document.querySelector(".collections");
let ul = document.createElement("ul");
ul.className = "collections"

// create a element
let li  = document.createElement("li")

// class name
li.className = "collection-item"

// text
li.innerText = "class item 6"

// create ele
let a = document.createElement("a")

// class name
a.className = "delete-item"

// inner html
a.innerHTML = `<i class="fa fa-remove"></i>`

// appen child a to li
li.appendChild(a)

// append child li to ul
ul.appendChild(li)

// 
container.appendChild(ul)

const body = document.body
console.log(body)