// let anchors = document.querySelectorAll('.header-menu__links');

// for (anchor of anchors) {
//     anchor.addEventListener('click', function (i) {
//         i.preventDefault();
//         anchorId = this.getAttribute('href');
//         document.querySelector(anchorId).scrollIntoView({
//             behavior:'smooth', block: 'start'
//         })
//     })
// }

$(document).ready( function() {
    $('.header-menu__links').click (function(e) {
        e.preventDefault();
        let anchorId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchorId).offset().top-$('header').height()
        }, 500)
    })
})