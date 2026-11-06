let form = document.querySelector("#task-form");
let input = document.querySelector("#task");
let lists = document.querySelector(".collection");
let clearAll = document.querySelector("#clear-all");

// run this all events
function runThisAll() {
  // console.log("start");

  form.addEventListener("submit", addTask);

  clearAll.addEventListener("click", funClearALl);

  lists.addEventListener("click", removeTheElement)

}

// <li class="collection-item">
//   task - 1
//   <a href="" class="delete-item secondary-content test">
//     <i class="bi bi-x-lg"></i>
//   </a>
// </li>;

// addtask
function addTask(e) {
  e.preventDefault();
  // console.log("hai")

  //
  if (input.value === "") {
    alert("Enter your Task plz !");
  } else {

    // create li
    const li = document.createElement("li");

    // classname 
    li.className = "collection-item"

    // innerText
    li.innerText = input.value;

    // create a tag
    const a = document.createElement("a");

    // class name 
    a.className = "delete-item secondary-content test";

    // innterHtml
    a.innerHTML = `<i class="bi bi-x-lg"></i>`;

    // appendChild
    li.appendChild(a);

    // list to li
    lists.appendChild(li);

    // removevalue
    input.value = ""
     
  }

}

function removeTheElement(e){
    // if(e.target.parentElement.className = "delete-item secondary-content test"){
    //     if(confirm("Are you sure u want to delete")){
    //         e.target.parentElement.parentElement.remove()
    //     }
    // }

    // console.log(e.target.parentElement.classList.contains("delete-item"))
    if(e.target.parentElement.classList.contains("delete-item")){
         if(confirm("Are you sure u want to delete")){
            e.target.parentElement.parentElement.remove()
        }
    }
}

function funClearALl() {
    lists.innerHTML = "";
}

runThisAll();
