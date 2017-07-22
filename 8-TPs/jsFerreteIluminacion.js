/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () {

 	var cantidad = parseInt(document.getElementById('Cantidad').value);
 	var index = document.getElementById('Marca').selectedIndex;

 	if (cantidad >= 6) {
 		document.getElementById('precioDescuento').value = cantidad * 35 / 2;
 	} else if (cantidad <= 2) {
 		document.getElementById('precioDescuento').value = cantidad * 35;
 	}


 	if (index == 0 && cantidad == 5) {
		document.getElementById('precioDescuento').value = cantidad * 35 + cantidad * 35 * 0.40;
 	} else if (index != 0 && cantidad == 5) {
		document.getElementById('precioDescuento').value = cantidad * 35 + cantidad * 35 * 0.30;
 	}


 	if ((index == 0 || index == 1) && cantidad == 4) {
		document.getElementById('precioDescuento').value = cantidad * 35 + cantidad * 35 * 0.25;
 	} else if ((index != 0 && index != 1) && cantidad == 4) {
		document.getElementById('precioDescuento').value = cantidad * 35 + cantidad * 35 * 0.20;
 	}


 	if (index == 0 && cantidad == 3) {
		document.getElementById('precioDescuento').value = cantidad * 35 + cantidad * 35 * 0.15;
 	} else if (index == 1 && cantidad == 3) {
		document.getElementById('precioDescuento').value = cantidad * 35 + cantidad * 35 * 0.10;
 	} else if ((index != 0 && index != 1) && cantidad == 3) {
		document.getElementById('precioDescuento').value = cantidad * 35 + cantidad * 35 * 0.05;
 	}
	
	var importe = document.getElementById('precioDescuento').value;

	if (importe >= 120) {
 		window.alert('Usted pagó ' + parseInt(importe *= 0.10) + ' de IIBB.');
 	}
 }

