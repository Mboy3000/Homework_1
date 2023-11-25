
// 1. Create an array of pizzaToppings with at least four different toppings

const { size } = require("mathjs");

const pizzaTopping =["Sausage,","Pepperoni,"," Green Olives,","Pineapples,",
"Green Peppers,","Red Peppers,","Yellow Peppers,","Black Olives."];

/*2.Create a greetCustomer function that prints a message that welcomes a guest, then informs
them of the available toppings by looping over pizzaToppings
(don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)*/


function greetCustomer(){
let greeting=`welcome to Maxwell's Pizza Palace our toppings are `;

for(let topping of pizzaTopping){
greeting += `${topping}`;
}
console.log(greeting);
}
greetCustomer();// "invokes" or "calls"  the function greetCustomer.


//3. Create a getPizzaOrder function that
//has the parameters size, crust and an indefinite amount of toppings. As inputs
//outputs a list with the size, crust and toppings
function getPizzaOrder(size,crust,...toppings){
let order=(`one order of ${size} ${crust} crust with ${toppings} toppings coming right up!`)
for(let topping of toppings){
order+=`${topping}`;
}
console.log(`${order} coming right up!`);
return [size,crust,toppings];
}

getPizzaOrder("large","thin","Green pepper","black Olives","peperoni");
//Create a preparePizza function that
function preparePizza([size,crust,toppings]){  //has an array as its parameter with three items: a size, a crust, and a list of toppings
console.log(`like..."Cooking pizza"...`)//prints something like "...Cooking pizza..."
return{
size:size,
crust:crust,
toppings:toppings
};
}
let customerOrder = getPizzaOrder("XXL", "Thin Crust", "Pepperoni", "Mushrooms", "Green Peppers",
"Black-olives","chicken");

function preparePizza([orderSize,orderCrust,orderToppings]){
  console.log("Your pizza is cooking.");
  return {
    size:orderSize,
    crust:orderCrust,
    toppings:orderToppings
  };
}
let cookedPizza = preparePizza(customerOrder);


function servePizza(pizza){
let orderMessage=`Order Up ...${pizza.size}${pizza.crust} with `;
for(let topping of pizza.toppings){
  orderMessage+=`${topping}`;
}
console.log(orderMessage);
return pizza;
}
servePizza(cookedPizza);
//5.) Create a serve Pizza function that
// has a parameter of pizza object
/*logs a message that the pizza is ready and repeats the order, I.E. "Order up heres your large"*/
// out puts the same pizzObject that was passed in
