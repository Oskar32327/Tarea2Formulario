	let Boton = document.getElementById("btn");
	const nombre = document.getElementById("nombre");
	const apellidos = document.getElementById("apellidos");
	const dni = document.getElementById("dni");
	const estado = document.getElementById("estado");
	const hobbys = document.getElementsByName("hobby");
	const nacimiento = document.getElementById("nacimiento");
	const condiciones = document.getElementById("condiciones");
	const resultado = document.getElementById("resultado");


	Boton.onclick = mostrar;

	let texto = [];
	let hobbyElegido = "";
	let eleccionCondiciones = "No";


function añadirElementos(resultado){
	texto.push(resultado.value);
	console.log(texto);
}


function mostrar(){

	for (var i = 0, length = hobbys.length; i < length; i++) {
		if (hobbys[i].checked) {
		   hobbyElegido = hobbys[i];
		   break;
		}
	}

	if(condiciones.checked){
		eleccionCondiciones = "Sí";
	}

	resultado.classList.remove("ocultar");

	resultado.value = 
	"Nombre: " + nombre.value + 
	", apellidos: " + apellidos.value + 
	", dni: " + dni.value + 
	", estado actual: " + estado.value + 
	", fecha de nacimiento: " + nacimiento.value +
	" y hobby: " + hobbyElegido.value +
	". ¿Ha aceptado las condiciones? " + eleccionCondiciones;

	añadirElementos(resultado);
	
	return false;
} 


