let slideIndex = 1;
showSlides(slideIndex);


function nextSlide() {
	stopVideo();
	slideIndex++;
	showSlides(slideIndex);
}

function previousSlide() {
	stopVideo();
	slideIndex--;
	showSlides(slideIndex);
}

function stopVideo() {
	var currentVideoIndex = "#video-content-" + slideIndex;
	$(currentVideoIndex)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
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
    let elem = document.activeElement.id;
    if (!elem.indexOf('video-content')) {
        let i = elem.substr(14);
        document.getElementById('thumb-' + i).style.display = 'none';
    }
}, 100);