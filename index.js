const taxes = require('./lib/taxes.js');
const inputs = require('./test/inputs.json'); //Just the inputs


function doIt(taxes) {
    
    const obj = taxes.getProducts(); 
    
    for(var i in obj) {
        //Print quantity name and pricetaxed
        console.log(obj[i].quantity+((obj[i].imported) ? ' imported' : '')+' '+obj[i].name+': '+obj[i].priceTaxed);
    }
    //Print the total sales taxes for input
    console.log("Sales Taxes: "+taxes.calcTotalSalesTaxes());
    //Print the total prices for input
    console.log("Total: "+taxes.calcTotalPrices());
    //Empty the cart
    taxes.emptyProducts();
}

//Elaborate inputs
for(var i in inputs) {
    console.log("\n"+i.toUpperCase()); 
    inputs[i].forEach(function(product) {
        //Add product to cart
        taxes.addProduct(product.name, product.quantity, product.excepted, product.imported, product.price);
    });
    //Print the informations
    doIt(taxes);
}