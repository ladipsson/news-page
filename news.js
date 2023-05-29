const toggleBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-element');
toggleBtn.addEventListener('click', ()=> {
    navBar.classList.toggle('active');
})