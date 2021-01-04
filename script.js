const loaderContainerEl = document.querySelector('.loaderContainer');

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle ( 'sticky', window.scrollY>0 );
});
window.addEventListener('load',() => {
    loaderContainerEl.classList.add('hide');
})

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}


$(document).ready(function() {
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itembox').show('1000');
        }
        else {
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.' +value).show('1000');
        }
    });

    $('.list').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

});