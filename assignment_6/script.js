// JavaScript Document

// User selects product from shop page, index is sent from html page to identify product
function prodSelect(index){
	sessionStorage.setItem("selected", index);
}


var selected = sessionStorage.getItem("selected");

var products = [ ];
var cartProducts = [];

// Array of product options with all color options
// product[selected] = Store Name, Product Name, Price, Quant, Updated Price, Color Selected, Material Selected, Cart Display Image
products[0] = new Array("Tube Pillow Set", "Joe Colombo Tube Chair", 4200, 0, 0, "color", "material", "image");
products[1] = new Array("propertube.png", "propertube1.png", "propertube2.png", "propertube3.png");

products[2] = new Array("Geode Couch Set", "Alton Jackson Stone Chair", 12800,  0, 0, "color", "material", "image");
products[3] = new Array("cube.png", "cube1.png", "cube2.png", "cube3.png");

products[4] = new Array("Sail Beanbag", "Laura Len Floor Pillow", 1560,  0, 0, "color", "material", "image");
products[5] = new Array("sailpillow.jpg", "sailpillow1.png", "sailpillow2.png", "sailpillow3.png");


products[6] = new Array("Inflatable Chair", "Lil La Mama Chair", 2299,  0, 0, "color", "material", "image");
products[7] = new Array("lamamachair.jpg", "lamamachair1.png", "lamamachair2.png", "lamamachair3.png");

products[8] = new Array("Stone Pillow Set", "Rick Simmons Floor Pillow Set", 5580,  0, 0, "color", "material", "image");
products[9] = new Array("stonepillow.jpg", "stonepillow1.png", "stonepillow2.png", "stonepillow3.png");

products[10] = new Array("Tube Couch", "Alex Jones Set of Two", 6790,  0, 0, "color", "material", "image");
products[11] = new Array("longtubes.jpg", "longtubes1.png", "longtubes2.png", "longtubes3.png");

products.push(12);

var quant = 0;
var color = "Select Color";
var material = "Select Material";

var storeName = products[selected][0];
var prodName = products[selected][1];
var price = products[selected][2];
var productImg = products[Number(selected)+1][0];

//creates product detail page with details from array
function productDetailPage(){
	document.getElementById("price").innerHTML = "$" + price;
	document.getElementById("storeName").innerHTML = "____" + storeName + "____";
	document.getElementById("prodName").innerHTML =  prodName;
	document.getElementById("productImg").src = productImg;
}

//handles change in color option, changes image, updates product description
function changeColor(){
	var colorOption = document.getElementById("colorOption");
	color = colorOption.options[colorOption.selectedIndex].text;
	document.getElementById("colorDesc").innerHTML = color;
	var colorPicked = products[Number(selected)+1][colorOption.selectedIndex];
	if (color == "Select Color") {
		document.getElementById("productImg").src = products[Number(selected)+1][0];
	} else{
		document.getElementById("productImg").src = colorPicked;
		products[selected][5] = color;
		products[selected][7] = colorPicked;
		products.push(2);
	}
	
}

//handles change in material option, updates product description
function changeMaterial(){
	var materialOption = document.getElementById("materialOption");
	material = materialOption.options[materialOption.selectedIndex].text;
	document.getElementById("materialDesc").innerHTML = material;
	products[selected][6] = material;
	products.push(1);
}

//handles change in quantity option, changes price, updates product description
function changeQuant(){
	var quantOption = document.getElementById("quantOption");
	quant = quantOption.options[quantOption.selectedIndex].text;
	document.getElementById("quantDesc").innerHTML = quant;
	var displayPrice = price * quant;
	document.getElementById("price").innerHTML = "$" + displayPrice;
	products[selected][4] = displayPrice;
	products[selected][3] = quant;
	products.push(2);
}

//adds product with specified options to cart
function addToCart() {
	document.getElementById("cartQuant").innerHTML = quant;
	cartProducts.unshift(products[selected]);
	window.localStorage.setItem("cartProductsSaved", cartProducts);
}

var cartProductsSaved = window.localStorage.getItem("cartProductsSaved");
var cartProductsDisplay = cartProductsSaved.split(",");
var cartProductsDisplayArray = []

//creates dynamic cart
function displayCart(){	
	
	//seperates long 1d array into 2d array with 8 elements per array
	while (cartProductsDisplay.length){
		cartProductsDisplayArray.push(cartProductsDisplay.splice(0,8));
	}
	
	//loops throuhg each element per array
	for (var i = 0; i <cartProductsDisplayArray.length; i++){
		
		// creates cart objects and changes values 
		var cartItemsDiv = document.createElement("div");
		document.body.appendChild(cartItemsDiv);
		cartItemsDiv.className = 'cartItem';
		cartItemsDiv.innerHTML = '<img src = "' + cartProductsDisplayArray[i][7] + '" alt = "">';
		
		var cartOptionsDiv = document.createElement("div");
		cartItemsDiv.appendChild(cartOptionsDiv);
		cartOptionsDiv.className = 'cartOptions';
		cartOptionsDiv.innerHTML = '<span id = "cartName">' + cartProductsDisplayArray[i][1] + '</span> <p class = "dropdownDesc" id = "colorDesc">' + cartProductsDisplayArray[i][5]+ '</p> <p class = "dropdownDesc" id = "materialDesc">' + cartProductsDisplayArray[i][6] + '</p> <p class = "dropdownDesc" id = "quantDesc">' + cartProductsDisplayArray[i][3] + '</p>';

		var cartPriceDiv = document.createElement("div");
		cartItemsDiv.appendChild(cartPriceDiv);
		cartPriceDiv.className = 'cartPrice';
		cartPriceDiv.innerHTML = '<span id = "price">' + "$" + cartProductsDisplayArray[i][4] + '</span>';

		var remove = document.createElement("div");
		remove.innerHTML = '<button onclick="removeFromCart('+i+')" id = "addToCart">Remove</button>'
		cartOptionsDiv.appendChild(remove);
		
		var total = 0;
		total = Number(cartProductsDisplayArray[i][4]) *cartProductsDisplayArray.length;
		document.getElementById("taxNum").innerHTML = "Total: $" + total;
	}
}

// removes objects from cart
function removeFromCart(productNum){
	cartProducts.splice(productNum, 1);
	displayCart();
}




