function openProduct(name, price, image) {

    const product = {
        name: name,
        price: price,
        image: image
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "product.html";
}

// Product load
const product = JSON.parse(localStorage.getItem("selectedProduct"));

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productImg = document.getElementById("productimg");

if (product && productName && productPrice && productImg) {

    productName.innerText = product.name;
    productPrice.innerText = "₹" + product.price;
    productImg.src = product.image;
}


// Add To Cart Button
const cartBtn = document.getElementById("cartBtn");

if (cartBtn && product) {

    cartBtn.addEventListener("click", function () {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const item = cart.find(i => i.name === product.name);

        if (item) {
            item.quantity += quantity;
        } else {
            cart.push({
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart!");
    });

}


// Buy Now Button
const buyBtn = document.getElementById("buyBtn");

if (buyBtn && product) {

    buyBtn.addEventListener("click", function () {

        localStorage.setItem("buyNowProduct", JSON.stringify(product));

        window.location.href = "checkout.html";

    });

}
// Quantity Buttons

let quantity = 1;

const qty = document.getElementById("qty");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

if (plusBtn && minusBtn && qty) {

    plusBtn.addEventListener("click", () => {
        quantity++;
        qty.innerText = quantity;
    });

    minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            qty.innerText = quantity;
        }
    });

}