document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("register-button").addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Here, you can send the registration data to your server or process it as needed.
        // You can include code to handle registration using server-side technologies (e.g., PHP or Node.js).

        // For now, let's display an alert message to indicate that registration is successful.
        alert("Registration successful!");
    });
});
            // Get the file input and image preview elements
const fileInput = document.getElementById("student-id-picture");
const imagePreview = document.getElementById("image-preview");

// Listen for changes in the file input
fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];

    if (file) {
        // Use FileReader to read the selected file
        const reader = new FileReader();
        reader.onload = function (e) {
            // Set the image source to the loaded data
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block"; // Show the image
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = "";
        imagePreview.style.display = "none";
    }
});
