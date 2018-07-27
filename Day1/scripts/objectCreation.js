
// One Customer Object using Object Literal syntax;

// Product Object using Function constructor

// Store them in an array and display

//use IIFE
(function() {

    var customer = {
        customerId:100,
        customerName: 'Ramesh',
        toString:function(){
            return this.customerId + '-' + this.customerName;
        }
    }

    console.log(customer.toString());

    var Product = function(productCode, productName, qty, rpu) {
        this.productCode = productCode;
        this.productName = productName;
        this.qty = qty;
        this.rpu = rpu;
    }

    Product.prototype.calculate = function() {
        return this.qty * this.rpu;
    }

    Product.prototype.toString = function() {
        return this.productCode + '-' + this.productName;
    }

    Product.prototype.stock = 30;

    var cake = new Product(101, 'Black Forest', 2, 450);
    var pakoda = new Product(102, 'Onion Pakoda', 6, 50);
    var items = [cake, pakoda];

    Product.prototype.newStock = function() {
        //this.stock = this.stock-1;
        return this.stock - 1;
    }
    
    items.forEach(function(eachItem, idx) {
        console.log(++idx + ',' + eachItem.toString() + eachItem.newStock() + ' - ' + eachItem.calculate())
    });

})();