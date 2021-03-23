//var is function scoped. Will reference error as date is declared inside getDate()
function getDate() {
    var date = new Date();
    return date;
}
getDate();
console.log(date);

//i,discountedPrice,finalPrice as var will be accessible all over the function scope
function discountedPrice (prices, discount) {
    var discounted = [];
    for(var i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        var finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i);
    console.log(discountedPrice); // not defined as let is block defined
    console.log(finalPrice);
    return discounted;
}
discountedPrice([100,200,300], .5);

console.log(hoisted);
var hoisted; //undefined

console.log(hoisted);
let hoisted; //reference error

var name = 'senthil';
name = 'senthil nathan';

const name = 'senthil'; //not possible
name = 'senthil nathan';

const prop = {
    name: 'senthil'
};
prop.name = 'senthil nathan' // possible

prop = {name: 'senthil nathan'} //not possible

