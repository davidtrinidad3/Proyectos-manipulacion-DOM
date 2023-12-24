const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAleatorio(color) {
	let digitos = '123456789ABCDEF';
	let colorHex = '#';

	for (let i = 0; i < 6; i++) {
		let indiceAleatorio = Math.floor(Math.random() * 15);
		colorHex += digitos[indiceAleatorio];
	}

	return colorHex;
}

boton.addEventListener('click', function () {
	let colorAleatorio = generarColorHexAleatorio();
	// actualizar el texto
	color.textContent = colorAleatorio;
	// actualizar el color de fondo
	document.body.style.backgroundColor = colorAleatorio;
});
