var Order = function() {
  this.pizza = null; //An order has a pizza (a pizza is not an order)
  this.beverage = null; //An order has a beverage
};

//Root function in a prototype chain
var Pizza = function() {
  this.toppings = []; //We create an array because there can be many toppings
  this.crustThickness = 1; //Assume this means 1 inch. We want to base crust thickness on a number
  // this.setCrustThickness: function(){

  // } //This will work but everytime you create a new instance of this object you will create this method, which takes up processing power and memory
};

Pizza.prototype.setCrustThickness = function (thickness){
  this.crustThickness = this.crustThickness * thickness
} //Doing it this way will not re-create it everytime you create a new instance. Instead, it exists on Pizza's prototype, so its accessible on the prototype chain.

//Here are the crust thickness options
var DeepDish = function() {
  this.description = 'Chewy and greasy, but so filling!'
};
DeepDish.prototype = new Pizza() //Now DeepDish has the prototype of Pizza. However, an instance of a deep dish pizza has not yet been created
var myPizza = new DeepDish() //Now an instance of a deep dish pizza has been created and we can call properties and methods on it
myPizza.setCrustThickness(3)

var ThinCrust = function() {
  this.description = 'Crispy and light foldable fun!'
};
ThinCrust.prototype = new Pizza()

var TraditionalHandTossed = function () {
  this.description = "Boring, but won't offend picky eaters."
}
TraditionalHandTossed.prototype = new Pizza()

var Topping = function() {

};

var Pepperoni = function() {

};

var Mushroom = function() {

};

var Beverage = function() {

};

var Soda = function() {

};

var FruitPunch = function() {

};