///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const cartTotal = cart.reduce((acc, curr) => acc + curr.price, 0)

console.log(cartTotal)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (total, couponValue, tax) => ((total * (tax + 1)) - couponValue)

console.log(calcFinalPrice(cartTotal, 5, .07))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

-first name // assuming that you are purchasing anything, you need a name for the order and to better communicate with the customers and to store it in the files under something 
    //it will be a string since names are writen as strings
-last name // the same goes for last name// could be together with first name as "name" 


-email // there should be an email for electronic reciept, verification of order, and posible promotions 
    // this should also be a string with special characters to make sure it is a valid email address

-phone number // should be provided for call back purposes only, incase there was something wrong with the order and/or any problems.
    //this will be a string for storage purposes, no need to do any math

-date of bith // should be porvided to verify age is over 18 
    //this will be stored as a string for more consistensy 

const customers = {
    fullName: "Johnny Johnson",
    phone: "3214545454",
    email: "Johnny.johnson@gmail.com",
    date of birth: "01/20/1976",
}



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customers = {
    fullName: 'Juan Torres Reyes',
    phone: '4077778969',
    email: 'Juan.Torres@gmail.com',
    dateOfBirth: '08/27/1998'
} 