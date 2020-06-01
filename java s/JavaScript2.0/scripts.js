function vender(){
	var precios=document.getElementsByCalssName('precio');
	console.log(precios);
	total=0;
	for (var i = 0; i<precios.lenght; i++) {
		total=total+parseFloat(precios[i].value);
	}

	/*precios.forEach(function(elemento){
		console.log(elemento);
	});*/

	document.getElementById("salida").innerHTML="Total: "+total;
}