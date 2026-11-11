let form = document.querySelector("#task-form");
let input = document.querySelector("#task");
let lists = document.querySelector(".collection");
let clearAll = document.querySelector("#clear-all");

// run this all events
function runThisAll() {
  // console.log("start");
  document.addEventListener("DOMContentLoaded", domReload);

  form.addEventListener("submit", addTask);

  clearAll.addEventListener("click", funClearALl);

  lists.addEventListener("click", removeTheElement);
}

function domReload() {
  let task;

  if (localStorage.getItem("task") === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem("task"));
  }

  task.forEach((element) => {
    // create li
    const li = document.createElement("li");

    // classname
    li.className = "collection-item";

    // innerText
    li.innerText = task;

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
  });
}

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
    li.className = "collection-item";

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

    // store in ls
    storeTheTaskInLs(input.value);

    // removevalue
    input.value = "";
  }
}

// store on localstore
function storeTheTaskInLs(thatInputValue) {
  let task;

  if (localStorage.getItem("task") === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem("task"));
  }

  task.push(thatInputValue);

  localStorage.setItem("task", JSON.stringify(task));
}
// storeTheTaskInLs()

// Clear each item
function removeTheElement(e) {
  // if(e.target.parentElement.className = "delete-item secondary-content test"){
  //     if(confirm("Are you sure u want to delete")){
  //         e.target.parentElement.parentElement.remove()
  //     }
  // }

  // console.log(e.target.parentElement.classList.contains("delete-item"))
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure u want to delete")) {
      e.target.parentElement.parentElement.remove();

      removeTheTaskFromLs(e.target.parentElement.parentElement);
    }
  }
}

// removeTheTaskFromLs
function removeTheTaskFromLs(taslElement) {
  let task;

  if (localStorage.getItem("task") === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem("task"));
  }

  task.forEach(function(ele,ind){
    if(taslElement.innerText === ele){
      task.splice(ind,1);
    }
  });

  localStorage.setItem("task", JSON.stringify(task));
}

// ClearAll
function funClearALl() {
  lists.innerHTML = "";

  clearFormLs();
}

// remove form ls
function clearFormLs() {
  localStorage.removeItem("task");
}

runThisAll();
