// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header'); // cari elemen bernama header
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        // Back to Top
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Event on hambuger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// handling dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    //darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark'); //use ternary
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// move toggle darkmode as mode

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    darkToggle.checked = true;
} else {
    document.documentElement.classList.remove('dark');
    darkToggle.checked = false;
}