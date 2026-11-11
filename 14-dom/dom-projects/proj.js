const API_URL = "https://6af4643755a1de7dcf03f5d8.mockapi.io/tasks";

let form = document.querySelector("#task-form");
let input = document.querySelector("#task");
let lists = document.querySelector(".collection");
let clearAll = document.querySelector("#clear-all");
let search = document.querySelector("#search");

// run this all events
function runThisAll() {
  document.addEventListener("DOMContentLoaded", domReload);

  form.addEventListener("submit", addTask);

  clearAll.addEventListener("click", funClearALl);

  lists.addEventListener("click", removeTheElement);

  search.addEventListener("keyup", searchTheTask);
}

// function domReload() {
//   let task;

//   if (localStorage.getItem("task") === null) {
//     task = [];
//   } else {
//     task = JSON.parse(localStorage.getItem("task"));
//   }

//   task.forEach((element) => {
//     // create li
//     const li = document.createElement("li");

//     // classname
//     li.className = "collection-item";

//     // innerText
//     li.innerText = task;

//     // create a tag
//     const a = document.createElement("a");

//     // class name
//     a.className = "delete-item secondary-content test";

//     // innterHtml
//     a.innerHTML = `<i class="bi bi-x-lg"></i>`;

//     // appendChild
//     li.appendChild(a);

//     // list to li
//     lists.appendChild(li);
//   });
// }

async function domReload() {
  try {
    const response = await fetch(API_URL);

    const tasks = await response.json();

    console.log(tasks);

    lists.innerHTML = "";

    tasks.forEach(function (element) {
      const li = document.createElement("li");

      li.className = "collection-item";
      li.dataset.id = element.id;
      li.innerText = element.task;

      const a = document.createElement("a");
      a.href = "#";
      a.className = "delete-item secondary-content";
      a.innerHTML = `<i class="bi bi-x-lg"></i>`;

      li.appendChild(a);
      lists.appendChild(li);
    });
  } catch (error) {
    console.log("Error fetching tasks:", error);
  }
}

// addtask
// function addTask(e) {
//   e.preventDefault();

//   if (input.value === "") {
//     alert("Enter your Task plz !");
//   } else {
//     // create li
//     const li = document.createElement("li");

//     // classname
//     li.className = "collection-item";

//     // innerText
//     li.innerText = input.value;

//     // create a tag
//     const a = document.createElement("a");

//     // class name
//     a.className = "delete-item secondary-content test";

//     // innterHtml
//     a.innerHTML = `<i class="bi bi-x-lg"></i>`;

//     // appendChild
//     li.appendChild(a);

//     // list to li
//     lists.appendChild(li);

//     // store in ls
//     storeTheTaskInLs(input.value);

//     // removevalue
//     input.value = "";
//   }
// }

// addtask

async function addTask(e) {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("Enter your Task plz !");
  } else {
    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          task: input.value.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      // remove value
      input.value = "";

      // reload tasks from MockAPI
      await domReload();
    } catch (error) {
      console.log("Error adding task:", error);
    }
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
// function removeTheElement(e) {
//   // if(e.target.parentElement.className = "delete-item secondary-content test"){
//   //     if(confirm("Are you sure u want to delete")){
//   //         e.target.parentElement.parentElement.remove()
//   //     }
//   // }

//   // console.log(e.target.parentElement.classList.contains("delete-item"))
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     if (confirm("Are you sure u want to delete")) {
//       e.target.parentElement.parentElement.remove();

//       removeTheTaskFromLs(e.target.parentElement.parentElement);
//     }
//   }
// }

// Clear each item
async function removeTheElement(e) {
  const deleteItem = e.target.closest(".delete-item");

  if (deleteItem) {
    e.preventDefault();

    if (confirm("Are you sure u want to delete")) {
      const taskElement = deleteItem.closest(".collection-item");

      const taskId = taskElement.dataset.id;

      try {
        const response = await fetch(`${API_URL}/${taskId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete task");
        }

        await domReload();
      } catch (error) {
        console.log("Error deleting task:", error);
      }
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

  task.forEach(function (ele, ind) {
    if (taslElement.innerText === ele) {
      task.splice(ind, 1);
    }
  });

  localStorage.setItem("task", JSON.stringify(task));
}

// ClearAll
// function funClearALl() {
//   lists.innerHTML = "";

//   clearFormLs();
// }

// remove form ls

// ClearAll
async function funClearALl() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    try {
      // Get all tasks from MockAPI
      const response = await fetch(API_URL);

      const tasks = await response.json();

      // Delete each task
      for (const task of tasks) {
        await fetch(`${API_URL}/${task.id}`, {
          method: "DELETE",
        });
      }

      // Reload tasks
      await domReload();
    } catch (error) {
      console.log("Error deleting all tasks:", error);
    }
  }
}

function clearFormLs() {
  localStorage.removeItem("task");
}

// searchTheTask
function searchTheTask(e) {
  const valuetext = e.target.value.toLowerCase();

  const allLi = document.querySelectorAll(".collection-item");

  allLi.forEach(function (allLists) {
    let item = allLists.innerText;

    if (item.toLowerCase().indexOf(valuetext) != -1) {
      allLists.style.display = "block";
    } else {
      allLists.style.display = "none";
    }
  });
}

runThisAll();
