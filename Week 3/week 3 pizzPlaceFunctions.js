
// 1. Create an array of pizzaToppings with at least four different toppings

const pizzaTopping =["Sausage,","Pepperoni,"," Green Olives,","Pineapples,",
"Green Peppers,","Red Peppers,","Yellow Peppers,","Black Olives."];

/*2.Create a greetCustomer function that prints a message that welcomes a guest, then informs
them of the available toppings by looping over pizzaToppings
(don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)*/


function greetCustomer(){
console.log(`welcome to Maxwell's Pizza Palace our toppings are `);
for(i=0/*creates and stores variable*/ ;
i<pizzaTopping.length;/*sets the condition for the for loop*/
i++/*tells the for loop how to iterate */){
console.log(pizzaTopping[i]);
}}
greetCustomer();// "invokes" or "calls"  the function greetCustomer.


//3. Create a getPizzaOrder function that
  //has the parameters size, crust and an indefinite amount of toppings. As inputs
  //outputs a list with the size, crust and toppings
function getPizzaOrder(size,crust,...toppings){// creates the function
console.log(`one order of ${size} ${crust} crust with ${toppings} toppings coming right up!`)
}
getPizzaOrder("large","thin","Green pepper","black Olives","peperoni");// invokes the function

//Create a preparePizza function that
function preparePizza(pizzaArr){
const [size,crust,toppings] = pizzaArr;//has an array as its parameter with three items: a size, a crust, and a list of toppings
console.log(`like..."Cooking pizza"...`)//prints something like "...Cooking pizza..."
const pizza={// creats object pizza
size:size,
crust:crust,
toppings:toppings
};
return pizza;
}
const pizzaArr=[["XXL", "Thin Crust", ["Pepperoni", "Mushrooms", "Green Peppers",
"Black-olives","chicken",]]];
const myPizza= preparePizza(pizzaArr);
console.log(myPizza);

//5.) Create a serve Pizza function that
  // has a parameter of pizza object
  /*logs a message that the pizza is ready and repeats the order, I.E. "Order up heres your large"*/
// out puts the same pizzObject that was passed in
function servePizza(pizza){
console.log( "Order up heres your"+pizza);
return pizza;
}
servePizza(myPizza);
