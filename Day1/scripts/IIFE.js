//Immediately Invoked Function Expression

var app = (function() {

    //console.log('IFFE called');

    function greet() {
        return 'Hello World';
    }

    function calculate(inr) {
        return inr * 65.00;
    }

    var msg = greet();
    //console.log(msg);
    //console.log(calculate(200));

    return {
        greeter: greet,
        currencyConverter: calculate
    }
})();

console.log(app.greeter());
console.log(app.currencyConverter(100));