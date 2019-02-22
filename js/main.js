


window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if(window.scrollY >= 93){
        document.getElementById('navbar').style.backgroundColor = "#33383c";
    }
    else{
        document.getElementById('navbar').style.backgroundColor = "transparent";
    }
});
///////////////


   ///////////////////////////////////////////////////////
// // initialize popovers
// $(function () {
//     $('[data-toggle="popover"]').popover()
//   })
/////////////////////////////////////////////////////////////////////

document.getElementById('cart').addEventListener('click', function(){
    var popup = document.getElementById('popup');
    // if(popup.style.display == 'none'){
    //  popup.style.display = 'block';
    // }else{
    //     popup.style.display = 'none';
    // }
    (popup.style.display == 'none') ? popup.style.display = 'block' : popup.style.display = 'none';
   
});


document.getElementById("fa_bars").addEventListener('click', function(){
    var nav = document.getElementById('navbar');
    if(nav.style.backgroundColor != '#33383C'){
        nav.style.backgroundColor = "#33383c";
    }else{
        nav.style.backgroundColor = 'transparent';
    }
    
});


// smooth scroll
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// scroll reveal
window.sr = ScrollReveal();

sr.reveal('.card',{
    duration: 2000,
    origin: 'bottom',
    viewFactor:0.5,
    distance: '200px'
});
sr.reveal('.explore-btn', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom',
});

/////////////////////////////////////////////////////////////

///////////////////////////////
// my modal //
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})