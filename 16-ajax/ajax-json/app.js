document.querySelector("#btn-1").addEventListener("click", getCustomer);
document.querySelector("#btn-2").addEventListener("click", getCustomers);

function getCustomer() {
  // creat a xhr
  let xrt = new XMLHttpRequest();

  // open
  xrt.open("GET", "customer.json", true);

  console.log(xrt);

  // onload
  xrt.onload = function () {
    if (this.status === 200) {
      // conver json obj into normal object using JSON.parse()
      const customer = JSON.parse(this.responseText);

      let outPut = `
            <ul>
            <li>ID : ${customer.id}</li>
            <li>Name : ${customer.name}</li>
            <li>Age : ${customer.age}</li>
            <li>City : ${customer.city}</li>
            <li>State : ${customer.state}</li>
            <li>Phone : ${customer.phone}</li>
            </ul>
            `;

      document.querySelector("#output-1").innerHTML = outPut;
    } else {
      document.querySelector("#output-1").innerHTML =
        `${this.status} ${this.statusText}`;
    }
  };

  // send
  xrt.send();
}

function getCustomers() {
  // creat a xhr
  let xrt = new XMLHttpRequest();

  // open
  xrt.open("GET", "customers.json", true);

  console.log(xrt);

  // onload
  xrt.onload = function () {
    let outPut = "";

    if (this.status === 200) {
      // conver json obj into normal object using JSON.parse()
      const customers = JSON.parse(this.responseText);

      customers.forEach((customer) => {
        outPut += `
         <ul>
            <li>ID : ${customer.id}</li>
            <li>Name : ${customer.name}</li>
            <li>Age : ${customer.age}</li>
            <li>City : ${customer.city}</li>
            <li>State : ${customer.state}</li>
            <li>Phone : ${customer.phone}</li>
            </ul>
        `;

        document.querySelector("#output-2").innerHTML = outPut;
      });
    } else {
      document.querySelector("#output-2").innerHTML =
        `${this.status} ${this.statusText}`;
    }
  };

  // send
  xrt.send();
}
