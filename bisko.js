


var slide = new Array('image/home1.jpg','image/home2.jpg','image/home3.jpg','image/home4.jpg');
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}


setInterval("ChangeSlide(1)", 4000);




var slide2 = new Array('image/game1.jpeg','image/game2.jpeg','image/game3.jpeg','image/game4.jpeg');
var numero2 = 0;

function ChangeSlide2(sens) {
    numero2 = numero2 + sens;
    if (numero2 < 0)
        numero2 = slide2.length - 1;
    if (numero2 > slide2.length - 1)
        numero2 = 0;
    document.getElementById("slide2").src = slide2[numero2];
}

setInterval("ChangeSlide2(1)", 4000);

var slide3 = new Array('image/series1.jpeg','image/series2.jpeg','image/series3.jpeg','image/series4.jpg');
var numero3 = 0;

function ChangeSlide3(sens) {
    numero3 = numero3 + sens;
    if (numero3 < 0)
        numero3 = slide3.length - 1;
    if (numero3 > slide3.length - 1)
        numero3 = 0;
    document.getElementById("slide3").src = slide3[numero3];
}

setInterval("ChangeSlide3(1)", 4000);



var slide4 = new Array('image/anime1.jpeg','image/anime2.jpeg','image/anime3.jpeg','image/anime4.webp');
var numero4 = 0;

function ChangeSlide4(sens) {
    numero4 = numero4 + sens;
    if (numero4 < 0)
        numero4 = slide4.length - 1;
    if (numero4 > slide4.length - 1)
        numero4 = 0;
    document.getElementById("slide4").src = slide4[numero4];
}

setInterval("ChangeSlide4(1)", 4000);



var slide5 = new Array('image/music1.webp','image/music2.jpeg','image/music3.png');
var numero5 = 0;

function ChangeSlide5(sens) {
    numero5 = numero5 + sens;
    if (numero5 < 0)
        numero5 = slide5.length - 1;
    if (numero5 > slide5.length - 1)
        numero5 = 0;
    document.getElementById("slide5").src = slide5[numero5];
}

setInterval("ChangeSlide5(1)", 4000);







var img1=document.querySelectorAll("svg");

var modal=document.querySelector(".mod");
var modal1=document.querySelector(".modal");

var cl=document.querySelector(".modal-close");
var i=0;


for(i=0;i<img1.length;i++){
img1[i].addEventListener('click' , function (){
  modal.classList.add('mod-active');
  modal1.classList.add('modal-active');
    modal.classList.remove('modal-close-active');
    modal.classList.remove('mod-close');



} );
}

cl.addEventListener('click' , function(){
  modal.classList.remove('mod-active');
  modal.classList.add('mod-close');
  modal1.classList.remove('modal-active');
} );
  