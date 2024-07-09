let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem= document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
document.querySelectorAll('.home .home-parallax').forEach(elm => {
    elm.style.backgroundPositionY = (window.pageYOffset * 0.5) + 'px';
});

document.querySelectorAll('.home .home-parallax').forEach(elm => {
    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        elm.style.backgroundPositionY = (scroll * 0.5) + 'px';
    });
});

// JavaScript to toggle .btn-clicked class on button click
document.querySelectorAll('.menu .box-container .box .btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('btn-clicked');
    });
});