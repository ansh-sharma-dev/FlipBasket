//ka istemaal bass logic(function) likhne ke kaam ata hai
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let found = cart.find((item) => item.name === name);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({
      name,
      price,
      image,
      quantity: 1
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(name + "Added To Cart 🛒");
}
function buyNow(name, price, image) {
  localStorage.setItem("buyNowProduct", JSON.stringify({
    name,
    price,
    image
  }));
  window.location.href = "checkout.html";
}
//naya product cart me ayega to cart update ho jayega uska logic
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = 0;

  cart.forEach((item) => {
    count += item.quantity;
  });
  let cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.innerText = count;
  }
}
updateCartCount();
updateWishlistCount();


//jab hum kisi product ko cart me dalenge to ek massage ayega uska logic hai
function showToast(msg) {
  let toast = document.getElementById("toast");

  if (!toast) return;

  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}

//-+ button ka logic hai bhut inpotent hai.................
function changeQty(index, value) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += value;
  //agar quantity 0 ho jaye ->remove
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
//ye remove button ka logic hai bhut inpotent.................
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// this is dark mode logic very inportent.......................
function toggleTheme() {
  document.body.classList.toggle("dark");
}

function updateWishlistCount() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  let count = document.getElementById("wishlistCount");

  if (count) {
    count.innerText = wishlist.length;
  }
}
//this is a wishlist feture logic.................................
function addToWishlist(productName) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (!wishlist.includes(productName)) {
    wishlist.push(productName);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();

    showToast(productName + " Added To Wishlist ❤️");
  } else {
    showToast(productName + " Already In Wishlist ❤️");
  }
}


// search ke liye logic hai ......................................
let searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    let searchValue = searchInput.value.toLowerCase();

    let products = document.querySelectorAll(".product");

    let found = false;

    products.forEach(function (product) {
      let productName = product
        .querySelector("h3")
        .innerText.toLocaleLowerCase();
      if (productName.includes(searchValue)) {
        product.style.display = "block";
        found = true;
      } else {
        product.style.display = "none";
      }
    });

    let noResult = document.getElementById("noResult");
    if (noResult) {
      if (found) {
        noResult.style.display = "none";
      } else {
        noResult.style.display = "block";
      }
    }
  });
}
let user =
  JSON.parse(localStorage.getItem("user"));

if (user) {
  let welcome =
    document.getElementById("welcomeUser");

  if (welcome) {
    welcome.innerText = "👋 Welcome," + user.name;
  }
}

