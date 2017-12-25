var div = document.querySelectorAll('.gallery__item');
var gallery = document.querySelector('.gallery');
console.log(gallery);

gallery.addEventListener('click', carouselShow);

function carouselShow(event) {
	var target = event.target;
	target.classList.add('clicking');
	// console.log(target);
	$("#carousel").waterwheelCarousel({
    	orientation: 'vertical',
    	separation:  100,
    	keyboardNav:  true
    });
	gallery.removeEventListener('click', carouselShow);
}


    

       