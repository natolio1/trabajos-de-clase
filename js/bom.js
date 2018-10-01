/*=========================================
the browser object (bom) allows JavaScript to "talk to" the browser
=========================================*/


var w = window.innerWidth
	document.documentElement.clientWidth
	document.body.clientWidth;

	var h = window.innerHeight
		document.documentElement.clientHeight
		document.body.clientHeight;

	var x = document.getElementById("prueba");
	x.innerHTML = "Ancho de la ventana interior del navegador: " + w + ", altura ";


/*=========================================
window Screen Width
=========================================*/

document.getElementById("prueba2").innerHTML = "El ancho de la pantalla es " + screen.width;



/*=========================================
window Screen Width
=========================================*/

document.getElementById("prueba3").innerHTML = "El alto de la pantalla es " + screen.height;


/*=========================================
window Screen avaliable width
=========================================*/

document.getElementById("prueba4").innerHTML = "Ancho de pantalla disponible: " + screen.availWidth;


/*=========================================
window Screen avaliable height
=========================================*/

document.getElementById("prueba5").innerHTML = "Alto de pantalla disponible: " + screen.availHeight;

/*=========================================
window Screen color Depth
=========================================*/


