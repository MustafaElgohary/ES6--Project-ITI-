"use strict";

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * search toggle
 */

let x = document.querySelector(".btn-badge-cart");
let n = 0;

const searchContainer = document.querySelector("[data-search-wrapper]");
const searchBtn = document.querySelector("[data-search-btn]");

searchBtn.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
});

/**
 * whishlist & cart toggle
 */

const panelBtns = document.querySelectorAll("[data-panel-btn]");
const sidePanels = document.querySelectorAll("[data-side-panel]");

for (let i = 0; i < panelBtns.length; i++) {
  panelBtns[i].addEventListener("click", function () {
    let clickedElemDataValue = this.dataset.panelBtn;

    for (let i = 0; i < sidePanels.length; i++) {
      if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
        sidePanels[i].classList.toggle("active");
      } else {
        sidePanels[i].classList.remove("active");
      }
    }
  });
}

const products = [
  {
    name: "Fresh Orangey",
    category: "vegetables",
    price: 85.0,
    image: "./assets/images/product-1.png",
  },
  {
    name: "Key Lime",
    category: "vegetables",
    price: 85.0,
    image: "./assets/images/product-2.png",
  },
  {
    name: "Fresh Watermelon",
    category: "vegetables",
    price: 85.0,
    image: "./assets/images/product-3.png",
  },
  {
    name: "strawberry",
    category: "vegetables",
    price: 85.0,
    image: "./assets/images/product-4.png",
  },
  {
    name: "Pomagranate Fruit",
    category: "vegetables",
    price: 85.0,
    image: "./assets/images/product-5.png",
  },
  {
    name: "Red onion",
    category: "vegetables",
    price: 85.0,
    image: "./assets/images/product-6.png",
  },
  {
    name: "Lens Results Broccoli",
    category: "vegetables",
    price: 85.0,
    image: "./assets/images/product-7.png",
  },
  {
    name: "Lens Results Spinach",
    category: "vegetables",
    price: 85.0,
    image: "./assets/images/product-8.png",
  },

  // ---------------------------------

  {
    name: " Rainbow Trout-Fish",
    category: "Fish",
    price: 85.0,
    image: "./assets/images/fish1.png",
  },
  {
    name: "sardines",
    category: "Fish",
    price: 85.0,
    image: "./assets/images/sardines.png",
  },
  {
    name: "Medium-Fish",
    category: "Fish",
    price: 85.0,
    image: "./assets/images/fish3.webp",
  },
  {
    name: "Meat",
    category: "Fish",
    price: 85.0,
    image: "./assets/images/fish4.webp",
  },
  {
    name: "Ground-Meat",
    category: "Fish",
    price: 85.0,
    image: "./assets/images/meat.png",
  },
  {
    name: "Mackerel-Fish",
    category: "Fish",
    price: 85.0,
    image: "./assets/images/fish10.jpg",
  },
  {
    name: "Chekins",
    category: "Fish",
    price: 85.0,
    image: "./assets/images/fish7.png",
  },
  {
    name: "Salamon",
    category: "Fish",
    price: 85.0,
    image: "./assets/images/fish88.avif",
  },
  // -----------------------------

  {
    name: "Mango",
    category: "Healthy",
    price: 85.0,
    image: "./assets/images/download.jpg",
  },
  {
    name: "passion fruit",
    category: "Healthy",
    price: 85.0,
    image: "./assets/images/fruit2.jpg",
  },
  {
    name: "Fig",
    category: "Healthy",
    price: 85.0,
    image: "./assets/images/fruit3.jpg",
  },
  {
    name: "Apple",
    category: "Healthy",
    price: 85.0,
    image: "./assets/images/fruit4.jpg",
  },
  {
    name: "pears",
    category: "Healthy",
    price: 85.0,
    image: "./assets/images/fruit5.jpg",
  },
  {
    name: "coconut",
    category: "Healthy",
    price: 85.0,
    image: "./assets/images/fruit6.jpg",
  },
  {
    name: "Banana",
    category: "Healthy",
    price: 85.0,
    image: "./assets/images/download2.jpg",
  },
  {
    name: "Peach",
    category: "Healthy",
    price: 85.0,
    image: "./assets/images/fruit8.jpg",
  },

  // ---------------------------------------

  {
    name: "Cottage cheese",
    category: "Dairy",
    price: 85.0,
    image: "./assets/images/Dairy0.jpg",
  },
  {
    name: "Milk",
    category: "Dairy",
    price: 85.0,
    image: "./assets/images/Dairy1.jpg",
  },
  {
    name: "Sour Cream",
    category: "Dairy",
    price: 85.0,
    image: "./assets/images/Dairy2.jpg",
  },
  {
    name: "Feta cheese",
    category: "Dairy",
    price: 85.0,
    image: "./assets/images/Dairy3.jpg",
  },
  {
    name: "Yellow cheese",
    category: "Dairy",
    price: 85.0,
    image: "./assets/images/Dairy4.jpg",
  },
  {
    name: "Butter",
    category: "Dairy",
    price: 85.0,
    image: "./assets/images/Dairy5.jpg",
  },
  {
    name: "Yogurt",
    category: "Dairy",
    price: 85.0,
    image: "./assets/images/Dairy6.jpg",
  },
  {
    name: "cheader cheese",
    category: "Dairy",
    price: 85.0,
    image: "./assets/images/Dairy7.jpg",
  },
];

/**
 * back to top
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  window.scrollY >= 100
    ? backTopBtn.classList.add("active")
    : backTopBtn.classList.remove("active");
});

/**
 * product details page
 */

// const productDisplay = document.querySelector("[data-product-display]");
// const productThumbnails = document.querySelectorAll("[data-product-thumbnail]");

document.addEventListener("DOMContentLoaded", function () {
  // Extracting parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("name");
  const productPrice = urlParams.get("price");
  const productImage = urlParams.get("image");

  // Populating HTML elements with the product details
  const productDisplay = document.querySelector("[data-product-display]");
  const productTitle = document.querySelector(".product-title");
  const productPriceElement = document.querySelector(".product-price");

  productDisplay.src = productImage;
  productTitle.textContent = productName;
  productPriceElement.textContent = `${productPrice} USD`;

  let bt = document.getElementById("cart-product");
  console.log(bt);
  bt.addEventListener("click", (event) => {
    addToCart(event);
  });
});
// for (let i = 0; i < productThumbnails.length; i++) {
//   productThumbnails[i].addEventListener("click", function () {
//     productDisplay.src = this.src;
//     productDisplay.classList.add("fade-anim");

//     setTimeout(function () {
//       productDisplay.classList.remove("fade-anim");
//     }, 250);
//   });
// }

// slide show

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// test

const gridList = document.querySelector(".grid-list");
const filterButtons = document.querySelectorAll(".filter-btn");

// tst
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const gridList = document.querySelector(".grid-list");

  // Function to filter products based on category
  const filterProducts = (category) => {
    gridList.innerHTML = "";
    products.forEach((product) => {
      if (product.category === category || category === "all") {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="product-card">
            <figure class="card-banner">
              <img src="${
                product.image
              }" width="189" height="189" loading="lazy" alt="${product.name}">
              <div class="btn-wrapper">
                <button class="product-btn" aria-label="Add to Whishlist"><ion-icon name="heart-outline"></ion-icon></button>
                <button class="product-btn" aria-label="Quick View"><ion-icon name="eye-outline"></ion-icon></button>
              </div>
            </figure>
            <h3 class="h4 card-title"><a href="./product-details.html?name=${
              product.name
            }&price=85.00&image=${product.image}">${product.name}</a></h3>
            <div class="price-wrapper">
              <del class="del">$75.00</del>
              <data class="price" value="${
                product.price
              }">$${product.price.toFixed(2)}</data>
            </div>
            <button class="btn btn-primary add-to-cart">Add to Cart</button>
          </div>`;
        gridList.appendChild(li);
      }
    });
  };

  // Event listener for category filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const category = button.getAttribute("data-category");
      filterProducts(category);
    });
  });

  // Initial display of all products
  filterProducts("vegetables");

  // Event listener for "Add to Cart" button using event delegation
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
      addToCart(event);
    }
  });
});

// Function to handle adding a product to the cart
function addToCart(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  console.log("Adding to cart...");
  n += 1;
  x.innerHTML = n;
  x.value = n;

  // Get the parent product element
  const product = event.target.closest(".product-card");

  // Extract product details
  const productName = product.querySelector(".card-title").textContent;
  const productPrice = parseFloat(
    product.querySelector(".price").getAttribute("value")
  );

  const productImage = product.querySelector(".card-banner img").src;
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push({
    name: productName,
    price: productPrice,
    image: productImage,
  });

  localStorage.setItem("cart", JSON.stringify(cartItems));
  const cartItem = document.createElement("li");
  cartItem.classList.add("panel-item");

  cartItem.innerHTML = `
    <a href="#" class="panel-card">
      <figure class="item-banner">
        <img src="${productImage}" width="46" height="46" loading="lazy" alt="${productName}" />
      </figure>
      <div>
        <p class="item-title">${productName}</p>
        <span class="item-value">$${productPrice.toFixed(2)}</span>
      </div>
      <button class="item-close-btn" aria-label="Remove item">
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </a>
  `;

  // Add the cart item to the sidebar
  const sidebarCart = document.querySelector(
    '[data-side-panel="cart"] .panel-list'
  );
  sidebarCart.appendChild(cartItem);

  // Calculate and update subtotal in the sidebar
  updateSubtotal();

  // Show the sidebar
  document.querySelector('[data-side-panel="cart"]').classList.add("active");
}

// Function to update subtotal in the sidebar
function updateSubtotal() {
  const sidebarCart = document.querySelector('[data-side-panel="cart"]');
  const subtotalValue = sidebarCart.querySelector(".subtotal-value");
  let total = 0;

  // Loop through each item in the sidebar cart and sum up the prices
  sidebarCart.querySelectorAll(".item-value").forEach((itemValue) => {
    total += parseFloat(itemValue.textContent.slice(1)); // Remove the dollar sign and convert to float
  });

  // Update the subtotal value
  subtotalValue.textContent = `$${total.toFixed(2)}`;
}

// $#$@#$@#$@#$$@#$@#$@
