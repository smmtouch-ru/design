
// sticky menu(scroll)
(function() {
	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var headerNavPanel = document.getElementsByClassName('header_nav_panel')[0];
		// document.getElementById('showScroll').innerHTML = scrolled + 'px';
		
		if(scrolled > 0) {
			headerNavPanel.style.top = -300 + 'px';
			headerNavPanel.classList.add('active');
		}
		if(scrolled > 100) {
			headerNavPanel.style.top = 0;
		}
		if(scrolled == 0) {
			setTimeout(function() {
				headerNavPanel.style.top = 0;
				headerNavPanel.classList.remove('active');
			}, 200);
		}
	}
})();


// slider
(function() {
	var prev = document.getElementsByClassName('prev')[0];
	var next = document.getElementsByClassName('next')[0];
	var sliderBox = document.getElementsByClassName('slider_box')[0];
	var left = 0;
	var item = document.getElementsByClassName('item');
	var sliderBoxWidth = item.length * 100;
	
	sliderBox.style.width = sliderBoxWidth + "%";
	for(var i = 0; i < item.length; i++) {
		item[i].style.width = "calc(100%/" + item.length + " + 0.01px)";
	}
	
	next.onclick = function() {
		left += 100;
		if(left >= sliderBoxWidth) left = 0;
		sliderBox.style.left = -left + '%';
		console.log(left);
	}

	prev.onclick = function() {
		left -= 100;
		if(left <= -100) left = sliderBoxWidth - 100;
		sliderBox.style.left = -left + '%';
		console.log(left);
	}
})();

/* open/close menu */
(function() { 
	var openMenu = document.getElementsByClassName('open_mobile_menu')[0];
	var mobileMenu = document.getElementsByClassName('mobile_menu_wrap')[0];
	var closeMobileMenu = document.getElementsByClassName('close_mobile_menu')[0];
	var mobileMenuLayer = document.getElementsByClassName('mobile_menu_layer')[0];
	var html = document.getElementsByTagName('html')[0];

	openMenu.onclick = function() {
		mobileMenu.style.display = 'block';
		html.style.overflow = 'hidden';
		setTimeout(function() {
			mobileMenu.classList.add('active');
		}, 200);
	};
	
	mobileMenuLayer.onclick = function() {
		removeClass();
	};

	closeMobileMenu.onclick = function() {
		removeClass();
	};
	
	function removeClass() {
		html.style.overflow = 'auto';
		mobileMenu.classList.remove('active');
		setTimeout(function() {
			mobileMenu.style.display = 'none';
		}, 200);
	}
	
})();


// dropdown mobile menu
(function() {
	var mobileSubcategory = document.getElementsByClassName('mobile_subcategory');

	for(var i = 0; i < mobileSubcategory.length; i++) {
		mobileSubcategory[i].onclick = function() {
			this.classList.toggle('active');
		}
	}
})();






































