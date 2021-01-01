/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
/**
 * Define Global Variables
 *
*/
let section = document.querySelectorAll('section');
let Nav = document.querySelector('nav');
const Unlist = document.querySelector('#navbar__list');
let scrollpos = window.scrollY;
let header = document.querySelector('header');
let isScrolling;
let toTop = document.querySelector('#toTop');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for(section of sections){
      let list_item = document.createElement('li');
      list_item.innerHTML = `<a href="#">${section.getAttribute("data-nav")}</a>`;
      Unlist.appendChild(list_item);
    }

// Add class 'active' to section when near top of viewport
let list_items = document.querySelectorAll('#navbar__list li');

    window.addEventListener('scroll', function(){
        for(let i = 0; i < sections.length ; i++){
            scrollpos = window.scrollY;

            if(scrollpos >= sections[i].offsetTop * 0.7  && scrollpos <= sections[i].offsetTop + sections[i].offsetHeight*0.6){
                sections[i].classList.add("your-active-class");
                list_items[i].classList.add("active");
            }
            else {
                sections[i].classList.remove("your-active-class");
                list_items[i].classList.remove("active");
            }
        }
    });

// Scroll to anchor ID using scrollTO event
/*let links = document.querySelectorAll('#navbar__list li a');

        for(let i = 0; i < links.length ; i++){
            links[i].addEventListener('click', (e) => {
                e.preventDefault();
                let coo = sections[i].getBoundingClientRect().top + window.scrollY * 0.9;
                window.scrollTo({
                    top: coo,
                    behavior: 'smooth'
                });
            });
        }
 window.addEventListener('scroll', function (e) {

        header.style.opacity = 1;
        window.clearTimeout( isScrolling );

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {
            header.style.opacity = 0;
        }, 2000);

    });


    // Show toTop button on scroll

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }
        }

        // Click event on toTop button
        toTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
