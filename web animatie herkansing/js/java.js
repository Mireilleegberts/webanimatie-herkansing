var komma = document.getElementById("komma");
var lightm = document.getElementById("m");
var lighto = document.getElementById("");

komma.addEventListener('click', function () {
    komma.classList.toggle('kommaMove');

});

lightm.addEventListener('click', function () {
    lightm.toggle('Mkleur');
    lighto.toggle('#oKleur');
});

lighto.addEventListener('click', function () {
    lighto.toggle('#oKleur');
});

console.log("Hello world!");
