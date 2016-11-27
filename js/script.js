var widthFenetre;
var heightFenetre;

var video;

var v = new Array();

v[0] = new Array();
v[1] = new Array();
v[2] = new Array();
v[3] = new Array();

//Video Chat
v[0][0] = [
        "videos/CHAT_HD_Dsk_00.mp4",
        "videos/CHAT_HD_Dsk_00.webm"
        ];
v[0][1] = [
        "videos/CHAT_HD_Dsk_01.mp4",
        "videos/CHAT_HD_Dsk_01.webm"
        ];
v[0][2] = [
        "videos/CHAT_HD_Dsk_02.mp4",
        "videos/CHAT_HD_Dsk_02.webm"
        ];
v[0][3] = [
        "videos/CHAT_HD_Dsk_03.mp4",
        "videos/CHAT_HD_Dsk_03.webm"
        ];
//Video Chien
v[1][0] = [
        "videos/CHIEN_HD_00.mp4",
        "videos/CHIEN_HD_00.webm"
        ];
v[1][1] = [
        // "videos/CHIEN_HD_01.mp4",
        "videos/CHIEN_HD_01_01.mp4",
        "videos/CHIEN_HD_01.webm"
        ];
v[1][2] = [
        "videos/CHIEN_HD_02.mp4",
        "videos/CHIEN_HD_02.webm",
        "videos/CHIEN_HD_02_b.mp4",
        "videos/CHIEN_HD_02_b.webm"
        ];
v[1][3] = [
        "videos/CHIEN_HD_03.mp4",
        "videos/CHIEN_HD_03.webm"
        ];
//Video Cheval
v[2][0] = [
        "videos/CHEVAL_HD_Dsk_00.mp4",
        "videos/CHEVAL_HD_Dsk_00.webm"
        ];
v[2][1] = [
        "videos/CHEVAL_HD_Dsk_01.mp4",
        "videos/CHEVAL_HD_Dsk_01.webm"
        ];
v[2][2] = [
        "videos/CHEVAL_HD_Dsk_02.mp4",
        "videos/CHEVAL_HD_Dsk_02.webm"
        ];
v[2][3] = [
        "videos/CHEVAL_HD_Dsk_03.mp4",
        "videos/CHEVAL_HD_Dsk_03.webm"
        ];
//Video Lapin
v[3][0] = [
        "videos/LAPIN_HD_Dsk_00.mp4",
        "videos/LAPIN_HD_Dsk_00.webm"
        ];
v[3][1] = [
        "videos/LAPIN_HD_Dsk_01.mp4",
        "videos/LAPIN_HD_Dsk_01.webm"
        ];
v[3][2] = [
        "videos/LAPIN_HD_Dsk_02.mp4",
        "videos/LAPIN_HD_Dsk_02.webm"
        ];
v[3][3] = [
        "videos/LAPIN_HD_Dsk_03.mp4",
        "videos/LAPIN_HD_Dsk_03.webm"
        ];

        v[3][4] = [
        "videos/Loop.mp4"
        ];


var currentPet = "chat";

window.addEventListener("resize", updateSize, true);

$( document ).ready(function() {
     if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){
            // alert('redirectMobile');
            redirectMobile();
     }

    updateSize();
    video = document.getElementById('bgvid');
    videoQuery = $('#bgvid');
    var filejson = '';
    if (Modernizr.video) {
      if (Modernizr.video.webm) {
        filejson =  '/js/files.json'
      } else {
        filejson = '/js/files.json'
      }
    };
    $.html5Loader({
        filesToLoad:    filejson, // this could be a JSON or simply a javascript object
        onBeforeLoad:       function () {

        },
        onComplete:         function () {
            setTimeout(function(){
                $('#contIMGLoad').animate({top:"41.5%"},500,function(){
                    setTimeout(function(){
                        $('#contentMenu').css({display:"block"});
                        $('#contentLoader').animate({opacity:0},500,function(){
                            setTimeout(function(){
                                $('#contentLoader').css({display:"none"});
                            },50);
                        });
                        setClickMenu();
                    },1000);
                });
            },2000);
        },
        onElementLoaded:    function ( obj, elm) {
        },
        onUpdate:           function ( percentage ) {
            var widthNew = (percentage) +"%";
            $('#contTitreLoader').css({width:widthNew});
        }
    });
});


// Confettis

var range;
range = function(a, b) {
    return (b - a) * Math.random() + a;
};
var numberConf = 600;

var COLORS = [[255, 255, 255], [236, 103, 7], [113, 98, 83]];
// bleu - rouge - vert - turquoise - jaune - gris - rose
var ROTATION = ["rot1", "rot2", "rot3"];
var ANIMROT = ["rotating01", "rotating02", "rotating03", "rotating04", "rotating05", "rotating06", "rotating07", "rotating08", "rotating09", "rotating10", "rotating11", "rotating12"];

var CHUTE = ["chuteConf", "chuteConfB"];


var timing, timeout;


function animationConfettis(){
    $('#contFettis').html("");
    var a = 0.1;
    // for(var i=0;i<numberConf;i++){
    var o = 0;
    timing = setInterval(function(){
        var widthScreen = window.innerWidth;
        var heightScreen = window.innerHeight;
        var widthC = range(2,20);
        var leftC = range(0,widthScreen);
        var topC = range(0,100);
        // var leftC = range(0,100);
        // var topC = range(0,100);

        var centreT = ~~range(0,50);
        var centreL = ~~range(0,50);
        var animRot = ANIMROT[~~range(0, 12)];

        var color = COLORS[~~range(0, 3)];
        var chute = CHUTE[~~range(0, 2)];

        $('#contFettis').append('<div class="'+chute+'"><div class="confettis '+animRot+'" style="width:'+widthC+'px;height:'+widthC+'px; left:'+leftC+'px; top:'+topC+'px; background-color:rgb('+color[0]+','+color[1]+','+color[2]+'); transform-origin:'+centreT+'% '+centreL+'%;-webkit-transform-origin:'+centreT+'% '+centreL+'%;"></div></div>');

        o = o+1;
        // console.log(o);
        if(o>(numberConf)){
            clearInterval(timing);
        }
    },1);

    timeout = setTimeout(function(){
        $('.chuteConf').animate({opacity:0},500,function(){
            clearInterval(timing);
            setTimeout(function(){
                $('#contFettis').html("");
                clearTimeout(timeout);
            },50);
        });
    },8000);

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
        if(o>(numberConf/3)){
            clearInterval(timing);
        }
    },1);

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



function setClickMenu(){
    $('.listMenu').on('click',function(){
        if($(this).is('#menuLapin')){
            currentPet = "lapin";
            setSelectionLancement(currentPet);
        }

        if($(this).is('#menuChien')){
            currentPet = "chien";
            setSelectionLancement(currentPet);
        }

        if($(this).is('#menuChat')){
            currentPet = "chat";
            setSelectionLancement(currentPet);
        }

        if($(this).is('#menuCheval')){
            currentPet = "cheval";
            setSelectionLancement(currentPet);
        }

        $('#adFlabel-don-1').html(prix01);
        $('#adFlabel-don-2').html(prix02);
        $('#adFlabel-don-3').html(prix03);
        // console.log('currentPet : '+currentPet);

    });

    $('#clickTest').on('click',function(){
        // $('#sourceMP4').attr("src", v[3][1][0]);
        $('#sourceMP4').attr("src", v[3][4]);
        // $('#sourceWEBM').attr("src", v[3][1][1]);
        $('#sourceWEBM').attr("src", '');
        video.load();
    });

}

function setSelectionLancement(current){
    // console.log('currentPet : '+current);
    updatePet();
    if(current == "cheval"){
        $('.itemList').removeClass('current');
        $("#listCheval").addClass('current');
    }
    if(current == "lapin"){
        $('.itemList').removeClass('current');
        $("#listLapin").addClass('current');
    }
    if(current == "chat"){
        $('.itemList').removeClass('current');
        $("#listChat").addClass('current');
    }
    if(current == "chien"){
        $('.itemList').removeClass('current');
        $("#listChien").addClass('current');
    }
    $('#content').css({display:'block'});
    $('#contentMenu').animate({opacity:'0'},500,function(){
        $('#contentMenu').css({display:"none"});
    });

}

$('.itemList').on('click',function(){
    if($(this).is('#listCheval')){
    currentPet = "cheval";
    }

    if($(this).is('#listLapin')){
    currentPet = "lapin";
    }

    if($(this).is('#listChat')){
    currentPet = "chat";
    }

    if($(this).is('#listChien')){
    currentPet = "chien";
    }

    $('.itemList').removeClass('current');
    $(this).addClass('current');

    updatePet();
    // console.log('currentPet : '+currentPet);
});

var montantSelected = null;

document.getElementById('cta').addEventListener('click',redirectCTA);

$('.itemBTN').on('click',function(){
    // $('.activateCTA').on('click',redirectCTA);


    if($(this).is('#otherPrice')){
        $('.itemBTN').removeClass('selectPrice');
        $(this).addClass('selectPrice');
    }else{
        video.setAttribute("loop", true);
        document.getElementById('bgvid').removeEventListener('ended',firstNoLoop);

        $('.itemBTN').removeClass('selectPrice');
        $(this).addClass('selectPrice');
    }



    if($(this).is('#firstPrice')){
        // console.log('firstPrice Click');

        video.setAttribute("loop",true);

        $('#etape01').animate({opacity:1},800);
        $('#etape02').animate({opacity:0},800);
        $('#etape03').animate({opacity:0},800);

        clearInterval(timing);
        clearTimeout(timeout);
        $('#contFettis').html("");

        if(currentPet == "chat"){
            $('#sourceMP4').attr("src", v[0][1][0]);
            $('#sourceWEBM').attr("src", v[0][1][1]);
            video.load();
        }

        if(currentPet == "chien"){
            $('#sourceMP4').attr("src", v[1][1][0]);
            // $('#sourceWEBM').attr("src", v[1][1][1]);
            video.load();
        }

        if(currentPet == "cheval"){
            $('#sourceMP4').attr("src", v[2][1][0]);
            $('#sourceWEBM').attr("src", v[2][1][1]);
            video.load();
        }

        if(currentPet == "lapin"){
            $('#sourceMP4').attr("src", v[3][1][0]);
            $('#sourceWEBM').attr("src", v[3][1][1]);
            video.load();
        }
        montantSelected = prix01;
        $('#cta').addClass('activateCTA');
    }

    if($(this).is('#secondPrice')){
        // console.log('secondPrice Click');
        video.setAttribute("loop",true);

        $('#etape01').animate({opacity:1},800);
        $('#etape02').animate({opacity:1},800);
        $('#etape03').animate({opacity:0},800);

        clearInterval(timing);
        clearTimeout(timeout);
        $('#contFettis').html("");


        if(currentPet == "chat"){
            $('#sourceMP4').attr("src", v[0][2][0]);
            $('#sourceWEBM').attr("src", v[0][2][1]);
            video.load();
        }

        if(currentPet == "chien"){
            // video.removeAttribute("loop");
            // document.getElementById('bgvid').addEventListener('ended',noLoopChien);
            $('#sourceMP4').attr("src", v[1][2][0]);
            $('#sourceWEBM').attr("src", v[1][2][1]);
            video.load();
        }

        if(currentPet == "cheval"){
            $('#sourceMP4').attr("src", v[2][2][0]);
            $('#sourceWEBM').attr("src", v[2][2][1]);
            video.load();
        }

        if(currentPet == "lapin"){
            $('#sourceMP4').attr("src", v[3][2][0]);
            $('#sourceWEBM').attr("src", v[3][2][1]);
            video.load();
        }
        montantSelected = prix02;
        animationConfettis2();
        $('#cta').addClass('activateCTA');
    }

    if($(this).is('#thirdPrice')){
        // console.log('thirdPrice Click');
        video.setAttribute("loop",true);

        clearInterval(timing);
        clearTimeout(timeout);

        $('#etape01').animate({opacity:1},800);
        $('#etape02').animate({opacity:1},800);
        $('#etape03').animate({opacity:1},800);

        if(currentPet == "chat"){
            $('#sourceMP4').attr("src", v[0][3][0]);
            $('#sourceWEBM').attr("src", v[0][3][1]);
            video.load();
        }

        if(currentPet == "chien"){
            video.removeAttribute("loop");
            $('#sourceMP4').attr("src", v[1][3][0]);
            $('#sourceWEBM').attr("src", v[1][3][1]);
            video.load();
        }

        if(currentPet == "cheval"){
            $('#sourceMP4').attr("src", v[2][3][0]);
            $('#sourceWEBM').attr("src", v[2][3][1]);
            video.load();
        }

        if(currentPet == "lapin"){
            $('#sourceMP4').attr("src", v[3][3][0]);
            $('#sourceWEBM').attr("src", v[3][3][1]);
            video.load();
        }
        animationConfettis();
        montantSelected = prix03;
        $('#cta').addClass('activateCTA');
    }

    if($(this).is('#otherPrice')){

        montantSelected = null;

        var newParamUrlOther = "?cid=147&once_grid[]="+(prix01*100)+"&once_grid[]="+(prix02*100)+"&once_grid[]="+(prix03*100)+"&amount=&frequency=once&firstname="+paramFirstname+"&lastname="+paramLastname+"&email="+paramEmail+"&reserved_code_media="+reserved_code_media;

        console.log('newParamUrlOther : '+newParamUrlOther);

        window.open('https://soutenir.la-spa.fr/b/'+newParamUrlOther, '_blank');

    }
});

function redirectCTA(){
    if($(this).hasClass('activateCTA')){
        var newParamUrl = "?cid=147&once_grid[]="+(prix01*100)+"&once_grid[]="+(prix02*100)+"&once_grid[]="+(prix03*100)+"&amount="+(montantSelected*100)+"&frequency=once&firstname="+paramFirstname+"&lastname="+paramLastname+"&email="+paramEmail+"&reserved_code_media="+reserved_code_media;

        console.log('newParamUrl : '+newParamUrl);

        window.open('https://soutenir.la-spa.fr/b/'+newParamUrl, '_blank');
    }
}

function redirectMobile(){
        var newParamUrlMobile = "?email="+paramEmail+"&firstname="+paramFirstname+"&lastname="+paramLastname+"&reserved_code_media="+reserved_code_media;

        window.open('./m/'+newParamUrlMobile, '_self');
}

function noLoopChien(){
    console.log('noLoopChien');
    document.getElementById('bgvid').removeEventListener('ended',noLoopChien);


    $('#sourceMP4').attr("src", v[1][2][2]);
    $('#sourceWEBM').attr("src", v[1][2][3]);
    video.load();
    video.setAttribute("loop", true);
}

function updatePet(){
    switch(currentPet) {
        case "chat":
            $('#titreListe span').html('Liste de Noël d\'Atlas');
            // video.setAttribute("poster", "images/posterChat.jpg");
            // $('#bgvid').css({"background":"url('images/posterChat.jpg')"});
            // $('#bgvid').css({"background-size":"cover"});
            //$('#sourceMP4').attr("src", v[0][1][0]);
            //$('#sourceWEBM').attr("src", v[0][1][1]);

            video.load();
            resetBouton();
        break;
        case "chien":
            $('#titreListe span').html('Liste de Noël de Happy');
            // video.setAttribute("poster", "images/posterChien.jpg");
            // $('#bgvid').css({"background":"url('images/posterChien.jpg')"});
            // $('#bgvid').css({"background-size":"cover"});
            $('#sourceMP4').attr("src", v[1][1][0]);
            $('#sourceWEBM').attr("src", v[1][1][1]);

            video.load();
            resetBouton();
            break;
        case "cheval":
            $('#titreListe span').html('Liste de Noël de Willow');
            // video.setAttribute("poster", "images/posterCheval.jpg");
            // $('#bgvid').css({"background":"url('images/posterCheval.jpg')"});
            // $('#bgvid').css({"background-size":"cover"});
            $('#sourceMP4').attr("src", v[2][1][0]);
            $('#sourceWEBM').attr("src", v[2][1][1]);

            video.load();
            resetBouton();
            break;
        case "lapin":
            $('#titreListe span').html('Liste de Noël de Chouchou');
            // video.setAttribute("poster", "images/posterLapin.jpg");
            // $('#bgvid').css({"background":"url('images/posterLapin.jpg')"});
            // $('#bgvid').css({"background-size":"cover"});
            $('#sourceMP4').attr("src", v[3][1][0]);
            $('#sourceWEBM').attr("src", v[3][1][1]);

            video.load();
            resetBouton();
            break;
    }

    document.getElementById('bgvid').addEventListener('ended',firstNoLoop);
}

function firstNoLoop(){
    document.getElementById('bgvid').removeEventListener('ended',firstNoLoop);

    if(currentPet == "chat"){
        video.setAttribute("loop", true);
        $('#sourceMP4').attr("src", v[0][1][0]);
        $('#sourceWEBM').attr("src", v[0][1][1]);
        video.load();
    }
    if(currentPet == "chien"){
        video.setAttribute("loop", true);
        $('#sourceMP4').attr("src", v[1][1][0]);
        $('#sourceWEBM').attr("src", v[1][1][1]);
        video.load();
    }
    if(currentPet == "cheval"){
        video.setAttribute("loop", true);
        $('#sourceMP4').attr("src", v[2][1][0]);
        $('#sourceWEBM').attr("src", v[2][1][1]);
        video.load();
    }
    if(currentPet == "lapin"){
        video.setAttribute("loop", true);
        $('#sourceMP4').attr("src", v[3][1][0]);
        $('#sourceWEBM').attr("src", v[3][1][1]);
        video.load();
    }

    montantSelected = prix01;

    $('#firstPrice').addClass('selectPrice');
    $('#cta').addClass('activateCTA');
}

function resetBouton(){
    montantSelected = null;
    video.removeAttribute("loop");
    document.getElementById('bgvid').addEventListener('ended',firstNoLoop);
    document.getElementById('bgvid').removeEventListener('ended',noLoopChien);
    clearInterval(timing);
    clearTimeout(timeout);
    $('#contFettis').html("");
    $('#etape01, #etape02, #etape03').css({opacity:0});

    $('.itemBTN').removeClass('selectPrice');
    $('#titreForm').css({display:"block"});
    $('#form').css({display:"none"});
    $('#montant').val('');
    $('#cta').removeClass('activateCTA');
}

var ratio;

function updateSize(){
    // console.log('resize');
    $('#content').css({height:$(window).height()});
    $('#contentLoader').css({height:$(window).height()});
    $('#contentMenu').css({height:$(window).height()});

    ratio = $(window).width()/$(window).height();
    if(ratio < 1.92){
        $('video').css({'width':'auto','height':'100%'});

        if(ratio < 1.80){
            $('#contentMenu li').css({'background-position': '50% 25%'});
            $('#menuList li').css({'background-position': '50% 25%'});
        }else{
            $('#contentMenu li').css({'background-position': '50% 50%'});
            $('#menuList li').css({'background-position': '50% 50%'});
        }
    }else{
        $('video').css({'width':'101%','height':'auto'});

            $('#contentMenu li').css({'background-position': '50% 25%'});
            $('#menuList li').css({'background-position': '50% 25%'});
    }
}
