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

//cart function
class Cart {
    constructor(item, value) {
        this.item = item
        this.value = value
        this.reset()
    }

    reset() {
        valueNum.value = 0
    }
    updateDisplay() {
        const newli = document.createElement("li")
        cartItem.append(newli)
        const newdiv = document.createElement("div")
        const newdiv2 = document.createElement("div")
        const subdiv = document.createElement("div")
        const subdiv2 = document.createElement("div")

        newli.append(newdiv)
        newli.append(newdiv2)
        newdiv2.append(subdiv)
        newdiv2.append(subdiv2)

        const productImg = document.createElement('img')

        const productTitle = document.createElement("p")
        const productAmount = document.createElement("p")

        productImg.src = "images/image-product-1.jpg"
        productTitle.textContent = item
        productAmount.textContent = `${price} x ${this.value} $${price.replace('$', '') * this.value}`

        newdiv.append(productImg)
        subdiv.append(productTitle)
        subdiv2.append(productAmount)
        const trashSVG = document.createElement('img')
        trashSVG.src = "images/icon-delete.svg"

        newli.append(trashSVG)
    }

}

addToCart.addEventListener("click", () => {
    if (valueNum.value == 0) {
        return
    } else {
        const cart = new Cart(item, valueNum.value)
        cart.updateDisplay()
        cart.reset()
    }
})

// display cart
cartIcon.addEventListener("click", () => {
    dropdownCart.style.display = dropdownCart.style.display == "block" ? "none" : "block"

})

// checkout 


// delete items
document.addEventListener("click", (e) => {

})