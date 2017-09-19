$(document).ready(function(){
    orientationchange();
    if (Modernizr.video.webm) {
        var filejson =  'js/files.json',
    } else {
        var filejson =  'js/files-mp4.json',
    };
    $.html5Loader({
        filesToLoad:    filejson, // this could be a JSON or simply a javascript object
        onBeforeLoad:       function () {},
        onComplete:         function () {
            setTimeout(function(){
                // $('#contIMGLoad').animate({top:"41.5%"},500,function(){
                    // setTimeout(function(){
                    //     $('#contentMenu').css({display:"block"});
                    //     $('#contentLoader').animate({opacity:0},500,function(){
                    //         setTimeout(function(){
                    //             $('#contentLoader').css({display:"none"});
                    //         },50);

                    //     });
                    //     setClickMenu();
                    // },1000);
                // });
                $('#pre_home').animate({opacity:"0"},500, "easeOutQuad");
                setTimeout(function(){
                    $('#pre_home').css({display:"none"});
                    animHomeAfterLoading();
                },600);
            },2000);

        },
        onElementLoaded:    function ( obj, elm) {
            console.log(obj);
            console.log(elm);
        },
        onUpdate:           function ( percentage ) {
            var opacityNew = (percentage) +"%";
            $('#titre_pre_home_load').css({opacity:opacityNew});
            // $('#contTitreLoader').css({width:widthNew});
            console.log('percentage :'+percentage);
        }
    });
})

window.onorientationchange = function() {
  orientationchange();
};

function orientationchange() {
    var orientation = "unknown";
    switch (window.orientation) {
        case 0:
            orientation = "portrait";
            $("#main").css({display:"block"});
            $("#paysage").css({display:"none"});
            // animation();
            break;
        case 90:
            orientation = "landscape counter clockwise";
            $("#main").css({display:"none"});
            $("#paysage").css({display:"block"});
            // animation_paysage();
            break;
        case -90:
            orientation = "landscape clockwise";
            $("#main").css({display:"none"});
            $("#paysage").css({display:"block"});
            // animation_paysage();
            break;
        case 180:
            orientation = "upside down";
            $("#main").css({display:"block"});
            $("#paysage").css({display:"none"});
            // animation();
            break;
    }
};


var w_height = $(window).height();

// var imput_click = document.getElementById("montant");
// imput_click.addEventListener("focus", myFocusFunction, true);
// imput_click.addEventListener("blur", myBlurFunction, true);

// function myFocusFunction() {
//     // alert('tap1');
//     $('#animaux').css({'height':w_height+'px'});
//     // $('#montant').val('0');
//     // $('#animaux').css({top:'-50%'});
// }

// function myBlurFunction() {
//     // alert('tap2');
//     $('#animaux').css({'height':'100%'}, 'slow');
//     // $('#animaux').css({top:'0%'});
// }

$(document).ready(function(){
  var _originalSize = $(window).width() + $(window).height()
  $(window).resize(function(){
    if($(window).width() + $(window).height() != _originalSize){
      console.log("keyboard show up");
      $('#animaux').css({'height':w_height+'px', top:'-52%'});
      // $('#animaux').css({top:'-50%'});
    }else{
      console.log("keyboard closed");
      $('#animaux').css({'height':'100%', top:'0%'}, 'slow');
      // $('#animaux').css({top:'0%'});
    }
  });
});


// ANIMATION PRE-HOME //
setTimeout(function(){
        $('#logo_spa_pre_home').animate({top:"2%",opacity:"1"},600, "easeOutQuad");
},100);
setTimeout(function(){
        $('#titre_pre_home').animate({opacity:"1"},800, "easeOutQuad");
},300);
// setTimeout(function(){
//         $('#titre_pre_home_load').animate({opacity:"1"},3000, "easeOutQuad");
// },800);
// $('#logo_spa_pre_home').on('click',function(){
//     $('#pre_home').animate({opacity:"0"},500, "easeOutQuad");
//     setTimeout(function(){
//         $('#pre_home').css({display:"none"});
//         animHomeAfterLoading();
//     },600);
// });
// ANIMATION PRE-HOME //



// ANIMATION HOME //
function animHomeAfterLoading(){
    $('#home').css({display:"block"});
    $('#header_title_home').animate({opacity:"1"},1500, "easeOutQuad");
    $('#logo_spa_home').animate({opacity:"1"},800, "easeOutQuad");
    setTimeout(function(){
        $('#zone_animal_1').animate({translateX:"3%",opacity:"1"},800, "easeOutQuad");
    },300);
    setTimeout(function(){
        $('#zone_animal_2').animate({translateX:"3%",opacity:"1"},800, "easeOutQuad");
    },600);
    setTimeout(function(){
        $('#zone_titre_home').animate({translateX:"3%",opacity:"1"},800, "easeOutQuad");
    },900);
    setTimeout(function(){
        $('#zone_animal_3').animate({translateX:"3%",opacity:"1"},800, "easeOutQuad");
    },1200);
    setTimeout(function(){
        $('#zone_animal_4').animate({translateX:"3%",opacity:"1"},800, "easeOutQuad");
    },1500);
}



// ANIMATION HOME //



$('#liste_btn').on('click',function(){
    $('#liste_content').animate({top:"16%",opacity:"1",zIndex:"20"},500, "easeOutQuad");
});
$('#liste_close_img').on('click',function(){
    $('#liste_content').animate({top:"10%",opacity:"0",zIndex:"0"},500, "easeOutQuad");
});

$('.itemBTN').on('click',function(){
    $('.itemBTN').removeClass('selectPrice');
    $(this).addClass('selectPrice');

    $('#cta').addClass('activateCTA');

    if($(this).is('#otherPrice')){
        $('#titreForm').css({display:"none"});
        $('#form').css({display:"block"});
    }else{
        $('#titreForm').css({display:"block"});
        $('#form').css({display:"none"});
        $('#montant').val('');
    }
});

var section_chien = null;
var section_lapin = null;
var section_chat = null;
var section_cheval = null;

section_chien = 1;

$('#firstPrice').on('click',function(){
    if (section_chien === 1) {
        $('#vid_1_chien').css({display:"block"});
        $('#vid_0_chien,#vid_2_chien,#vid_3_chien').css({display:"none"});
    }
    if (section_lapin === 1) {
        $('#vid_1_lapin').css({display:"block"});
        $('#vid_0_lapin,#vid_2_lapin,#vid_3_lapin').css({display:"none"});
    }
    if (section_chat === 1) {
        $('#vid_1_chat').css({display:"block"});
        $('#vid_0_chat,#vid_2_chat,#vid_3_chat').css({display:"none"});
    }
    if (section_cheval === 1) {
        $('#vid_1_cheval').css({display:"block"});
        $('#vid_0_cheval,#vid_2_cheval,#vid_3_cheval').css({display:"none"});
    }
});
$('#secondPrice').on('click',function(){
    if (section_chien === 1) {
        $('#vid_2_chien').css({display:"block"});
        $('#vid_0_chien,#vid_1_chien,#vid_3_chien').css({display:"none"});
    }
    if (section_lapin === 1) {
        $('#vid_2_lapin').css({display:"block"});
        $('#vid_0_lapin,#vid_1_lapin,#vid_3_lapin').css({display:"none"});
    }
    if (section_chat === 1) {
        $('#vid_2_chat').css({display:"block"});
        $('#vid_0_chat,#vid_1_chat,#vid_3_chat').css({display:"none"});
    }
    if (section_cheval === 1) {
        $('#vid_2_cheval').css({display:"block"});
        $('#vid_0_cheval,#vid_1_cheval,#vid_3_cheval').css({display:"none"});
    }
});
$('#thirdPrice,#otherPrice').on('click',function(){
    if (section_chien === 1) {
        $('#vid_3_chien').css({display:"block"});
        $('#vid_0_chien,#vid_1_chien,#vid_2_chien').css({display:"none"});
    }
    if (section_lapin === 1) {
        $('#vid_3_lapin').css({display:"block"});
        $('#vid_0_lapin,#vid_1_lapin,#vid_2_lapin').css({display:"none"});
    }
    if (section_chat === 1) {
        $('#vid_3_chat').css({display:"block"});
        $('#vid_0_chat,#vid_1_chat,#vid_2_chat').css({display:"none"});
    }
    if (section_cheval === 1) {
        $('#vid_3_cheval').css({display:"block"});
        $('#vid_0_cheval,#vid_1_cheval,#vid_2_cheval').css({display:"none"});
    }
});

// ACTIONS MENU CHIEN
function animBtnMenuChienOpen(){
    $('#btn_lapin').animate({marginRight:"19vw"},400, "easeOutQuad");
    $('#btn_chat').animate({marginRight:"36vw"},400, "easeOutQuad");
    $('#btn_cheval').animate({marginRight:"53vw"},400, "easeOutQuad");
    $('#btn_close_menu_chien').css({display:"block"});
}
$('#btn_menu_expand_chien').on('click',function(){
    animBtnMenuChienOpen();
});
function animBtnMenuChienClose(){
    $('#btn_lapin').animate({marginRight:"10vw"},400, "easeOutQuad");
    $('#btn_chat').animate({marginRight:"16vw"},400, "easeOutQuad");
    $('#btn_cheval').animate({marginRight:"22vw"},400, "easeOutQuad");
    $('#btn_close_menu_chien').css({display:"none"});
}
$('#btn_close_menu_chien').on('click',function(){
    animBtnMenuChienClose();
});

// ACTIONS MENU LAPIN
function animBtnMenuLapinOpen(){
    $('#btn_chien').animate({marginRight:"19vw"},400, "easeOutQuad");
    $('#btn_chat').animate({marginRight:"36vw"},400, "easeOutQuad");
    $('#btn_cheval').animate({marginRight:"53vw"},400, "easeOutQuad");
    $('#btn_close_menu_lapin').css({display:"block"});
}
$('#btn_menu_expand_lapin').on('click',function(){
    animBtnMenuLapinOpen();
});
function animBtnMenuLapinClose(){
    $('#btn_chien').animate({marginRight:"10vw"},400, "easeOutQuad");
    $('#btn_chat').animate({marginRight:"16vw"},400, "easeOutQuad");
    $('#btn_cheval').animate({marginRight:"22vw"},400, "easeOutQuad");
    $('#btn_close_menu_lapin').css({display:"none"});
}
$('#btn_close_menu_lapin').on('click',function(){
    animBtnMenuLapinClose();
});

// ACTIONS MENU CHAT
function animBtnMenuChatOpen(){
    $('#btn_chien').animate({marginRight:"19vw"},400, "easeOutQuad");
    $('#btn_lapin').animate({marginRight:"36vw"},400, "easeOutQuad");
    $('#btn_cheval').animate({marginRight:"53vw"},400, "easeOutQuad");
    $('#btn_close_menu_chat').css({display:"block"});
}
$('#btn_menu_expand_chat').on('click',function(){
    animBtnMenuChatOpen();
});
function animBtnMenuChatClose(){
    $('#btn_chien').animate({marginRight:"10vw"},400, "easeOutQuad");
    $('#btn_lapin').animate({marginRight:"16vw"},400, "easeOutQuad");
    $('#btn_cheval').animate({marginRight:"22vw"},400, "easeOutQuad");
    $('#btn_close_menu_chat').css({display:"none"});
}
$('#btn_close_menu_chat').on('click',function(){
    animBtnMenuChatClose();
});

// ACTIONS MENU CHEVAL
function animBtnMenuChevalOpen(){
    $('#btn_chien').animate({marginRight:"19vw"},400, "easeOutQuad");
    $('#btn_lapin').animate({marginRight:"36vw"},400, "easeOutQuad");
    $('#btn_chat').animate({marginRight:"53vw"},400, "easeOutQuad");
    $('#btn_close_menu_cheval').css({display:"block"});
}
$('#btn_menu_expand_cheval').on('click',function(){
    animBtnMenuChevalOpen();
});
function animBtnMenuChevalClose(){
    $('#btn_chien').animate({marginRight:"10vw"},400, "easeOutQuad");
    $('#btn_lapin').animate({marginRight:"16vw"},400, "easeOutQuad");
    $('#btn_chat').animate({marginRight:"22vw"},400, "easeOutQuad");
    $('#btn_close_menu_cheval').css({display:"none"});
}
$('#btn_close_menu_cheval').on('click',function(){
    animBtnMenuChevalClose();
});



function animBtnMenuCloseALL(){
    $('#btn_chien').animate({marginRight:"2vw"},400, "easeOutQuad");
    $('#btn_lapin').animate({marginRight:"2vw"},400, "easeOutQuad");
    $('#btn_chat').animate({marginRight:"2vw"},400, "easeOutQuad");
    $('#btn_cheval').animate({marginRight:"2vw"},400, "easeOutQuad");
    $('#btn_close_menu_chien,#btn_close_menu_lapin,#btn_close_menu_chat,#btn_close_menu_cheval').css({display:"none"});
}


// $('#btn_lapin').css("background-image", "url(img/btn_chien.png)");
// $("#vid_0").css({display:"block"}).attr('src','img/lapin_vid_0.gif');


////////////////////
// MENU BTN LAPIN //
////////////////////
$('#btn_lapin,#zone_animal_1').on('click',function(){
    animBtnMenuCloseALL();
    resetBouton();
    section_chien = 0;
    section_lapin = 1;
    section_chat = 0;
    section_cheval = 0;

    $('#animaux').css({display:"block"});

    document.getElementById('liste_title').innerHTML="la liste de pan-pan";
    document.getElementById('liste_title_img').innerHTML="liste de no&euml;l de pan-pan";
    $("#section_gifs_lapin").css({display:"block"});
    $("#section_gifs_chien,#section_gifs_chat,#section_gifs_cheval").css({display:"none"});
    $('#vid_1_lapin,#vid_2_lapin,#vid_3_lapin').css({display:"none"});
    $('#vid_0_lapin').css({display:"block"});
    $('.anim_vid').css({bottom:"-12%"});

    $('#btn_menu_expand_lapin').css({display:"block"});
    $('#btn_menu_expand_chien,#btn_menu_expand_chat,#btn_menu_expand_cheval').css({display:"none"});
    setTimeout(function(){
        $('#home').animate({opacity:"0"},400, "easeOutQuad");

        $('#btn_chien').animate({marginRight:"10vw"},400, "easeOutQuad");
        $('#btn_chat').animate({marginRight:"16vw"},400, "easeOutQuad");
        $('#btn_cheval').animate({marginRight:"22vw"},400, "easeOutQuad");
        $('#btn_lapin').animate({marginRight:"2vw"},400, "easeOutQuad");
    },500);
});



////////////////////
// MENU BTN CHIEN //
////////////////////
$('#btn_chien,#zone_animal_2').on('click',function(){
    animBtnMenuCloseALL();
    resetBouton();
    section_chien = 1;
    section_lapin = 0;
    section_chat = 0;
    section_cheval = 0;

    $('#animaux').css({display:"block"});

    document.getElementById('liste_title').innerHTML="la liste de milou";
    document.getElementById('liste_title_img').innerHTML="liste de no&euml;l de milou";
    $("#section_gifs_chien").css({display:"block"});
    $("#section_gifs_lapin,#section_gifs_chat,#section_gifs_cheval").css({display:"none"});
    $('#vid_1_chien,#vid_2_chien,#vid_3_chien').css({display:"none"});
    $('#vid_0_chien').css({display:"block"});
    $('.anim_vid').css({bottom:"-2%"});

    $('#btn_menu_expand_chien').css({display:"block"});
    $('#btn_menu_expand_lapin,#btn_menu_expand_chat,#btn_menu_expand_cheval').css({display:"none"});
    setTimeout(function(){
        $('#home').animate({opacity:"0"},400, "easeOutQuad");

        $('#btn_lapin').animate({marginRight:"10vw"},400, "easeOutQuad");
        $('#btn_chat').animate({marginRight:"16vw"},400, "easeOutQuad");
        $('#btn_cheval').animate({marginRight:"22vw"},400, "easeOutQuad");
        $('#btn_chien').animate({marginRight:"2vw"},400, "easeOutQuad");
    },500);
});



////////////////////
// MENU BTN CHAT //
////////////////////
$('#btn_chat,#zone_animal_3').on('click',function(){
    animBtnMenuCloseALL();
    resetBouton();
    section_chien = 0;
    section_lapin = 0;
    section_chat = 1;
    section_cheval = 0;

    $('#animaux').css({display:"block"});

    document.getElementById('liste_title').innerHTML="la liste d'atlas'";
    document.getElementById('liste_title_img').innerHTML="liste de no&euml;l d'atlas";
    $("#section_gifs_chat").css({display:"block"});
    $("#section_gifs_lapin,#section_gifs_chien,#section_gifs_cheval").css({display:"none"});
    $('#vid_1_chat,#vid_2_chat,#vid_3_chat').css({display:"none"});
    $('#vid_0_chat').css({display:"block"});
    $('.anim_vid').css({bottom:"-12%"});

    $('#btn_menu_expand_chat').css({display:"block"});
    $('#btn_menu_expand_lapin,#btn_menu_expand_chien,#btn_menu_expand_cheval').css({display:"none"});
    setTimeout(function(){
        $('#home').animate({opacity:"0"},400, "easeOutQuad");

        $('#btn_chien').animate({marginRight:"10vw"},400, "easeOutQuad");
        $('#btn_lapin').animate({marginRight:"16vw"},400, "easeOutQuad");
        $('#btn_cheval').animate({marginRight:"22vw"},400, "easeOutQuad");
        $('#btn_chat').animate({marginRight:"2vw"},400, "easeOutQuad");
    },500);
});


////////////////////
// MENU BTN CHEVAL //
////////////////////
$('#btn_cheval,#zone_animal_4').on('click',function(){
    animBtnMenuCloseALL();
    resetBouton();
    section_chien = 0;
    section_lapin = 0;
    section_chat = 0;
    section_cheval = 1;

    $('#animaux').css({display:"block"});

    document.getElementById('liste_title').innerHTML="la liste de galop";
    document.getElementById('liste_title_img').innerHTML="liste de no&euml;l de galop";
    $("#section_gifs_cheval").css({display:"block"});
    $("#section_gifs_lapin,#section_gifs_chien,#section_gifs_chat").css({display:"none"});
    $('#vid_1_cheval,#vid_2_cheval,#vid_3_cheval').css({display:"none"});
    $('#vid_0_cheval').css({display:"block"});
    $('.anim_vid').css({bottom:"0%"});

    $('#btn_menu_expand_cheval').css({display:"block"});
    $('#btn_menu_expand_lapin,#btn_menu_expand_chien,#btn_menu_expand_chat').css({display:"none"});
    setTimeout(function(){
        $('#home').animate({opacity:"0"},400, "easeOutQuad");

        $('#btn_chien').animate({marginRight:"10vw"},400, "easeOutQuad");
        $('#btn_lapin').animate({marginRight:"16vw"},400, "easeOutQuad");
        $('#btn_chat').animate({marginRight:"22vw"},400, "easeOutQuad");
        $('#btn_cheval').animate({marginRight:"2vw"},400, "easeOutQuad");
    },500);
});

function resetBouton(){
    $('.itemBTN').removeClass('selectPrice');
    $('#titreForm').css({display:"block"});
    $('#form').css({display:"none"});
    $('#montant').val('');
    $('#cta').removeClass('activateCTA');
}




//FLEXSLIDER
// $(window).load(function() {
//   $('.flexslider').flexslider({
//     animation: "slide",
//     directionNav: false,
//     controlNav: true,
//   });
// });

// var click_menu = 0;
// $(window).load(function() {
//   $(function() {
//     var pull = $('#pull');
//     var menu = $('nav ul');

//     $(pull).on('click', function(e) {
//       e.preventDefault();
//       menu.slideToggle();
//       //alert('menu');
//       if (click_menu === 0) {
//         $("#about").animate({'marginTop':'250px'},400, "linear");
//         $("#container_nav_mob").animate({height:380},400, "linear");
//         click_menu = 1;
//       }
//       else if (click_menu === 1) {
//         $("#about").animate({'marginTop':'-33px'},400, "linear");
//         $("#container_nav_mob").animate({height:95},400, "linear");
//         click_menu = 0;
//       }
//     });

//   });

//   $(window).resize(function() {
//     var menu = $('nav ul');
//     var w = $(window).width();
//     if (w > 320 && menu.is(':hidden')) {
//       menu.removeAttr('style');
//     }
//   });
// });


// //OVERLAYS
// $(document).ready(function() {
//   if (Modernizr.touch) {
//     // show the close overlay button
//     $(".close-overlay").removeClass("hidden");
//     // handle the adding of hover class when clicked
//     $(".effects .img").click(function(e) {
//       e.preventDefault();
//       e.stopPropagation();
//       if (!$(this).hasClass("hover")) {
//         $(this).addClass("hover");
//       }
//     });
//     // handle the closing of the overlay
//     $(".close-overlay").click(function(e) {
//       e.preventDefault();
//       e.stopPropagation();
//       if ($(this).closest(".img").hasClass("hover")) {
//         $(this).closest(".img").removeClass("hover");
//       }
//     });
//   } else {
//     // handle the mouseenter functionality
//     $(".effects .img").mouseenter(function() {
//       $(this).addClass("hover");
//     })
//     // handle the mouseleave functionality
//     .mouseleave(function() {
//       $(this).removeClass("hover");
//     });
//   }
// });


// // SMOOTH NAV SCROLL
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1500);
//         return false;
//       }
//     }
//   });
// });


// // WAYPOINTS
// $(function() {

//   $('.wp1').waypoint(function() {
//     $('.wp1').addClass('animated bounceInLeft');
//   }, {
//     offset: '85%'
//   });

//   $('.wp2').waypoint(function() {
//     $('.wp2').addClass('animated bounceInRight');
//   }, {
//     offset: '85%'
//   });

//   $('.wp3').waypoint(function() {
//     $('.wp3').addClass('animated bounceInLeft');
//   }, {
//     offset: '85%'
//   });

//   $('.wp4').waypoint(function() {
//     $('.wp4').addClass('animated fadeInUp');
//   }, {
//     offset: '85%'
//   });

//   $('.wp5').waypoint(function() {
//     $('.wp5').addClass('animated fadeInUp');
//   }, {
//     offset: '85%'
//   });

//   $('.wp6').waypoint(function() {
//     $('.wp6').addClass('animated fadeInUp');
//   }, {
//     offset: '85%'
//   });

// });


// // RESIZE
// $(function() {

//   var proportion = window.innerWidth / window.innerHeight;
//   // $(".section-text").css({width : window.innerWidth , height : window.innerHeight});
//   // alert(proportion);

//   ////1920px/////
//   if(proportion>1.89 && proportion<2){
//     $("#proj3_ipad").css({top:"2%"});
//   }

//   $("#over_n-p .col-md-4 section-text nopadding").mouseenter(function() {
//     $("#n-p_txt").animate({opacity:0},200, "linear");
//     //alert('yes');
//   });

//   $("#n-p").mouseout(function() {
//     $("#n-p_txt").animate({scale: 1, opacity:1},200, "linear");
//   });

// });


// // LOADING
// $(window).load(function() {

//   $(function() {
//     setTimeout(function(){
//       $(".loader").animate({opacity:1},500, "linear");
//     },50);

//     setTimeout(function(){
//       //$('html').removeClass('noscroll');
//       $("body").css({position:'static'});
//       $(".loader").animate({opacity:0},500, "linear");
//       $("#cache_load").animate({opacity:0},1000, "linear");
//       $("#cache_load").delay(750).queue(function (next) { $(this).css('display', 'none'); next(); });
//     },2000);

//     // setTimeout(function(){
//       // $('#scroll_down').addClass('placement');
//       // $("#scroll_down").css({display:'block'}).fadeIn(1000);
//     // },2500);

//   });

// });
