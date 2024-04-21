// onReady Function wired up
document.addEventListener('DOMContentLoaded', onReady, false);

const cart = [];
const budget = 100.00;

function onReady() {
  console.log('DOM is Ready');
}

// form submit function
function sumbitForm(event) {
  // ask the form not to reload the page
  event.preventDefault();

  // Grab references to the two inputs from the DOM
  const itemNameElement = document.getElementById('item-name');
  const itemPriceElement = document.getElementById('item-price');

  // Build a new object with the values from the user
  const newItem = {
    name: itemNameElement.value,
    price: itemPriceElement.value,
  }

  console.log(newItem);

  // Push our new item to the global array
  cart.push(newItem);

  // Clear the form
  itemNameElement.value = '';
  itemPriceElement.value = '0';

  // Update the shopping list on the DOM
  renderShoppingCart();
  // Update the remaining budget
  renderRemainingBudget();

}

function renderShoppingCart() {
  // Loop over the global cart array
  // For every item in the array, append a new list item with the name and price
  const shoppingListElement = document.getElementById('shopping-list');
  shoppingListElement.innerHTML = ''; // clears out all list items already there

  for (let i = 0; i < cart.length; i++) {
    shoppingListElement.innerHTML += `
    <li>
      <strong>Name:</strong> ${cart[i].name} <strong>Price:</strong> $${cart[i].price}
    </li>
    `  
  }

}

function calculateRemaining() {
// Sum up total in the cart
  let total = 0;
  for (const item of cart) {
    total += Number(item.price);
  }

// Calculate the remaining budget
  const remaining = budget - total;
  return remaining;
}

function renderRemainingBudget() {
  const remaining = calculateRemaining();
  // update the DOM accordingly
  const paraElement = document.getElementById('remaining');
  paraElement.innerText = `$${remaining} Remaining`;
}