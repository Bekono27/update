// Import your foodItem data from 'fooditem.js'
import { foodItem } from './fooditem.js';

function displayItems() {
    // Your existing code for displaying food items
}

// Your existing code for handling cart and items

// Add the 'selectTaste' function here

// Add the event listeners and cartToggle function here

window.onresize = window.onload = function () {
    // Your existing code for handling window resize
};

function addEvents() {
    // Your existing code for adding event listeners
}

// Add the 'addAddress' function here

displayItems();
selectTaste();
totalAmount();
addEvents();
// Add this function to your existing JavaScript code
function checkoutItems() {
    var checkoutTable = document.getElementById('checkout-items');
    checkoutTable.innerHTML = '';

    cartData.forEach(item => {
        var tableRow = document.createElement('tr');

        var itemCell = document.createElement('td');
        itemCell.innerText = item.name;

        var quantityCell = document.createElement('td');
        quantityCell.innerText = item.quantity;

        var priceCell = document.createElement('td');
        priceCell.innerText = '$' + (item.price * item.quantity).toFixed(2);

        tableRow.appendChild(itemCell);
        tableRow.appendChild(quantityCell);
        tableRow.appendChild(priceCell);

        checkoutTable.appendChild(tableRow);
    });
}

// Call checkoutItems() and totalAmount() to update the checkout page
checkoutItems();
totalAmount();
// Add this code to your existing JavaScript file

document.getElementById('checkout-button').addEventListener('click', goToCheckout);

function goToCheckout() {
    // Redirect to the checkout page (checkout.html)
    window.location.href = 'checkout.html';
}
// Add this code to your existing JavaScript file

document.addEventListener("DOMContentLoaded", function () {
    // Sample cart data, you should replace this with your actual cart data
    var cartData = [
        { name: "Burger Combo", price: 7.99, quantity: 1 },
        { name: "Pasta Alfredo", price: 8.99, quantity: 1 },
    ];

    function updateCart() {
        var checkoutItems = document.getElementById("checkout-items");
        var totalItem = document.getElementById("total-item");
        var totalPrice = document.getElementById("total-price");

        // Clear existing items
        checkoutItems.innerHTML = "";

        var totalPriceValue = 0;

        // Add items to the checkout page
        cartData.forEach(function (item) {
            var row = checkoutItems.insertRow();
            var nameCell = row.insertCell(0);
            var quantityCell = row.insertCell(1);
            var priceCell = row.insertCell(2);

            nameCell.innerHTML = item.name;
            quantityCell.innerHTML = item.quantity;
            priceCell.innerHTML = "$" + (item.price * item.quantity).toFixed(2);

            totalPriceValue += item.price * item.quantity;
        });

        // Update total items and total price
        totalItem.textContent = "Total Items: " + cartData.length;
        totalPrice.textContent = "Total Price: $" + totalPriceValue.toFixed(2);
    }

    // Call the updateCart function to display cart data on page load
    updateCart();

    var placeOrderButton = document.getElementById("place-order");

    placeOrderButton.addEventListener("click", function () {
        if (cartData.length === 0) {
            alert("Your cart is empty. Please add items before placing an order.");
        } else {
            alert("Your order has been placed successfully!");
            // You can add additional order processing logic here

            // Clear the cart
            cartData = [];
            updateCart();
        }
    });
});
// Add this code to your existing JavaScript file

document.addEventListener("DOMContentLoaded", function () {
    // Sample cart data, you should replace this with your actual cart data
    var cartData = [
        { name: "Burger Combo", price: 7.99, quantity: 1 },
        { name: "Pasta Alfredo", price: 8.99, quantity: 1 },
    ];

    function updateCart() {
        var checkoutItems = document.getElementById("checkout-items");
        var totalItem = document.getElementById("total-item");
        var totalPrice = document.getElementById("total-price");

        // Clear existing items
        checkoutItems.innerHTML = "";

        var totalPriceValue = 0;

        // Add items to the checkout page
        cartData.forEach(function (item) {
            var row = checkoutItems.insertRow();
            var nameCell = row.insertCell(0);
            var quantityCell = row.insertCell(1);
            var priceCell = row.insertCell(2);

            nameCell.innerHTML = item.name;
            quantityCell.innerHTML = item.quantity;
            priceCell.innerHTML = "$" + (item.price * item.quantity).toFixed(2);

            totalPriceValue += item.price * item.quantity;
        });

        // Update total items and total price
        totalItem.textContent = "Total Items: " + cartData.length;
        totalPrice.textContent = "Total Price: $" + totalPriceValue.toFixed(2);
    }

    // Call the updateCart function to display cart data on page load
    updateCart();

    var placeOrderButton = document.getElementById("place-order");

    placeOrderButton.addEventListener("click", function () {
        if (cartData.length === 0) {
            alert("Your cart is empty. Please add items before placing an order.");
        } else {
            // Redirect to the checkout page when placing the order
            window.location.href = "checkout.html";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Sample cart data, you should replace this with your actual cart data
    var cartData = [
        { name: "Burger Combo", price: 7.99, quantity: 1 },
        { name: "Pasta Alfredo", price: 8.99, quantity: 1 },
    ];

    function updateCart() {
        // Existing code to display cart items and calculate the total
        // ...

        // Update the checkout page's total item and total price
        totalItem.textContent = "Total Items: " + cartData.length;
        totalPrice.textContent = "Total Price: $" + totalPriceValue.toFixed(2);
    }

    // Call the updateCart function to display cart data on page load
    updateCart();

    var placeOrderButton = document.getElementById("place-order");
    var placeOrderLink = document.getElementById("place-order-link");

    placeOrderButton.addEventListener("click", function () {
        if (cartData.length === 0) {
            alert("Your cart is empty. Please add items before placing an order.");
        } else {
            // Hide the button and show the anchor link when placing the order
            placeOrderButton.style.display = "none";
            placeOrderLink.style.display = "block";
        }
    });
});
// Function to redirect after successful registration
function redirectToWelcome() {
    window.location.href = "welcome.html"; // Replace "welcome.html" with your desired page.
}
