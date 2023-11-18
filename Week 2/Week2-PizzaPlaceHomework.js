//Open the new homework directory in VS Code and create a new JavaScript file - name it something that indicates it is homework for Week 2
//Inside your JS file, create two variables: pizzaPlace and numberOfToppings
let pizzaPlace="Maxwell's Pizza Palace";
let numberOfToppings=100;


//Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
//Print the variables and their types.


console.log(typeof(pizzaPlace), typeof(numberOfToppings));

//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(`Come down to ${pizzaPlace}, 
where we have ${numberOfToppings} toppings for your family gathering!`);

//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
if(numberOfToppings>10){
    console.log("That's a whole lot of pizza!");
}
else{
    console.log(`Quality over quantity`);
}
//Add, commit, and push your JS file to your GitHub repo.
//Send your TA a link to your GitHub Homework repo when finished.
//Bonus Challenge
//Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)
//An example of the output you want for in this assignment is:

for(let i=1;i<numberOfToppings;i++){
    if(i%2===0){
        console.log(i);
    }
}