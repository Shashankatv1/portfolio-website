// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of a simple interaction: Change background color of Home section on click
document.getElementById("home").addEventListener("click", function() {
    this.style.backgroundColor = "#45a049"; // Change color when clicked
});
