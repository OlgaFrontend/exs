window.onscroll = function() {
	  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  var three = document.querySelector('.three');
	  var main = document.querySelector('main');
	  console.log(main.scrollHeight);
		
	  if (scrolled >= 500) {
	  	three.classList.add('relative');
	  } else {
	  	three.classList.remove('relative');
	  }
};





console.log('innerHeight: ' + window.innerHeight);
console.log('scrollY: ' + window.scrollY);
console.log('pageYOffset: ' + window.pageYOffset);
console.log('screenY: ' + window.screenY);
console.log('screen.height: ' + window.screen.height);
console.log('scrollTop: ' + window.scrollTop);
