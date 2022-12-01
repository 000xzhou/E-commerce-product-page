// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery
const addNum = document.querySelector("[data-add]")
const minusNum = document.querySelector("[data-minus]")
const valueNum = document.querySelector("[data-value]")
const addToCart = document.querySelector("[data-add-to-cart]")

const cartIcon = document.querySelector(".dropdown")
const dropdownCart = document.querySelector(".dropdown-menu")

const item = document.querySelector("[data-item-title]").textContent
const cartItem = document.querySelector("[data-cart-list")
const price = document.querySelector("[data-price]").textContent
const img = document.querySelector("[data-img]").src

const checkout = document.querySelector("[data-checkout]")

// Change input vaule when clicking + or -
addNum.addEventListener("click", () => {
    valueNum.value++
})

minusNum.addEventListener("click", () => {
    if (valueNum.value == 0) {
        valueNum.value = 0
    } else {
        valueNum.value--
    }
})

// display cart
cartIcon.addEventListener("click", () => {
    dropdownCart.style.display = dropdownCart.style.display == "block" ? "none" : "block"

})

// add to cart
addToCart.addEventListener("click", () => {
    if (valueNum.value == 0) {
        return
    } else {
        addItemCart(valueNum.value)
        displayCheckout()
        reset()
    }
})

function addItemCart(value) {
    cartItem.innerHTML += `
    <li>
    <div>
    <img class="rounded" src=${img} />
    </div>
    <div>
    <div>
    ${item}
    </div>
    <div>
    ${price} x ${value} $${price.replace('$', '') * value}.00
    </div>
    </div>
    <img onClick="deleteThis(this)" src="images/icon-delete.svg" />
    </li>
    `
}
function reset() {
    valueNum.value = 0
}

function deleteThis(params) {
    // how to have the cart not auto close?
    params.parentElement.remove()
    displayCheckout()
}

function displayCheckout() {
    if (cartItem.getElementsByTagName('li').length > 0) {
        checkout.style.display = "block"
        cartItem.classList.remove("some-text")
    } else {
        checkout.style.display = "none"
        cartItem.classList.add("some-text")
    }
}

