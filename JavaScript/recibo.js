function imagen(foto){
	
	switch(foto){
		case "1":
			location.href = "producto.html?pro=1";
			break;
		case "2":
			location.href = "producto.html?pro=2";
			break;
		case "3":
			location.href = "producto.html?pro=3";
			break;
		case "4":
			location.href = "producto.html?pro=4";
			break;
		case "5":
			location.href = "producto.html?pro=5";
			break;
	}
}

 function getImagen(nombre){
	var parametro = new URLSearchParams(window.location.search);
	var valor = parametro.get(nombre); 
	var textotitulo = "";
	var textoparrafo = "";
	var textoprecio = "";
	var textocantidad = "";
	console.log(valor);


	switch(valor){
		case "1":
			document.getElementById("item").src="css/img/Imageen_candy_one.png";
			textotitulo = "Palomitas de maíz cubiertas con chocolate y dulces M&M";
			textoparrafo = "Disfrutas tus deliciosos candy pop mientras ves una películas, una serie, vas al trabaja o a la escuela, disfruta de tus canndy pop en cada momento.";
			textocantidad = "Cont.Net: 149 gramos";
			textoprecio = "$3.50";
			document.getElementById("tituloH2").innerHTML=textotitulo;
			document.getElementById("P1").innerHTML=textoparrafo;
			document.getElementById("P2").innerHTML=textocantidad;
			document.getElementById("P3").innerHTML=textoprecio;
			break;
		case "2":
			document.getElementById("item").src="css/img/Candy_two_xdddd.png";
			textotitulo = "M&M, tableta de chocolate con leche relleno con grageas de cereales crispy";
			textoparrafo = "Vive la mejor experiencia de sabores con las tabletas de chocolate con leche, el mejor snack para compartir tus mejores momentos, disfruta la mejor experiencia de sabores que vivirás con esta tableta de chocolate.";
			textocantidad = "Cont.Net: 150 gramos";
			textoprecio = "$2,47";
			document.getElementById("tituloH2").innerHTML=textotitulo;
			document.getElementById("P1").innerHTML=textoparrafo;
			document.getElementById("P2").innerHTML=textocantidad;
			document.getElementById("P3").innerHTML=textoprecio;
			break;
		case "3":
			document.getElementById("item").src="css/img/arbol_mua.png";
			textotitulo = "Golosinas M&M, rellenas de chocolate con maní";
			textoparrafo = "Disfruta del sabor de las golosinas m&m rellenas de chocolate y maní, en su mejor presentación, la mejor forma de degustar y compartir los colores mas deliciosos";
			textocantidad = "Cont.Net: 49,3 gramos";
			textoprecio = "$1.13";
			document.getElementById("tituloH2").innerHTML=textotitulo;
			document.getElementById("P1").innerHTML=textoparrafo;
			document.getElementById("P2").innerHTML=textocantidad;
			document.getElementById("P3").innerHTML=textoprecio;
		
			break;
		case "4":
			document.getElementById("item").src="css/img/four_como_el_carro_xd.png";
			textotitulo = "Cookie Dough";
			textoparrafo = "Comparte el verdadero sabor de una verdadera galleta, enmarca tus mejores momentos acompañado de una experiencia de sabores y has que tus momentos se han aun mas inolvidables.";
			textocantidad = "30.6 gramos";
			textoprecio = "$1.10";
			document.getElementById("tituloH2").innerHTML=textotitulo;
			document.getElementById("P1").innerHTML=textoparrafo;
			document.getElementById("P2").innerHTML=textocantidad;
			document.getElementById("P3").innerHTML=textoprecio;
			break;
		case "5":
			document.getElementById("item").src="css/img/Que_te_quiten_el_inter_porfavor.png";
			textotitulo = "Brownies de chocolate cubiertos de dulces m&m";
			textoparrafo = "Comparte la mejor experiencias en brownies con tus amigos y familia, saborea la mejor experiencia de sabores que jamás olvidaras";
			textocantidad = "PAQUETE X 55 GRS";
			textoprecio = "$2,47";
			document.getElementById("tituloH2").innerHTML=textotitulo;
			document.getElementById("P1").innerHTML=textoparrafo;
			document.getElementById("P2").innerHTML=textocantidad;
			document.getElementById("P3").innerHTML=textoprecio;
			break;

	}

}

/*FUNCION DE ENVIO Y IMPRESION DE DATOS DE FORMULARIO*/

function cotizacion(argumento){
	var parametro = new URLSearchParams(window.location.search);
	var valor2 = parametro.get(argumento); 
	console.log(valor2);

    //variables de entrada
	var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var cantidad = parseFloat(document.getElementById('cantidad').value);

	//variable constante
    const emailCorrect = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	const precio = 3.50;
	const precio2 = 2.47;
	const precio3 = 1.13;
	const precio4 = 2.69;
	const precio5 = 2.70;
	const  iva = 0.13;
	


    //variables de salida
    var subtotal;
    var subtotalIva;
    var totalCancelar;

	//variable de control
	var campos = true;

	switch(valor2){
		case "1":
			if (emailCorrect.test(email) && isNaN(nombre)){
				if(cantidad % 1 == 0){
				   
				   //procesos
				   subtotal = cantidad * precio;
				   subtotal1 = subtotal.toPrecision(3);
				   subtotalIva = (precio * iva) * cantidad;
				   subtotalIva1 = subtotalIva.toPrecision(3);
				   totalCancelar = subtotal + subtotalIva;
				   totalCancelar1 = totalCancelar.toPrecision(3);
			
				   //Salida de datos
				   
				   
			
				   document.getElementById("nombreobtenido").innerHTML=nombre;
				   document.getElementById("correoobtenido").innerHTML=email;
				   document.getElementById("subtotalPagar").innerHTML=subtotal1;
				   document.getElementById("ivaPagar").innerHTML=subtotalIva1;
				   document.getElementById("totalCancelar").innerHTML=totalCancelar1;
			
			
			
			
				}else{
					/*IMPRIME MENSAJE DEBIDO A QUE EL NUMERO  NO ES ENTERO */ 
					alert ("ERROR... dato no valido");
					
				   
				   
				   
				}
			}else{
				/*IMPRIME MENSAJE DEBIDO A QUE EL CORREO Y NOMBRE ES INCORRECTO*/ 
				alert ("ERROR... dato no valido");
				
			}

			break;
		case "2":
			if (emailCorrect.test(email) && isNaN(nombre)){
				if(cantidad % 1 == 0){
				   
				   //procesos
				   subtotal = cantidad * precio2;
				   subtotal2 = subtotal.toPrecision(3);
				   subtotalIva = precio2 *iva*cantidad;
				   subtotalIva2 = subtotalIva.toPrecision(3);
				   totalCancelar = subtotal + subtotalIva;
				   totalCancelar2 = totalCancelar.toPrecision(3);
			
				   //Salida de datos
				   
				   
			
				   document.getElementById("nombreobtenido").innerHTML=nombre;
				   document.getElementById("correoobtenido").innerHTML=email;
				   document.getElementById("subtotalPagar").innerHTML=subtotal2;
				   document.getElementById("ivaPagar").innerHTML=subtotalIva2;
				   document.getElementById("totalCancelar").innerHTML=totalCancelar2;
			
			
			
			
				}else{
					/*IMPRIME MENSAJE DEBIDO A QUE EL NUMERO  NO ES ENTERO */ 
					alert ("ERROR... dato no valido");
				   
				   
				   
				}
			}else{
				/*IMPRIME MENSAJE DEBIDO A QUE EL CORREO Y NOMBRE ES INCORRECTO*/ 
				alert ("ERROR... dato no valido"); 
			}

			break;
		case "3":
			if (emailCorrect.test(email) && isNaN(nombre)){
				if(cantidad % 1 == 0){
				  
				   //procesos
				   subtotal = cantidad * precio3;
				   subtotal3 = subtotal.toPrecision(3);
				   subtotalIva = (precio3 * iva) * cantidad;
				   subtotalIva3 = subtotalIva.toPrecision(3);
				   totalCancelar = subtotal + subtotalIva;
				   totalCancelar3 = totalCancelar.toPrecision(3);
			
				   //Salida de datos
				   
				   
			
				   document.getElementById("nombreobtenido").innerHTML=nombre;
				   document.getElementById("correoobtenido").innerHTML=email;
				   document.getElementById("subtotalPagar").innerHTML=subtotal3;
				   document.getElementById("ivaPagar").innerHTML=subtotalIva3;
				   document.getElementById("totalCancelar").innerHTML=totalCancelar3;
			
			
			
			
				}else{
					/*IMPRIME MENSAJE DEBIDO A QUE EL NUMERO  NO ES ENTERO */ 
					alert ("ERROR... dato no valido");
				   
				   
				   
				}
			}else{
				/*IMPRIME MENSAJE DEBIDO A QUE EL CORREO Y NOMBRE ES INCORRECTO*/ 
				alert ("ERROR... dato no valido");  
			}
			break;
		case "4":
			if (emailCorrect.test(email) && isNaN(nombre)){
				if(cantidad % 1 == 0){
				  
				   //procesos
				   subtotal = cantidad * precio4;
				   subtotal4 = subtotal.toPrecision(3);
				   subtotalIva = precio4 * iva * cantidad;
				   subtotalIva4 = subtotalIva.toPrecision(3);
				   totalCancelar = subtotal + subtotalIva;
				   totalCancelar4 = totalCancelar.toPrecision(3);
			
				   //Salida de datos
				   
				   
			
				   document.getElementById("nombreobtenido").innerHTML=nombre;
				   document.getElementById("correoobtenido").innerHTML=email;
				   document.getElementById("subtotalPagar").innerHTML=subtotal4;
				   document.getElementById("ivaPagar").innerHTML=subtotalIva4;
				   document.getElementById("totalCancelar").innerHTML=totalCancelar4;
			
			
			
			
				}else{
					/*IMPRIME MENSAJE DEBIDO A QUE EL NUMERO  NO ES ENTERO */ 
					alert ("ERROR... dato no valido");
				   
				   
				   
				}
			}else{
				/*IMPRIME MENSAJE DEBIDO A QUE EL CORREO Y NOMBRE ES INCORRECTO*/ 
				alert ("ERROR... dato no valido");  
			}
			break;
		case "5":
			if (emailCorrect.test(email) && isNaN(nombre)){
				if(cantidad % 1 == 0){
				   
				   //procesos
				   subtotal = cantidad * precio5;
				   subtotal5 = subtotal.toPrecision(3);
				   subtotalIva = (precio5 * iva) * cantidad;
				   subtotalIva5 = subtotalIva.toPrecision(3);
				   totalCancelar = subtotal + subtotalIva;
				   totalCancelar5 = totalCancelar.toPrecision(3);
			
				   //Salida de datos
				   
				   
			
				   document.getElementById("nombreobtenido").innerHTML=nombre;
				   document.getElementById("correoobtenido").innerHTML=email;
				   document.getElementById("subtotalPagar").innerHTML=subtotal5;
				   document.getElementById("ivaPagar").innerHTML=subtotalIva5;
				   document.getElementById("totalCancelar").innerHTML=totalCancelar5;
			
			
			
			
				}else{
					/*IMPRIME MENSAJE DEBIDO A QUE EL NUMERO  NO ES ENTERO */ 
					alert ("ERROR... dato no valido");
				   
				   
				   
				}
			}else{
				/*IMPRIME MENSAJE DEBIDO A QUE EL CORREO Y NOMBRE ES INCORRECTO*/ 
				alert ("ERROR... dato no valido");  
			}
			break;
	}

	if(document.getElementById('nombre').value.length < 2){
		campos =  false;
	}else if(document.getElementById('email').value.length < 2){
		campos =  false;
	}else if(document.getElementById('cantidad').value.length < 1){
		campos = false;
		alert('ERROR.Verifique los campos...');
	}
	
	if(!campos){
		alert('ERROR...REVISAR CAMPOS.');
		//VALIDACION SI CORREO, COMBRE Y NUMERO SON CORRECTOS LA VENTANA EMERGENTE SE MOSTRARA
	}else if(emailCorrect.test(email) && isNaN(nombre) && cantidad % 1 === 0){
		/*POP-UP*/
		var impr = document.getElementById('impr'),
		pop = document.getElementById('pop'),
		recibo = document.getElementById('recibo'),
		fa = document.getElementById('fa-solid fa-square-xmark');
	
		impr.addEventListener('click', function(){
			pop.classList.add('active');
			recibo.classList.add('active');
		});
	
		fa.addEventListener('click', function(){
			pop.classList.remove('active');
			recibo.classList.remove('active');
		});
	}

}
