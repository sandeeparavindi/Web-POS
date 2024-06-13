//menu button click and automatically hide
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.querySelector('.navbar-nav');
    var navLinks = document.querySelectorAll('.navbar-nav a'); // Select all nav links

    navbarToggler.addEventListener('click', function () {
        navbarNav.classList.toggle('active');
    });

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            navbarNav.classList.remove('active'); // Hide the navigation bar
        });
    });
});

// Get the canvas element
const ctx = document.getElementById('lineChart').getContext('2d');

// Define data
const data = {
    labels: ['January', 'March', 'May', 'July', 'September','November'],
    datasets: [{
        label: 'Revenue',
        data: [50000, 75000, 88000, 65000, 121000,96000],
        backgroundColor: 'rgba(78,102,221,0.5)',
        borderColor: '#4e87dd',
        borderWidth: 3
    }]
};

// Define chart options
const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Create the line chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
myChart.update();