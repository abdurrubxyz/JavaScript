document.querySelector("#btn-1").addEventListener("click", getUsers);

function getUsers() {
  // create request object

  let create = new XMLHttpRequest();

  // open
  create.open("GET", "data.txt", true);

  console.log(create);

  //   onload
  create.onload = function () {
    if (this.status === 200) {
      document.querySelector("#output").innerHTML = this.responseText;
    }
    else {
         document.querySelector("#output").innerHTML = `${this.status} ${this.statusText}`;
    }
  };

  //   send
  create.send();
}
