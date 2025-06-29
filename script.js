// Hamburger Navigation Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    if (hamburger.getAttribute('aria-expanded') === 'true') {
        hamburger.setAttribute('aria-expanded', 'false');
    } else {
        hamburger.setAttribute('aria-expanded', 'true');
    }
});

// Update Navbar Highlight

const sections = document.querySelectorAll('section');
const navigationLinks = document.querySelectorAll('.navigation-link');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; /* Rastojanie od pocetokot na dok do pocetokot na sectionot */
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) { /* /3 za da e po smooth transitionot */
            currentSection = section.getAttribute('id');
        }
    });

    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 5) {
        currentSection = 'contact';
    }

    navigationLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    })
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

