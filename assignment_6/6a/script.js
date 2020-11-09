// JavaScript Document

var quant = 0;
var color = "Select Color";
var material = "Select Material";
var price = 0;

function changeColor(){
	var colorOption = document.getElementById("colorOption");
	color = colorOption.options[colorOption.selectedIndex].text;
	
	if (color == "After School Special") {
		document.getElementById("productImg").src = "knotknot3.jpeg";
	} 
	if (color == "Select Color") {
		document.getElementById("productImg").src = "knotknot3.jpeg";
	} 
	
	if (color == "Morning Haze") {
		document.getElementById("productImg").src = "tubeblack.jpg";
	} 
	
	if (color == "Cozy Denim") {
		document.getElementById("productImg").src = "tubered.png";
	} 
	
	if (color == "Rainy Day") {
		document.getElementById("productImg").src = "tubeyellow.jpg";
	}
	
	document.getElementById("colorDesc").innerHTML = color;
	updateCart(col);
}

function changeMaterial(){
	var materialOption = document.getElementById("materialOption");
	var material = materialOption.options[materialOption.selectedIndex].text;
	
	document.getElementById("materialDesc").innerHTML = material;
}

function changeQuant(){
	var quantOption = document.getElementById("quantOption");
	quant = quantOption.options[quantOption.selectedIndex].text;
	
	document.getElementById("quantDesc").innerHTML = quant;
	price = 4200 * quant;
	document.getElementById("price").innerHTML = "$" + price;
}

function addToCart() {
	document.getElementById("cartQuant").innerHTML = quant;
}

function updateCart(){
	document.getElementById("colorDesc").innerHTML = color;
	document.getElementById("materialDesc").innerHTML = material;
	document.getElementById("quantDesc").innerHTML = quant;
	document.getElementById("price").innerHTML = "$" + price;

}

