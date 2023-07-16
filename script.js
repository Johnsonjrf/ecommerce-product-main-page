// document.querySelector(".right-column").addEventListener("click", () => {
//     alert("clicked")
//     document.querySelector(".left-column").style.backgroundImage = `url("images/image-product-1.jpg")`
// })

// change main background to different product view

const differentViews = document.querySelectorAll(".view")
const mainImg = document.querySelector(".main-img")

for (let i = 0; i < differentViews.length; i++) {
    
    differentViews[i].addEventListener("click", () => {
        mainImg.style.backgroundImage = 'url('+differentViews[i].src+')'
        // const newView = document.querySelector(`.view${i}`)
        // console.log(newView.style)
        
        // console.log(newView)
    })
}

// click event on the increment and decrement button
const buttons = document.querySelectorAll("button")
var count = 1
const orderQuantity = document.querySelector("#order")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        const id = e.target.id;
        updateOrder(id)
        
        // count++;
       
        
    })
})

function updateOrder(id){
    if(id === "1") {
        count = count - 1;
        console.log(count)
        orderQuantity.innerHTML = count;
    } else if(id === "3"){
        count = count + 1;
        // console.log(count)
        orderQuantity.innerHTML = count;
    } else {
        count === count + 0
        // console.log(count)
        orderQuantity.innerHTML = count;
    }
    console.log(count)

}

// console.log(orderQuantity.innerHTML)

// orderQuantity.innerHTML = count;

const cartDetails = document.querySelector(".item-ordered")

document.querySelector(".cart-icon").addEventListener("click", () => {
    cartDetails.classList.toggle("show")
    
})

// click the add to cart button

const orderButton = document.querySelector(".add-to-cart")
const orderImg = document.querySelector(".order-img")
const orderDesc = document.querySelector(".order-disc")
const totalPrice = document.querySelector(".total-price")
const deleteIcon = document.getElementById("delete")
const orderDetails = document.querySelector(".order-details")

orderButton.addEventListener("click", () => {
    orderImg.src = "images/image-product-1.jpg"
    orderDesc.innerHTML = "Fall Limited Edition Sneakers"
    deleteIcon.classList = `bx bxs-trash`
    const quantity = orderQuantity.innerHTML
    updatePrice(quantity)
    if (orderDetails.style.display === "none") {
        orderDetails.style.display = "flex"
    }


});

function updatePrice (qty) {
    totalPrice.innerHTML = `$125.00 x ${qty} $${qty * 125}.00`
}

// delete item from cart
deleteIcon.addEventListener("click", () => {
    orderDetails.style.display = "none"
})

// toggle menu bar

const menuBar = document.querySelector(".menu")
const closeMenu = document.querySelector(".close")
const navList = document.querySelector(".nav-list")

menuBar.addEventListener("click", () => {
    navList.classList.add("show-menu")
})

closeMenu.addEventListener("click", () => {
    navList.classList.remove("show-menu")
})


const carouselBtns = document.querySelectorAll(".ctrl")
const carousel = document.querySelector(".carousel-row");

carouselBtns[0].addEventListener("click", () => {
    carouselBtns.forEach((btn) => {
        btn.classList.remove("active")
    })
    carousel.style.transform = "translateX(0px)"
    carouselBtns[0].classList.add("active")
})

carouselBtns[1].addEventListener("click", () => {
    carouselBtns.forEach((btn) => {
        btn.classList.remove("active")
    })
    carousel.style.transform = "translateX(-25%)"
    carouselBtns[1].classList.add("active")
})

carouselBtns[2].addEventListener("click", () => {
    carouselBtns.forEach((btn) => {
        btn.classList.remove("active")
    })
    carousel.style.transform = "translateX(-50%)"
    carouselBtns[2].classList.add("active")
    
})

carouselBtns[3].addEventListener("click", () => {
    carouselBtns.forEach((btn) => {
        btn.classList.remove("active")
    })
    carousel.style.transform = "translateX(-70%)"
    carouselBtns[3].classList.add("active")
})


// document.body.addEventListener("click", () => {
//     document.querySelector(".carousel-row").style.transform = "translateX(-400px)"
// })