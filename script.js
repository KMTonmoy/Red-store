const menuIcon = document.getElementById("menu-icon");
const uls = document.getElementById("uls");
const ban = document.getElementById("ban");
const main = document.getElementById("main");
const detail = document.getElementById("detail");
const product = document.getElementById("product");
const cart = document.getElementById("cart");
const cartBtn = document.getElementById("cartIcon");

menuIcon.addEventListener("click", function () {
    uls.classList.toggle("hidden");
});

document.getElementById("Home").addEventListener("click", function () {
    document.location = 'index.html';
});

document.getElementById("Products").addEventListener("click", function () {
    ban.classList.add('hide')
    main.classList.add('hide')
    detail.classList.add('hide')
    cart.classList.add('hide')
    product.classList.remove('hide')

});

cartBtn.addEventListener("click", function(){
    ban.classList.add('hide')
    main.classList.add('hide')
    detail.classList.add('hide')
    product.classList.add('hide')
    cart.classList.remove('hide')
})