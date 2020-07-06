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

// $(document).ready( function() {
//     let anchors = $('.header-menu__links');
//     for (anchor of anchors) {
//         anchor.click (function(event) {
//             event.preventDefault();
//             let anchorId = anchor.attr('href');
//             console.log (anchorId);
//             let top = anchorId.offset().top;
//             anchorId.animate({
//                 scrollTop: top
//             }, 5000)
//         })  
//     }
    
// })
$(document).ready( function() {
    hed = $('header').height();
    console.log (hed);
    $('.header-menu__links').click (function(e) {
        e.preventDefault();
        let anchorId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchorId).offset().top-$('header').height()
        }, 500)
    })
})