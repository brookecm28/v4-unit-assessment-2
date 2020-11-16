// console.log("I am in here!")

const formBtn = document.getElementById('close-form')
console.log(formBtn)

const form = document.getElementsByClassName('form')[0]
console.log(form)

function toggler(e) {
    e.preventDefault()
    form.classList.toggle('hide')
    if (formBtn.innerText === 'X') {
        formBtn.innerText = '+'
        console.log('toggled')
    } else {
        formBtn.innerText = 'X'
        console.log('untoggled')
    }
}

formBtn.addEventListener('click', toggler)

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const formContainer = document.getElementsByClassName('form-container')[0]
let emailList = []

function validateForm(e) {
e.preventDefault()
    if (nameInput.value === "" && emailInput.value === "") {
        nameInput.style.border='solid 2px red'
        emailInput.style.border='solid 2px red'
        window.alert('You must enter a name and an email address to subscribe!')
    } 
    else if (emailInput.value === "") {
        emailInput.style.border='solid 2px red'
        alert('You must enter an email to subscribe!')
    } else if (nameInput.value === "") {
        nameInput.style.border='solid 2px red'
        alert('You must enter a name to subscribe!')
    } else {
        emailList.push({
            name: nameInput.value,
            email: emailInput.value
        })
        console.log(emailList)
        displayThankYou()
    }
}

form.addEventListener('submit', validateForm)

function displayThankYou () {
    formContainer.innerText = 'Thank you for subscribing!'
    console.log('thanks, yo')
}

function changeName () {
    nameInput.style.border='none'
}

function changeEmail () {
    emailInput.style.border='none'
}
nameInput.addEventListener('change', changeName())
emailInput.addEventListener('change', changeEmail())

const cart = document.createElement('div')
const main = document.getElementsByTagName('main')[0]
let cartItems = 0

function addToCart () {
    // e.preventDefault()
    if (cartItems === 0) {
        cartItems = 1
        cart.setAttribute('class','cart-display')
        cart.innerText='Your Cart: 1 Item'
        console.log(cartItems)
        main.appendChild(cart)
        
    } else {
        cartItems += 1
        cart.innerText=`Your Cart: ${cartItems} Items`
        console.log(cartItems)
    }
    return cartItems
}