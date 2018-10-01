/*==============================0
Ventana Ubicación Href
La propiedad window.location.href devuelve la URL de la página actual.
=================================*/
document.getElementById("demo").innerHTML = 
"la URL completa de esta pagina es: " + window.location.href;

/*====================================
Nombre de host de ubicación de ventana
La propiedad window.location.hostname devuelve el nombre del host de Internet (de la página actual).
=======================================*/
document.getElementById("demo1").innerHTML =
"el nombre del host de la pagina es:  " + window.location.hostname;

/*=================================
Nombre de ruta de ubicación de ventana
La propiedad window.location.pathname devuelve la ruta de acceso de la página actual.
======================================*/
document.getElementById("demo2").innerHTML =
"la ruta de la pagina es : " + window.location.pathname;

/*===================================0
Protocolo de ubicación de ventana
La propiedad window.location.protocol devuelve el protocolo web de la página.
==========================================0*/
document.getElementById("demo3").innerHTML =
"el protocolo de la pagina es: " + window.location.protocol;

/*=======================================
Puerto de ubicación de ventana
La propiedad window.location.port devuelve el número del puerto de host de Internet (de la página actual).
=============================================*/
document.getElementById("demo4").innerHTML =
"the URL port numer of the current page is: " + window.location.port;

