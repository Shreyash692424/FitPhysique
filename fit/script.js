document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fix: Handle service box click without setting a bright yellow background
    document.querySelectorAll('.service-box').forEach(box => {
        box.addEventListener('click', function () {
            // Remove "active" class from all service boxes
            document.querySelectorAll('.service-box').forEach(b => b.classList.remove('active'));

            // Add "active" class to the clicked one
            this.classList.add('active');
        });
    });

    // Dark/Light mode toggle
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Dark/Light Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px';
    toggleButton.style.backgroundColor = '#ffd700';
    toggleButton.style.color = '#000';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
            backToTopButton.style.opacity = "1";
        } else {
            backToTopButton.style.opacity = "0";
            setTimeout(() => backToTopButton.style.display = "none", 300);
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Sticky navigation bar
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('sticky-nav');
        } else {
            nav.classList.remove('sticky-nav');
        }
    });

    // Ensure hero section covers the whole first page
    document.querySelector(".hero").style.height = "100vh";
});
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmiResult = document.getElementById('bmi-result');
    const bmiMeter = document.querySelector('.bmi-meter');
    const bmiText = document.querySelector('.bmi-result-text');

    if (!weight || !height || weight <= 0 || height <= 0) {
        bmiResult.innerHTML = "Please enter valid weight and height!";
        bmiMeter.style.width = "0%";
        bmiMeter.style.background = "#ffd700";
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let status = "";
    let widthPercentage = 0;
    let color = "#ffd700"; // Default Gold

    if (bmi < 18.5) {
        status = "Underweight";
        widthPercentage = 25;
        color = "#3498db"; // Blue
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal Weight";
        widthPercentage = 50;
        color = "#2ecc71"; // Green
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
        widthPercentage = 75;
        color = "#f1c40f"; // Yellow
    } else {
        status = "Obese";
        widthPercentage = 100;
        color = "#e74c3c"; // Red
    }

    bmiResult.innerHTML = `Your BMI is <strong>${bmi}</strong> - <span style="color:${color};">${status}</span>`;

    // Debugging check
    console.log("Meter:", bmiMeter, "Width:", widthPercentage);

    // Ensure the BMI meter exists before updating it
    if (bmiMeter) {
        bmiMeter.style.width = widthPercentage + "%";
        bmiMeter.style.background = color;
    }
}
document.querySelector('.bmi-meter').style.width = '60%'; // Example
