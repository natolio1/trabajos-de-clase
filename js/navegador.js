/*====================================
Cookies del navegador
La propiedad cookieEnabled devuelve verdadero si las cookies están habilitadas; de lo contrario, es falso:
======================================*/
document.getElementById("demo").innerHTML =
"navigator.cookieEnabled es: " + navigator.cookieEnabled;


/*=========================================
Nombre de la aplicación del navegador
La propiedad appName devuelve el nombre de la aplicación del navegador:
=================================================*/
//document.getElementById("demo1").innerHTML =
//"navigador.appName es: " +navigator.appName;

//var appName ="demo1";
//document.write("demo1").innerHTML=
//("Nombre del navegador: " + navigator.appName);
var txt = "";
txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
document.getElementById("demo1").innerHTML = txt;
/*============================================
Nombre del código de la aplicación del navegador
La propiedad appCodeName devuelve el nombre del código de la aplicación del navegador:
===============================================*/
/*document.getElementById("demo2").innerHTML =
"navigador.appCodeName es: " +navigator.appCodeName;
*/
txt += "<p>Browser Name: " + navigator.appName + "</p>";
document.getElementById("demo2").innerHTML = txt;
/*======================================0
El motor del navegador
El producto propiedad devuelve el nombre del producto del motor del navegador:
===========================================*/
document.getElementById("demo3").innerHTML =
"navigador.product es: " +navigator.product;

/*======================================
La versión del navegador
La propiedad appVersion devuelve información de versión sobre el navegador:
=============================================*/
//document.getElementById("demo4").innerHTML = navigator.appVersion;
txt += "<p>Browser Version: " + navigator.appVersion + "</p>";

document.getElementById("demo4").innerHTML = txt;
/*=================================================0
El agente del navegador
La propiedad userAgent devuelve el encabezado de agente de usuario enviado por el navegador al servidor:
====================================================*/
//document.getElementById("demo5").innerHTML = navigator.userAgent;
txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
document.getElementById("demo5").innerHTML = txt;
/*=========================================0
La plataforma del navegador
La propiedad de la plataforma devuelve la plataforma del navegador (sistema operativo):
=============================================*/
//document.getElementById("demo6").innerHTML = 
//"navigator.platform es "+ navigator.platform;
txt += "<p>Platform: " + navigator.platform + "</p>";
document.getElementById("demo6").innerHTML = txt;
/*===========================================0
El lenguaje del navegador
La propiedad de idioma devuelve el idioma del navegador:
============================================*/
//document.getElementById("demo7").innerHTML = 
//" navegator.lenguage es: " +navigator.language;
txt += "<p>Browser Language: " + navigator.language + "</p>";
document.getElementById("demo7").innerHTML = txt;
/*======================================
Es el navegador en línea?
La propiedad onLine devuelve verdadero si el navegador está en línea:
==========================================*/
//document.getElementById("demo8").innerHTML = 
//"navigator.onLine es:" +navigator.onLine;
txt += "<p>Browser Online: " + navigator.onLine + "</p>";
document.getElementById("demo8").innerHTML = txt;
/*========================================0
Está Java habilitado?
El método javaEnabled () devuelve verdadero si Java está habilitado:
============================================*/
document.getElementById("demo9").innerHTML = 
"javaEnabled es:  "+navigator.javaEnabled();

