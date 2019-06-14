var btn = document.querySelector(".darkModes");
var komma = document.getElementById("komma");
var lightm = document.getElementById("m");
var lighto = document.getElementById("o");
var lineColor = document.getElementById("line");
var tekstColor = document.getElementById("tekst");
var kommaColor = document.getElementById("komma");
var newBackground= document.querySelector(".content-container");

var vliegtuig = document.querySelector(".plane");

console.log(lighto)

komma.addEventListener('click', function () {
    komma.classList.toggle('kommaMove');

});

btn.addEventListener('click', function () {
    btn.classList.toggle('btnLight');
    lightm.classList.toggle('Mkleur');
    lighto.classList.toggle('oKleur');
    tekstColor.classList.toggle('textLight');
    lineColor.classList.toggle('lineKleur');
    kommaColor.classList.toggle('kommaKleur');
    newBackground.classList.toggle('achtergrondDonker');
});


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        vliegtuig.classList.toggle('planeMove');
    }
    if(e.keyCode == 77){
        lightm.classList.toggle('mKey');
    }
}

