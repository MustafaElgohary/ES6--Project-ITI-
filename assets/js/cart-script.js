document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".shopping-cart");
  const columnLabels = document.querySelector(".column-labels");
  const checkoutButton = document.querySelector(".checkout");
  const tot = document.querySelector(".totals");
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  // Check if cart items exist in localStorage
  if (cartItems) {
    cartItems.forEach((item) => {
      const cartItem = createCartItemElement(item);
      cartContainer.insertBefore(cartItem, tot); // Insert before checkout button
    });
  }

  // Add event listener to remove buttons
  const removeButtons = document.querySelectorAll(".remove-product");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");
      product.remove();
      updateCartTotal();
    });
  });

  // Add event listener to quantity inputs
  const quantityInputs = document.querySelectorAll(".product-quantity input");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", () => {
      updateCartTotal();
    });
  });

  // Update cart total on page load
  updateCartTotal();

  // Add event listener to checkout button
  checkoutButton.addEventListener("click", () => {
    // Clear cart data from local storage
    localStorage.removeItem("cart");
    // Reload the page
    window.location.reload();
  });
});

// Function to create cart item element
function createCartItemElement(item) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("product");

  cartItem.innerHTML = `
    <div class="product-image">
      <img src="${item.image}" />
    </div>
    <div class="product-details">
      <div class="product-title">${item.name}</div>
      <p class="product-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
    </div>
    <div class="product-price">${item.price}</div>
    <div class="product-quantity">
      <input type="number" value="1" min="1" />
    </div>
    <div class="product-removal">
      <button class="remove-product">Remove</button>
    </div>
    <div class="product-line-price">${item.price}</div>
  `;

  return cartItem;
}

// Function to update cart total
function updateCartTotal() {
  let subtotal = 0;

  // Calculate subtotal for each product
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    const price = parseFloat(
      product.querySelector(".product-price").textContent
    );
    const quantity = parseInt(
      product.querySelector(".product-quantity input").value
    );
    const linePrice = price * quantity;
    product.querySelector(".product-line-price").textContent =
      linePrice.toFixed(2);
    subtotal += linePrice;
  });

  // Update subtotal, tax, and grand total
  const taxRate = 0.05;
  const shipping = 15.0;
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shipping;

  document.getElementById("cart-subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("cart-tax").textContent = tax.toFixed(2);
  document.getElementById("cart-total").textContent = total.toFixed(2);
}
