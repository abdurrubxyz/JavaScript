
document.querySelector("#userBtn").addEventListener("click", getUser)

function getUser() {
  // creat a xhr
  let xrt = new XMLHttpRequest();

  // open
  xrt.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  console.log(xrt);

  // onload
  xrt.onload = function () {
    let outPut = "";

    if (this.status === 200) {
      // conver json obj into normal object using JSON.parse()
      const users = JSON.parse(this.responseText);

      users.forEach((user) => {
        outPut += `
         <ul>
            <li>ID : ${user.id}</li>
            <li>Name : ${user.name}</li>
            <li>Age : ${user.email}</li>
            <li>City : ${user.address.city}</li>
            </ul>
        `;

        document.querySelector("#userOutput").innerHTML = outPut;
      });
    } else {
      document.querySelector("#userOutput").innerHTML =
        `${this.status} ${this.statusText}`;
    }
  };

  // send
  xrt.send();
}
