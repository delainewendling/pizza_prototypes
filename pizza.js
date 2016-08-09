var Order = function() {
  this.pizza = null; //An order has a pizza (a pizza is not an order)
  this.beverage = null; //An order has a beverage
};

//Root function in a prototype chain
var Pizza = function() {
  this.crustThickness = 1; //Assume this means 1 inch. We want to base crust thickness on a number
  // this.setCrustThickness: function(){

  // } //This will work but everytime you create a new instance of this object you will create this method, which takes up processing power and memory
};

Pizza.prototype.setCrustThickness = function (thickness){
  this.crustThickness = this.crustThickness * thickness
} //Doing it this way will not re-create it everytime you create a new instance. Instead, it exists on Pizza's prototype, so its accessible on the prototype chain.
Pizza.prototype.setToppings = function(topping) {
  this.toppings = this.toppings || []
  console.log("topping", topping)
  this.toppings.push(topping)
}

//Here are the crust thickness options. These crust thicknesses are pizzas. Therefore, these are IS-A relationships
var DeepDish = function() {
  this.description = 'Chewy and greasy, but so filling!'
  this.setToppings.call(this, toppings) //We're calling the method that's on the Pizza object. The this that we're referring to is the this instance of Deep Dish. This will make the toppings property on the Deep Dish object rather than on the Pizza object
  console.log("this toppings", this.toppings)
};
DeepDish.prototype = new Pizza() //Now DeepDish has the prototype of Pizza. However, an instance of a deep dish pizza has not yet been created
// var myDeepDishPizza = new DeepDish() //Now an instance of a deep dish pizza has been created and we can call properties and methods on it (even the one on its prototype)
// myDeepDishPizza.setCrustThickness(3) //this is now myDeepDishPizza

var ThinCrust = function() {
  this.description = 'Crispy and light foldable fun!'
  this.setToppings.call(this, toppings)
};
ThinCrust.prototype = new Pizza()

var TraditionalHandTossed = function () {
  this.description = "Boring, but won't offend picky eaters."
  this.setToppings.call(this, toppings)
}
TraditionalHandTossed.prototype = new Pizza()

//This is NOT a kind of pizza. Instead, a pizza has a topping. Therefore, this is another root of a prototype chain with its own IS-A objects
var Topping = function() {
  this.price = 0
};

var Pepperoni = function() {
  this.isSpicy = false //default to mild unless they specify
};
Pepperoni.prototype = new Topping()
Pepperoni.prototype.makeSpicy = function (){
  this.isSpicy = true //This is a setter function that allows us to change the spicyness of the pepperoni
}

var Mushroom = function() {
  this.name = "mushroom"
};
Mushroom.prototype = new Topping()

//Another root of a prototype chain
var Beverage = function() {
  this.size = "small"
};

var Soda = function() {

};
Soda.prototype = new Beverage() //setting up the Beverage function as the prototype of Soda

var FruitPunch = function() {
  this.size = "kids" //This is the default value for fruit punch. Just because there's a size property up the prototype chain doesn't mean there will be conflict
};
FruitPunch.prototype = new Beverage()

//Let's make an order
var myOrder = new Order()
var myBeverage = new FruitPunch()
var spicyPepperoni = new Pepperoni()
spicyPepperoni.makeSpicy() //Makes the pepperoni spicy
var dirtyFungus = new Mushroom()
var myToppings = [spicyPepperoni, dirtyFungus]
var myPizza = new DeepDish(..myToppings)
myPizza.setCrustThickness(3)
//We want to put the toppings on our pizza
console.log("my Pizza so far", myPizza)

//Add pizza and beverage to order
myOrder.pizza = myPizza
myOrder.beverage = myBeverage
console.log("my Order so far", myOrder)




// var myToppings = [spicyPepperoni, dirtyFungus]
// myPizza.toppings.push(...myToppings) //This will take all of the toppings in the toppings array and push them to the toppings property
