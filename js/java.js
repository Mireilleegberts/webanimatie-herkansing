var komma = document.getElementById("komma");
var lightm = document.getElementById("m");
var lighto = document.getElementById("o");

komma.addEventListener('click', function () {
    komma.classList.toggle('kommaMove');

});

lightm.addEventListener('click', function () {
    lightm.classList.add('Mkleur');
    lighto.classList.add('oKleur');
    lightm.classList.remove('Mkleur');
    lighto.classList.remove('oKleur');
});

lighto.addEventListener('click', function () {
    lighto.toggle('#oKleur');
});

console.log("Hello world!");



