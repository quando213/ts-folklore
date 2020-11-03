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