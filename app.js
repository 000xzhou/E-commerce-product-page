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


// change teh thumbnail area to carouse items
// but it's gitchy.... if the window don't start from small
// const carouselitem = document.querySelector("#carousel")
// const carimg = document.querySelectorAll("[data-img]")

// if (window.innerWidth < 800) {
//     carouselitem.classList.add("carousel")
//     carimg.forEach(img => {
//         img.classList.add("carousel__slide")
//     })
// } else {
//     carouselitem.classList.remove("carousel")
//     carimg.forEach(img => {
//         img.classList.remove("carousel__slide")
//     })
// }



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


//loop tho all img
const allImg = document.querySelectorAll("[data-img]")
let mainImg = document.querySelector(".ecommerce-gallery-main-img")
allImg.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log(e.target.src)
        console.log(mainImg.href)
        mainImg.setAttribute("src", e.target.src)
        document.querySelector(".gref").setAttribute("href", e.target.src)
    })
});


Fancybox.bind("#gallery a", {
    groupAll: true, // Group all items
    on: {
        ready: (fancybox) => {
            console.log(`fancybox #${fancybox.id} is ready!`);
        }
    },

});

// const myCarousel = new Carousel(document.querySelector(".carousel"), {
//     // Options
// });


