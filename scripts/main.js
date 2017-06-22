var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello world!';

var miImage = document.querySelector('img');

miImage.onclick = function() {
    var miSrc = miImage.getAttribute('src');
    if(miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute ('src','images/attack.png');
    } else {
      miImage.setAttribute ('src','images/aa.png');
    }
}

//-------------------------------------------------
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');
//-----------------------------------------------------

function seleccionnombre() {
    var miNombre = prompt('por favor ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Mozilla is cool, ' + miNombre;
}

if(!localStorage.getItem('nombre')) {
    seleccionnombre();
}
else {
    var storedName = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'Bienvenido, ' + storedName;
}  

miBoton.onclick = function() {
    seleccionnombre();
}
