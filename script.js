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
    ban.classList.add('hide');
    main.classList.add('hide');
    detail.classList.add('hide');
    cart.classList.add('hide');
    product.classList.remove('hide');
});

cartBtn.addEventListener("click", function () {
    ban.classList.add('hide');
    main.classList.add('hide');
    detail.classList.add('hide');
    product.classList.add('hide');
    cart.classList.remove('hide');
});

let quan = document.getElementById("count");
let coun = 0;
let totalSum = 0;

let table = document.getElementById("table-container");

const btns = document.getElementsByClassName("btnCar");
for (const btn of btns) {
    btn.addEventListener("click", function () {
        const productTitle = this.querySelector(".productTitle").innerText;
        const productImage = this.querySelector("img").getAttribute("src");
        const productPrice = this.querySelector("span").innerText;
        const productPriceNum = parseFloat(productPrice);

        coun += 1;
        quan.innerText = coun;

        totalSum += productPriceNum;

        document.getElementById("Subtotal").innerText = totalSum.toFixed(2);
        document.getElementById("GrandTotal").innerText = (totalSum + 5).toFixed(2);

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="cart-info">
                <img src="${productImage}" alt="${productTitle}">
                <div>
                    <p>${productTitle}</p>
                    <small>Price: ${productPriceNum.toFixed(2)}</small><br>
                    <a href="">Remove</a>
                </div>
            </td>
            <td><input type="number" value="1"></td>
            <td>${productPriceNum.toFixed(2)}</td>
        `;
        table.appendChild(tr);
    });
}
