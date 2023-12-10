window.onload = function(){
	// Smooth scroll function
    function scrollToElement(elementId) {
		const hamburgerBtn = document.querySelector('.hamburger-btn');
		hamburgerBtn.classList.remove('open');
		var div1 = document.querySelector('.main-nav');
		
		div1.style.display = 'none';
		const targetElement = document.getElementById(elementId);
		var headerHeight = document.querySelector('header').offsetHeight;

		var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

		//   element.scrollIntoView({ behavior: 'smooth' });
		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth'
		});
    }

    // Attach click event listeners
    document.querySelectorAll('a[href*="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToElement(targetId);
      });
    });
	
	window.onscroll = function () {
        var header = document.querySelector('header');
        var sections = document.querySelectorAll('section');

        sections.forEach(section => {
            var sectionTop = section.offsetTop - header.offsetHeight;
            var sectionBottom = sectionTop + section.offsetHeight;
			console.log(section.id)
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                var targetLink = document.querySelector('.main-nav a[href="#' + section.id + '"]');
                targetLink.classList.add('active');
            } else {
                var targetLink = document.querySelector('.main-nav a[href="#' + section.id + '"]');
                targetLink.classList.remove('active');
            }
        });
    };
	function toggleHamburger() {
		const hamburgerBtn = document.querySelector('.hamburger-btn');
		hamburgerBtn.classList.toggle('open');
		var div1 = document.querySelector('.main-nav');
		if (div1.style.display == 'block') {
			div1.style.display = 'none'
		} else {
			div1.style.display = 'block'
		}
	}
	document.querySelector('.hamburger-btn').addEventListener('click', function(){
		toggleHamburger();
	});
	// Add class to header on scroll
    window.onscroll = function () {
        var header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
}