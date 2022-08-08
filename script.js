const mobileMenu = document.querySelector('.mobile-menu')
const navList = document.querySelector('.nav-list')

function toggleClass() {
    mobileMenu.classList.toggle('active')
    navList.classList.toggle('active')
}
mobileMenu.addEventListener('click', toggleClass)
