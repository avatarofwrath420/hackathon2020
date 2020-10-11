/*function clicked() {
    console.log("Clicked this button.");
}

(function() {
    
    var windowH = $(window).height(),
        documElem = $(document),
        slideDownPage = $('.slide-down-page'),
        btns = $('.btns'),
        animSpeed = 500;
    
    slideDownPage.css({
        height: windowH + 'px',
        top: -windowH +'px'
    });
    
    btns.on('click', function(e) {
        if ( $(this).hasClass('open') ) {
            slideDownPage.animate({'top': 0}, animSpeed);
            
        }    
    });
    
    
})();
*/

var curCast = 0;

function castZero() {
    curCast = 0;
}

function castOne() {
    curCast = 1;
}

function castTwo() {
    curCast = 2;
}

function castThree() {
    curCast = 3;
}

function castFour() {
    curCast = 4;
}

function castFive() {
    curCast = 5;
}

function castSix() {
    curCast = 6;
}

function castSeven() {
    curCast = 7;
}

function checkCast() {
    if (curCast === 1) {
        $('#first').fadeTo("fast", 0.5);
    }
    else {
        $('#first').fadeTo("fast", 0);
    }

}


// Observation Observer
/*
const sectionOne = document.querySelector('.section1');
const options = {};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
       console.log(entry); 
    });
}, options);


observer.observe(sectionOne);
*/
