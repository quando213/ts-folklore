// Functions to open and close sidebar

function openNav() {
    document.getElementById("menu-icon").classList.toggle("change");
    document.getElementsByTagName("nav")[0].style.width = "250px";
    document.getElementById("menu").style.opacity = "1";
    document.getElementById("social-top").style.opacity = "1";
    document.getElementById("fill").style.zIndex = "10";
    document.getElementById("main").style.transform = "translateX(250px)";
    document.getElementById("main").style.transition = "transform 0.5s";
}

function closeNav() {
    document.getElementById("menu-icon").classList.toggle("change");
    document.getElementsByTagName("nav")[0].style.width = "0";
    document.getElementById("menu").style.opacity = "0";
    document.getElementById("social-top").style.opacity = "0";
    document.getElementById("fill").style.zIndex = "-5";
    document.getElementById("main").style.removeProperty('transform');
}

// Function to close sticky Sign Up bar
function closeSignUp() {
    document.getElementById("signup").style.height = "0";
    document.getElementById("signup-mini").style.visibility = "visible";
}

// Function to open full Sign Up page
function openFullSignUp() {
    document.getElementById("signup-full").style.display = "block";
}

function closeFullSignUp() {
    document.getElementById("signup-full").style.display = "none";
}