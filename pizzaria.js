function pizzaOven(crustType, sauceType,cheeses,toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}
    
var s1 = pizzaOven("Deep Dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
var s2 = pizzaOven("hand tossed","marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"])
var s3 = pizzaOven("Deep Dish", "tomato-sauce", ["mozzarella", "Parmesan"],["chicken", "olives", "mushrooms"])
var s4 = pizzaOven("Deep Dish", "Alfredo-sauce", ["mozzarella", "Parmesan"],["shrimps","mushrooms"])
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
