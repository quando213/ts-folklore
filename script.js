<!-- Function to open and close sidebar -->
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("fill").style.zIndex = "10";
    document.getElementById("main").style.transform = "translateX(250px)";
    document.getElementById("main").style.transition = "transform 0.5s";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("fill").style.zIndex = "-5";
    document.getElementById("main").style.removeProperty('transform');
}

<!-- Function for Videos section slideshow -->
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

<!-- Function to hide the thumbnail when click on iframe -->
setInterval(function () {
    var elem = document.activeElement.id;
    if (!elem.indexOf('video-content')) {
        var i = elem.substr(14);
        document.getElementById('thumb-' + i).style.display = 'none';
    }
}, 100);