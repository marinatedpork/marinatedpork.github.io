var shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

var getRandom = function(arr, size) {
  var copy = arr.slice(0), rand = [];
  for (var i = 0; i < size && i < copy.length; i++) {
    var index = Math.floor(Math.random() * copy.length);
    rand.push(copy.splice(index, 1)[0]);
  }
  return rand;
};

var Soap = function(name, description, ingredients, thumbnailImage, displayImage, rating, price, id) {
	this.name 					= name;
	this.description	  = description;
	this.ingredients	  = ingredients;
	this.thumbnailImage = thumbnailImage;
	this.displayImage   = displayImage;
	this.rating 				= rating;
	this.price          = price;
	this.id 						= id;
};

Soap.prototype.displayDescription = function() {
	var htmlString = "<p class='soap-description inline-block'>";
			htmlString += this.description;
			return htmlString += "</p>";
};

Soap.prototype.displayIngredients = function() {
	var htmlString  = "<div class='soap-ingredients inline-block'>";
		htmlString   += "<h2 class='ingredients-title'>";
			htmlString += "Ingredients:";
			htmlString += "</h2>";
			htmlString += "<ul class='ingredients-list'>";
	this.ingredients.forEach(function(obj){
		htmlString += "<li>"+obj+"</li>";
	});
	return htmlString += "</ul></div>";
};

Soap.prototype.displayRating = function() {

	var rating = this.rating,
			treeActive = "<i class='fa fa-tree active'></i>",
			treeInactive = "<i class='fa fa-tree inactive'></i>",
			htmlString = "<span class='soap-rating-text float-left'>Rating:</span>",
			ratings = [];
	for (var i = rating - 1; i >= 0; i--) {
		ratings.push(treeActive);	
	};
	while	(ratings.length < 5) {
		ratings.push(treeInactive);	
	};
	return htmlString += ratings.join(" ");
};

Soap.prototype.buySoap = function() {
	var htmlString = "<span class='soap-buy pointer' data-price='"+this.price+"'>";
	htmlString += "<i class='fa fa-shopping-cart fa-2x float-left'></i>";
	return htmlString += "<span class='add-to-cart float-left'>Add to cart</span></span>"
};

Soap.prototype.displaySoap = function() {
	var htmlString = "<div class='soap-container center' data-id='"+this.id+"'>";
			htmlString += "<h1 class='soap-title'>";
			htmlString += "<span class='soap-name'>";
			htmlString += this.name;
			htmlString += "</span>"
			htmlString += "<span class='soap-price'>$";
			htmlString += this.price
			htmlString += ".00</span>"
			htmlString += "<span class='soap-rating'>";
			htmlString += this.displayRating();
			htmlString += "</span>"
			htmlString += this.buySoap();
			htmlString += "</h1>";
			htmlString += "<img class='soap-image inline-block' src="+this.displayImage+" />";
			htmlString += this.displayDescription();
			htmlString += this.displayIngredients();
	return htmlString + "</div>";
};

Soap.prototype.displayThumbnail = function() {
	return "<li><img class='inline-block thumbnail-image' src='"+this.thumbnailImage+"' /><span class='thumbnail-text inline-block'>"+this.name+"</span></li>"
};

var loremDecription = "Ut enim ad minim veniam;quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var ratings = [1,2,3,4,5];
var prices  = [10, 12];
var ingredients = ["Pine Needles", "Pebbles", "Lavender", "Rosemary", "Orange", "Love"];

var soaps = [
	new Soap("Pine Breeze", loremDecription, shuffle(ingredients), "http://i.imgur.com/WX7aCIMs.jpg", "http://i.imgur.com/WX7aCIM.jpg", getRandom(ratings, 1)[0], getRandom(prices, 1)[0], 0),
	new Soap("Rice Creek", loremDecription, shuffle(ingredients), "http://i.imgur.com/viAb98Ps.jpg", "http://i.imgur.com/viAb98P.jpg", getRandom(ratings, 1)[0], getRandom(prices, 1)[0], 1),
	new Soap("Butter Oak", loremDecription, shuffle(ingredients), "http://i.imgur.com/WX7aCIMs.jpg", "http://i.imgur.com/WX7aCIM.jpg", getRandom(ratings, 1)[0], getRandom(prices, 1)[0], 2),
	new Soap("Rice Creek", loremDecription, shuffle(ingredients), "http://i.imgur.com/viAb98Ps.jpg", "http://i.imgur.com/viAb98P.jpg", getRandom(ratings, 1)[0], getRandom(prices, 1)[0], 3),
	new Soap("Winter Moss", loremDecription, shuffle(ingredients), "http://i.imgur.com/viAb98Ps.jpg", "http://i.imgur.com/viAb98P.jpg", getRandom(ratings, 1)[0], getRandom(prices, 1)[0], 4)
];
	
$(document).ready(function() {
	$.each(soaps, function(index, obj){
		$("#product-container").append(obj.displaySoap());
	});
});

