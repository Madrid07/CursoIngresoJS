/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 

12. Los datos requeridos son los siguientes:

A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/

function ComenzarIngreso () {

	var edad = window.prompt('¿Qué edad tiene?');

	while(!(edad > 17 && edad < 91)){
		edad = window.prompt('No contemplado, ingrese una edad válida...');
	}

	document.getElementById('Edad').value = 'Edad: ' + edad;

	var sexo = (window.prompt('¿Eres Hombre [M] o Mujer [F]?')).toUpperCase();

	while(!(sexo == 'M' || sexo == 'F')){
		sexo = (window.prompt('No contemplado, ingrese un género válido...')).toUpperCase();
	}

	document.getElementById('Sexo').value = 'Género: ' + sexo;

	var e_civil = window.prompt('¿Eres felizmente Soltero/a [1], Casado/a [2], Divorciado/a [3] o Viudo/a [4]?');

	while(!(e_civil > 0 && e_civil < 5)){
		e_civil = window.prompt('No contemplado, ingrese un estado civil válido...');	
	}

	document.getElementById('EstadoCivil').value = 'Estado Civil: ' + e_civil;

	var s_bruto = window.prompt('¿Cuál es tu sueldo bruto?', '8000');

	while(!(s_bruto >= 8000)){
		s_bruto = window.prompt('No contemplado, ingrese un sueldo bruto válido...');	
	}

	document.getElementById('Sueldo').value = 'Sueldo bruto: ' + s_bruto;

	var n_legajo = window.prompt('¿Cuál es tu número de legajo?', '1234');

	while(!(n_legajo.length == 4 && n_legajo.search(0) != 0)){
		n_legajo = window.prompt('No contemplado, ingrese un n° de legajo válido...');
	}

	document.getElementById('Legajo').value = 'N° de legajo: ' + n_legajo;

	var nacionalidad = (window.prompt('¿Eres Argentino/a [A], Extranjero/a [E] o Nacionalizado/a [N]?')).toUpperCase();

	while(!(nacionalidad == 'A' || nacionalidad == 'E' || nacionalidad == 'N')){
		nacionalidad = (window.prompt('No contemplado, ingrese una nacionalidad válida...')).toUpperCase();	
	}

	document.getElementById('Nacionalidad').value = 'Nacionalidad: ' + nacionalidad;

	window.alert('Felicitaciones! Has ingresado todo correctamente! Ahora vete a dormir...');
}
