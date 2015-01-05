var Cart = function() {
	this.items = [];
	this.total = 0;
};

Cart.prototype.updateTotal = function() {
	var total = 0;
	this.items.forEach(function(obj){
		total += obj.price;
	});
	return total.toString();
};

Cart.prototype.addItem = function(item) {
	this.items.push(item);
	$("#cart-list").append(item.displayThumbnail());
	$("#total").text(this.updateTotal() + ".00");
};

$(document).ready(function(){
	var cart = new Cart;
	$('body').on("click", '.soap-buy', function(event){
		var index = $(this).closest(".soap-container").attr("data-id");
		cart.addItem(soaps[index]);
	});
});