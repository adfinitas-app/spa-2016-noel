$(document).ready(function(){
    orientationchange();

    $.html5Loader({
        filesToLoad:    'js/files.json', // this could be a JSON or simply a javascript object
        onBeforeLoad:       function () {},
        onComplete:         function () {
            setTimeout(function(){
                $('#pre_home').animate({opacity:"0"},500, "linear");
                setTimeout(function(){
                    $('#pre_home').css({display:"none"});
                    animHomeAfterLoading();
                },600);
            },1000)
        },
        onElementLoaded:    function ( obj, elm) {
            // console.log(obj);
            // console.log(elm);
        },
        onUpdate:           function ( percentage ) {
            var opacityNew = (percentage) /100;
            $('#titre_pre_home_load').css({opacity:opacityNew});
            // $('#contTitreLoader').css({width:widthNew});
            console.log('percentage :'+percentage);
        }
    });
})


var range;
range = function(a, b) {
 return (b - a) * Math.random() + a;
};
var numberConf1 = 15;
var numberConf2 = 75;

var COLORS = [[255, 255, 255], [236, 103, 7], [113, 98, 83]];
// bleu - rouge - vert - turquoise - jaune - gris - rose
var ROTATION = ["rot1", "rot2", "rot3"];
var ANIMROT = ["rotating01", "rotating02", "rotating03", "rotating04", "rotating05", "rotating06", "rotating07", "rotating08", "rotating09", "rotating10", "rotating11", "rotating12"];


var timing, timeout;

function animationConfettis1(){
    $('#contFettis').html("");
    // // for(var i=0;i<numberConf;i++){
        var o = 0;
        timing = setInterval(function(){
            var widthScreen = window.innerWidth;
            var heightScreen = window.innerHeight;
            var widthC = range(2,20);
            var leftC = range(0,widthScreen);
            var topC = range(0,100);

            var centreT = ~~range(0,50);
            var centreL = ~~range(0,50);
            var animRot = ANIMROT[~~range(0, 12)];

            var color = COLORS[~~range(0, 3)];

            $('#contFettis').append('<div class="chuteConf"><div class="confettis '+animRot+'" style="width:'+widthC+'px;height:'+widthC+'px; left:'+leftC+'px; top:'+topC+'px; background-color:rgb('+color[0]+','+color[1]+','+color[2]+'); transform-origin:'+centreT+'% '+centreL+'%;-webkit-transform-origin:'+centreT+'% '+centreL+'%;"></div></div>');
            o = o+1;
        // console.log(o);
        if(o>(numberConf1)){
            clearInterval(timing);
        }
    },100);


        timeout = setTimeout(function(){
            $('.chuteConf').animate({opacity:0},500,function(){
                clearInterval(timing);
                setTimeout(function(){
                    $('#contFettis').html("");
                    clearTimeout(timeout);
                },50);
            });
        },5000);
    }

    function animationConfettis2(){
        $('#contFettis').html("");
    // // for(var i=0;i<numberConf;i++){
        var o = 0;
        timing = setInterval(function(){
            var widthScreen = window.innerWidth;
            var heightScreen = window.innerHeight;
            var widthC = range(2,20);
            var leftC = range(0,widthScreen);
            var topC = range(0,100);

            var centreT = ~~range(0,50);
            var centreL = ~~range(0,50);
            var animRot = ANIMROT[~~range(0, 12)];

            var color = COLORS[~~range(0, 3)];

            $('#contFettis').append('<div class="chuteConf"><div class="confettis '+animRot+'" style="width:'+widthC+'px;height:'+widthC+'px; left:'+leftC+'px; top:'+topC+'px; background-color:rgb('+color[0]+','+color[1]+','+color[2]+'); transform-origin:'+centreT+'% '+centreL+'%;-webkit-transform-origin:'+centreT+'% '+centreL+'%;"></div></div>');
            o = o+1;
        // console.log(o);
        if(o>(numberConf2)){
            clearInterval(timing);
        }
    },100);


        timeout = setTimeout(function(){
            $('.chuteConf').animate({opacity:0},500,function(){
                clearInterval(timing);
                setTimeout(function(){
                    $('#contFettis').html("");
                    clearTimeout(timeout);
                },50);
            });
        },5000);
    }



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
    $('#logo_spa_pre_home').animate({top:"2%",opacity:"1"},600, "linear");
},100);
setTimeout(function(){
    $('#titre_pre_home').animate({opacity:"1"},800, "linear");
},300);

// ANIMATION PRE-HOME //

var click_zone1_ok = 0;
var click_zone2_ok = 0;
var click_zone3_ok = 0;
var click_zone4_ok = 0;
// ANIMATION HOME //
function animHomeAfterLoading(){
    $('#adFlabel-don-1').html(prix01);
    $('#adFlabel-don-2').html(prix02);
    $('#adFlabel-don-3').html(prix03);

    $('#home').css({display:"block"});
    $('#header_title_home').animate({opacity:"1"},1500, "linear");
    $('#logo_spa_home').animate({opacity:"1"},800, "linear");
    setTimeout(function(){
        $('#zone_animal_1').animate({left:"0%",opacity:"1"},800, "linear");
    },300);
    setTimeout(function(){
        $('#zone_animal_2').animate({left:"0%",opacity:"1"},800, "linear");
    },600);
    setTimeout(function(){
        $('#zone_titre_home').animate({left:"0%",opacity:"1"},800, "linear");
    },900);
    setTimeout(function(){
        $('#zone_animal_3').animate({left:"0%",opacity:"1"},800, "linear");
    },1200);
    setTimeout(function(){
        $('#zone_animal_4').animate({left:"0%",opacity:"1"},800, "linear");
    },1500);

    setTimeout(function(){
        click_zone1_ok = 1;
        click_zone2_ok = 1;
        click_zone3_ok = 1;
        click_zone4_ok = 1;
    },2500);

}
// ANIMATION HOME //


$('#liste_btn').on('click',function(){
    $('#liste_content').animate({top:"16%",opacity:"1",zIndex:"20"},500, "linear");
});

$('#liste_close_img').on('click',function(){
    $('#liste_content').animate({top:"10%",opacity:"0",zIndex:"0"},500, "linear");
});

$('.itemBTN').on('click',function(){
    $('.itemBTN').removeClass('selectPrice');
    $(this).addClass('selectPrice');

    $('#cta').addClass('activateCTA');
});

$('#otherPrice').on('click',function(){
    // window.open('https://soutenir.la-spa.fr/b/mon-don','_blank');
    var newParamUrlOther = "?cid=147&once_grid[]="+(prix01*100)+"&once_grid[]="+(prix02*100)+"&once_grid[]="+(prix03*100)+"&amount=&frequency=once&firstname="+paramFirstname+"&lastname="+paramLastname+"&email="+paramEmail+"&reserved_code_media="+reserved_code_media;
    console.log('newParamUrlOther : '+newParamUrlOther);
    window.open('https://soutenir.la-spa.fr/b/'+newParamUrlOther, '_blank');
});


var clickCTA = 0;
var montantSelected = null;
$('#cta').on('click',function(){
    if (clickCTA === 1) {
        // window.open('https://soutenir.la-spa.fr/b/mon-don','_blank');
        var newParamUrl = "?cid=147&once_grid[]="+(prix01*100)+"&once_grid[]="+(prix02*100)+"&once_grid[]="+(prix03*100)+"&amount="+(montantSelected*100)+"&frequency=once&firstname="+paramFirstname+"&lastname="+paramLastname+"&email="+paramEmail+"&reserved_code_media="+reserved_code_media;
        console.log('newParamUrl : '+newParamUrl);
        window.open('https://soutenir.la-spa.fr/b/'+newParamUrl, '_blank');
    }
});



var section_chien = null;
var section_lapin = null;
var section_chat = null;
var section_cheval = null;

section_chien = 1;

$('#firstPrice').on('click',function(){
    clearInterval(timing);
    clearTimeout(timeout);
    clickCTA = 1;
    montantSelected = prix01;

    $('#contFettis').html("");
    if (section_chien === 1) {
        $('#vid_1_chien').css({display:"block"});
        $('#vid_2_chien,#vid_3_chien').css({display:"none"});
    }
    if (section_lapin === 1) {
        $('#vid_1_lapin').css({display:"block"});
        $('#vid_2_lapin,#vid_3_lapin').css({display:"none"});
    }
    if (section_chat === 1) {
        $('#vid_1_chat').css({display:"block"});
        $('#vid_2_chat,#vid_3_chat').css({display:"none"});
    }
    if (section_cheval === 1) {
        $('#vid_1_cheval').css({display:"block"});
        $('#vid_2_cheval,#vid_3_cheval').css({display:"none"});
    }
});
$('#secondPrice').on('click',function(){
    clearInterval(timing);
    clearTimeout(timeout);
    clickCTA = 1;
    montantSelected = prix02;

    $('#contFettis').html("");
    if (section_chien === 1) {
        animationConfettis1();
        $('#vid_2_chien').css({display:"block"});
        $('#vid_1_chien,#vid_3_chien').css({display:"none"});
    }
    if (section_lapin === 1) {
        animationConfettis1();
        $('#vid_2_lapin').css({display:"block"});
        $('#vid_1_lapin,#vid_3_lapin').css({display:"none"});
    }
    if (section_chat === 1) {
        animationConfettis1();
        $('#vid_2_chat').css({display:"block"});
        $('#vid_1_chat,#vid_3_chat').css({display:"none"});
    }
    if (section_cheval === 1) {
        animationConfettis1();
        $('#vid_2_cheval').css({display:"block"});
        $('#vid_1_cheval,#vid_3_cheval').css({display:"none"});
    }
});
$('#thirdPrice').on('click',function(){
    clearInterval(timing);
    clearTimeout(timeout);
    clickCTA = 1;
    montantSelected = prix03;

    $('#contFettis').html("");
    if (section_chien === 1) {
        animationConfettis2();
        $('#vid_3_chien').css({display:"block"});
        $('#vid_1_chien,#vid_2_chien').css({display:"none"});
    }
    if (section_lapin === 1) {
        animationConfettis2();
        $('#vid_3_lapin').css({display:"block"});
        $('#vid_1_lapin,#vid_2_lapin').css({display:"none"});
    }
    if (section_chat === 1) {
        animationConfettis2();
        $('#vid_3_chat').css({display:"block"});
        $('#vid_1_chat,#vid_2_chat').css({display:"none"});
    }
    if (section_cheval === 1) {
        animationConfettis2();
        $('#vid_3_cheval').css({display:"block"});
        $('#vid_1_cheval,#vid_2_cheval').css({display:"none"});
    }
});



// ACTIONS MENU CHIEN
function animBtnMenuChienOpen(){
    $('#btn_lapin').animate({marginRight:"19vw"},400, "linear");
    $('#btn_chat').animate({marginRight:"36vw"},400, "linear");
    $('#btn_cheval').animate({marginRight:"53vw"},400, "linear");
    $('#btn_close_menu_chien').css({display:"block"});
}
$('#btn_menu_expand_chien').on('click',function(){
    animBtnMenuChienOpen();
});
function animBtnMenuChienClose(){
    $('#btn_lapin').animate({marginRight:"10vw"},400, "linear");
    $('#btn_chat').animate({marginRight:"16vw"},400, "linear");
    $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
    $('#btn_close_menu_chien').css({display:"none"});
}
$('#btn_close_menu_chien').on('click',function(){
    animBtnMenuChienClose();
});

// ACTIONS MENU LAPIN
function animBtnMenuLapinOpen(){
    $('#btn_chien').animate({marginRight:"19vw"},400, "linear");
    $('#btn_chat').animate({marginRight:"36vw"},400, "linear");
    $('#btn_cheval').animate({marginRight:"53vw"},400, "linear");
    $('#btn_close_menu_lapin').css({display:"block"});
}
$('#btn_menu_expand_lapin').on('click',function(){
    animBtnMenuLapinOpen();
});
function animBtnMenuLapinClose(){
    $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
    $('#btn_chat').animate({marginRight:"16vw"},400, "linear");
    $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
    $('#btn_close_menu_lapin').css({display:"none"});
}
$('#btn_close_menu_lapin').on('click',function(){
    animBtnMenuLapinClose();
});

// ACTIONS MENU CHAT
function animBtnMenuChatOpen(){
    $('#btn_chien').animate({marginRight:"19vw"},400, "linear");
    $('#btn_lapin').animate({marginRight:"36vw"},400, "linear");
    $('#btn_cheval').animate({marginRight:"53vw"},400, "linear");
    $('#btn_close_menu_chat').css({display:"block"});
}
$('#btn_menu_expand_chat').on('click',function(){
    animBtnMenuChatOpen();
});
function animBtnMenuChatClose(){
    $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
    $('#btn_lapin').animate({marginRight:"16vw"},400, "linear");
    $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
    $('#btn_close_menu_chat').css({display:"none"});
}
$('#btn_close_menu_chat').on('click',function(){
    animBtnMenuChatClose();
});

// ACTIONS MENU CHEVAL
function animBtnMenuChevalOpen(){
    $('#btn_chien').animate({marginRight:"19vw"},400, "linear");
    $('#btn_lapin').animate({marginRight:"36vw"},400, "linear");
    $('#btn_chat').animate({marginRight:"53vw"},400, "linear");
    $('#btn_close_menu_cheval').css({display:"block"});
}
$('#btn_menu_expand_cheval').on('click',function(){
    animBtnMenuChevalOpen();
});
function animBtnMenuChevalClose(){
    $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
    $('#btn_lapin').animate({marginRight:"16vw"},400, "linear");
    $('#btn_chat').animate({marginRight:"22vw"},400, "linear");
    $('#btn_close_menu_cheval').css({display:"none"});
}
$('#btn_close_menu_cheval').on('click',function(){
    animBtnMenuChevalClose();
});



function animBtnMenuCloseALL(){
    $('#btn_chien').animate({marginRight:"2vw"},400, "linear");
    $('#btn_lapin').animate({marginRight:"2vw"},400, "linear");
    $('#btn_chat').animate({marginRight:"2vw"},400, "linear");
    $('#btn_cheval').animate({marginRight:"2vw"},400, "linear");
    $('#btn_close_menu_chien,#btn_close_menu_lapin,#btn_close_menu_chat,#btn_close_menu_cheval').css({display:"none"});
}


// $('#btn_lapin').css("background-image", "url(img/btn_chien.png)");
// $("#vid_0").css({display:"block"}).attr('src','img/lapin_vid_0.gif');


////////////////////
// HOME BTN LAPIN //
////////////////////
$('#zone_animal_1').on('click',function(){
    if (click_zone1_ok === 1) {
        section_chien = 0;
        section_lapin = 1;
        section_chat = 0;
        section_cheval = 0;

        $('#animaux').css({display:"block"});

        document.getElementById('liste_title').innerHTML="la liste de chouchou";
        document.getElementById('liste_title_img').innerHTML="";
        $('#liste_img').attr('src','img/ListeChouchou.png');
        
        $("#section_gifs_lapin").css({display:"block"});
        $("#section_gifs_chien,#section_gifs_chat,#section_gifs_cheval").css({display:"none"});
        $('#vid_2_lapin,#vid_3_lapin').css({display:"none"});
        $('#vid_1_lapin').css({display:"block"});
        $('.anim_vid').css({bottom:"-12%"});

        $('#btn_menu_expand_lapin').css({display:"block"});
        $('#btn_menu_expand_chien,#btn_menu_expand_chat,#btn_menu_expand_cheval').css({display:"none"});
        setTimeout(function(){
            $('#home').animate({opacity:"0"},400, "linear");

            $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
            $('#btn_chat').animate({marginRight:"16vw"},400, "linear");
            $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
        },500);
    }
});

// MENU BTN LAPIN //
$('#btn_lapin').on('click',function(){
    animBtnMenuCloseALL();
    resetBouton();
    section_chien = 0;
    section_lapin = 1;
    section_chat = 0;
    section_cheval = 0;

    $('#animaux').css({display:"block"});

    document.getElementById('liste_title').innerHTML="la liste de chouchou";
    document.getElementById('liste_title_img').innerHTML="liste de no&euml;l de chouchou";
    $("#section_gifs_lapin").css({display:"block"});
    $("#section_gifs_chien,#section_gifs_chat,#section_gifs_cheval").css({display:"none"});
    $('#vid_2_lapin,#vid_3_lapin').css({display:"none"});
    $('#vid_1_lapin').css({display:"block"});
    $('.anim_vid').css({bottom:"-12%"});

    $('#btn_menu_expand_lapin').css({display:"block"});
    $('#btn_menu_expand_chien,#btn_menu_expand_chat,#btn_menu_expand_cheval').css({display:"none"});
    setTimeout(function(){
        $('#home').animate({opacity:"0"},400, "linear");

        $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
        $('#btn_chat').animate({marginRight:"16vw"},400, "linear");
        $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
        $('#btn_lapin').animate({marginRight:"2vw"},400, "linear");
    },500);
});



////////////////////
// HOME BTN CHIEN //
////////////////////
$('#zone_animal_2').on('click',function(){
    if (click_zone2_ok === 1) {
        section_chien = 1;
        section_lapin = 0;
        section_chat = 0;
        section_cheval = 0;

        $('#animaux').css({display:"block"});

        document.getElementById('liste_title').innerHTML="la liste de happy";
        document.getElementById('liste_title_img').innerHTML="";
        $('#liste_img').attr('src','img/liste.png');
        $("#section_gifs_chien").css({display:"block"});
        $("#section_gifs_lapin,#section_gifs_chat,#section_gifs_cheval").css({display:"none"});
        $('#vid_2_chien,#vid_3_chien').css({display:"none"});
        $('#vid_1_chien').css({display:"block"});
        $('.anim_vid').css({bottom:"-2%"});

        $('#btn_menu_expand_chien').css({display:"block"});
        $('#btn_menu_expand_lapin,#btn_menu_expand_chat,#btn_menu_expand_cheval').css({display:"none"});
        setTimeout(function(){
            $('#home').animate({opacity:"0"},400, "linear");

            $('#btn_lapin').animate({marginRight:"10vw"},400, "linear");
            $('#btn_chat').animate({marginRight:"16vw"},400, "linear");
            $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
        },500);
    }
});

// MENU BTN CHIEN //
$('#btn_chien').on('click',function(){
    animBtnMenuCloseALL();
    resetBouton();
    section_chien = 1;
    section_lapin = 0;
    section_chat = 0;
    section_cheval = 0;

    $('#animaux').css({display:"block"});

    document.getElementById('liste_title').innerHTML="la liste de happy";
    document.getElementById('liste_title_img').innerHTML="liste de no&euml;l de happy";
    $("#section_gifs_chien").css({display:"block"});
    $("#section_gifs_lapin,#section_gifs_chat,#section_gifs_cheval").css({display:"none"});
    $('#vid_2_chien,#vid_3_chien').css({display:"none"});
    $('#vid_1_chien').css({display:"block"});
    $('.anim_vid').css({bottom:"-2%"});

    $('#btn_menu_expand_chien').css({display:"block"});
    $('#btn_menu_expand_lapin,#btn_menu_expand_chat,#btn_menu_expand_cheval').css({display:"none"});
    setTimeout(function(){
        $('#home').animate({opacity:"0"},400, "linear");

        $('#btn_lapin').animate({marginRight:"10vw"},400, "linear");
        $('#btn_chat').animate({marginRight:"16vw"},400, "linear");
        $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
        $('#btn_chien').animate({marginRight:"2vw"},400, "linear");
    },500);
});



////////////////////
// HOME BTN CHAT //
////////////////////
$('#zone_animal_3').on('click',function(){
    if (click_zone3_ok === 1) {
        section_chien = 0;
        section_lapin = 0;
        section_chat = 1;
        section_cheval = 0;

        $('#animaux').css({display:"block"});

        document.getElementById('liste_title').innerHTML="la liste d'atlas";
        document.getElementById('liste_title_img').innerHTML="";
        $('#liste_img').attr('src','img/ListeAtlas.png');
        $("#section_gifs_chat").css({display:"block"});
        $("#section_gifs_lapin,#section_gifs_chien,#section_gifs_cheval").css({display:"none"});
        $('#vid_2_chat,#vid_3_chat').css({display:"none"});
        $('#vid_1_chat').css({display:"block"});
        $('.anim_vid').css({bottom:"-12%"});

        $('#btn_menu_expand_chat').css({display:"block"});
        $('#btn_menu_expand_lapin,#btn_menu_expand_chien,#btn_menu_expand_cheval').css({display:"none"});
        setTimeout(function(){
            $('#home').animate({opacity:"0"},400, "linear");

            $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
            $('#btn_lapin').animate({marginRight:"16vw"},400, "linear");
            $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
        },500);
    }
});

// MENU BTN CHAT //
$('#btn_chat').on('click',function(){
    animBtnMenuCloseALL();
    resetBouton();
    section_chien = 0;
    section_lapin = 0;
    section_chat = 1;
    section_cheval = 0;

    $('#animaux').css({display:"block"});

    document.getElementById('liste_title').innerHTML="la liste d'atlas";
    document.getElementById('liste_title_img').innerHTML="liste de no&euml;l d'atlas";
    $("#section_gifs_chat").css({display:"block"});
    $("#section_gifs_lapin,#section_gifs_chien,#section_gifs_cheval").css({display:"none"});
    $('#vid_2_chat,#vid_3_chat').css({display:"none"});
    $('#vid_1_chat').css({display:"block"});
    $('.anim_vid').css({bottom:"-12%"});

    $('#btn_menu_expand_chat').css({display:"block"});
    $('#btn_menu_expand_lapin,#btn_menu_expand_chien,#btn_menu_expand_cheval').css({display:"none"});
    setTimeout(function(){
        $('#home').animate({opacity:"0"},400, "linear");

        $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
        $('#btn_lapin').animate({marginRight:"16vw"},400, "linear");
        $('#btn_cheval').animate({marginRight:"22vw"},400, "linear");
        $('#btn_chat').animate({marginRight:"2vw"},400, "linear");
    },500);
});


////////////////////
// HOME BTN CHEVAL //
////////////////////
$('#zone_animal_4').on('click',function(){
    if (click_zone4_ok === 1) {
        section_chien = 0;
        section_lapin = 0;
        section_chat = 0;
        section_cheval = 1;

        $('#animaux').css({display:"block"});

        document.getElementById('liste_title').innerHTML="la liste de willow";
        document.getElementById('liste_title_img').innerHTML="";
        $('#liste_img').attr('src','img/ListeWillow.png');
        $("#section_gifs_cheval").css({display:"block"});
        $("#section_gifs_lapin,#section_gifs_chien,#section_gifs_chat").css({display:"none"});
        $('#vid_2_cheval,#vid_3_cheval').css({display:"none"});
        $('#vid_1_cheval').css({display:"block"});
        $('.anim_vid').css({bottom:"0%"});

        $('#btn_menu_expand_cheval').css({display:"block"});
        $('#btn_menu_expand_lapin,#btn_menu_expand_chien,#btn_menu_expand_chat').css({display:"none"});
        setTimeout(function(){
            $('#home').animate({opacity:"0"},400, "linear");

            $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
            $('#btn_lapin').animate({marginRight:"16vw"},400, "linear");
            $('#btn_chat').animate({marginRight:"22vw"},400, "linear");
        },500);
    }
});

// MENU BTN CHEVAL //
$('#btn_cheval').on('click',function(){
    animBtnMenuCloseALL();
    resetBouton();
    section_chien = 0;
    section_lapin = 0;
    section_chat = 0;
    section_cheval = 1;

    $('#animaux').css({display:"block"});

    document.getElementById('liste_title').innerHTML="la liste de willow";
    document.getElementById('liste_title_img').innerHTML="liste de no&euml;l de willow";
    $("#section_gifs_cheval").css({display:"block"});
    $("#section_gifs_lapin,#section_gifs_chien,#section_gifs_chat").css({display:"none"});
    $('#vid_2_cheval,#vid_3_cheval').css({display:"none"});
    $('#vid_1_cheval').css({display:"block"});
    $('.anim_vid').css({bottom:"0%"});

    $('#btn_menu_expand_cheval').css({display:"block"});
    $('#btn_menu_expand_lapin,#btn_menu_expand_chien,#btn_menu_expand_chat').css({display:"none"});
    setTimeout(function(){
        $('#home').animate({opacity:"0"},400, "linear");

        $('#btn_chien').animate({marginRight:"10vw"},400, "linear");
        $('#btn_lapin').animate({marginRight:"16vw"},400, "linear");
        $('#btn_chat').animate({marginRight:"22vw"},400, "linear");
        $('#btn_cheval').animate({marginRight:"2vw"},400, "linear");
    },500);
});



function resetBouton(){
    $('.itemBTN').removeClass('selectPrice');
    $('#titreForm').css({display:"block"});
    $('#form').css({display:"none"});
    $('#montant').val('');
    $('#cta').removeClass('activateCTA');
    clearInterval(timing);
    clearTimeout(timeout);
    $('#contFettis').html("");
}



$(function() {
  if (window.navigator.userAgent.indexOf('iPad') != -1) {
    //alert('ipad js');
    $('#titre_pre_home,#titre_pre_home_load').css({height: "7%"});
    $('#logo_spa, #logo_spa_home').css({width: "14%"});
    $('.btns_home').css({width: "12vw", height: "12vw"});
    $('.fleche_home').css({width: "10vw", height: "10vw", right:'16%'});
    $('#header_title').css({left: "22%", fontSize: "6.5vw"});
    $('#header_title_home').css({left: "25%", fontSize: "6.5vw"});

    $('#dons_content').css({height: "65%"});

    $('#liste_picto').css({width: "8%"});
    $('#liste_title').css({width: "41%"});
    $('#liste_img').css({width: "76%"});
    $('#liste_title_img').css({fontSize: "6vw", top: "14%"});
    $('#liste_close_img').css({right: "20%"});
    $('#boutonList li .sup').css({position: "absolute", zIndex: "1"});
    $('#boutonList li .sup span').css({top: "52%", left: "1%"});
    $('#otherPrice .sup span').css({top: "53%", left: "-41%"});

    $("#vid_1_lapin,#vid_2_lapin,#vid_3_lapin").addClass("lapin_ipad");
    $('#vid_1_chien,#vid_2_chien,#vid_3_chien').addClass("chien_ipad");
    $('#vid_1_chat,#vid_2_chat,#vid_3_chat').addClass("chat_ipad");
    $('#vid_1_cheval,#vid_2_cheval,#vid_3_cheval').addClass("cheval_ipad");

    document.getElementById('texte_rotate').innerHTML="VEUILLEZ TOURNER<br>vOTRE tablette<br>POUR une meilleure<br>exp&eacute;rience...";
}
});
