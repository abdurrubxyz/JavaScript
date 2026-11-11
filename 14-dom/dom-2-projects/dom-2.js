// Select HTML elements

let form = document.querySelector("#product-form");

let productName = document.querySelector("#product-name");

let productPrice = document.querySelector("#product-price");

let productQuantity = document.querySelector("#product-quantity");

let productList = document.querySelector("#product-list");

let grandTotal = document.querySelector("#grand-total");

let clearAll = document.querySelector("#clear-all");

// Run all events

function runEvents() {
  // Add product
  form.addEventListener("submit", addProduct);

  // Delete individual product
  productList.addEventListener("click", removeProduct);

  // Clear all products
  clearAll.addEventListener("click", clearAllProducts);
}

// Add Product

function addProduct(e) {
  e.preventDefault();

  // Get input values

  let name = productName.value.trim();

  let price = Number(productPrice.value);

  let quantity = Number(productQuantity.value);

  // Validation

  if (name === "") {
    alert("Please enter product name");
    return;
  }

  if (!Number.isFinite(price) || price <= 0) {
    alert("Please enter a valid price");
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    alert("Please enter a valid quantity");
    return;
  }

  // Calculate subtotal

  let subtotal = price * quantity;

  // Create table row

  let tr = document.createElement("tr");

  // Create product name cell

  let nameTd = document.createElement("td");

  nameTd.textContent = name;

  // Create price cell

  let priceTd = document.createElement("td");

  priceTd.textContent = price.toFixed(2);

  // Create quantity cell

  let quantityTd = document.createElement("td");

  quantityTd.textContent = quantity;

  // Create subtotal cell

  let subtotalTd = document.createElement("td");

  subtotalTd.textContent = subtotal.toFixed(2);

  // Create action cell

  let actionTd = document.createElement("td");

  // Create delete button

  let deleteBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-sm delete-item";

  deleteBtn.textContent = "Delete";

  deleteBtn.type = "button";

  // Append elements

  actionTd.appendChild(deleteBtn);

  tr.appendChild(nameTd);

  tr.appendChild(priceTd);

  tr.appendChild(quantityTd);

  tr.appendChild(subtotalTd);

  tr.appendChild(actionTd);

  // Append row to table

  productList.appendChild(tr);

  // Update grand total

  calculateGrandTotal();

  // Reset form

  form.reset();

  productName.focus();
}

// Calculate Grand Total

function calculateGrandTotal() {
  let total = 0;

  let products = productList.querySelectorAll("tr");

  products.forEach(function (element) {
    let subtotal = Number(element.children[3].textContent);

    total = total + subtotal;
  });

  grandTotal.textContent = total.toFixed(2);
}

// Remove Individual Product

function removeProduct(e) {
  if (e.target.classList.contains("delete-item")) {
    if (confirm("Are you sure you want to delete this product?")) {
      e.target.parentElement.parentElement.remove();

      calculateGrandTotal();
    }
  }
}

// Clear All Products

function clearAllProducts() {
  if (confirm("Are you sure you want to clear all products?")) {
    productList.innerHTML = "";

    calculateGrandTotal();
  }
}

// Run all events

runEvents();
