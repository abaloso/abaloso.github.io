const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = '';

navLinkEls.forEach(navLinkEl => navLinkEl.classList.remove('active'));

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        navLinkEls.forEach(navLinkEl => navLinkEl.classList.remove('active'));
        currentSection = '';
        return; 
    }

    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - 500)) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            navLinkEls.forEach(link => link.classList.remove('active')); 
            navLinkEl.classList.add('active');
        }
    });
});
