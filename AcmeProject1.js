//instructions
//write the 4 functions below
//no third party libraries
//try not to use any forEach
//each function should be short and some functions can depend on other functions (hint no function should be more than 10 lines)

//list of products
var products = [
  {
    id: 1,
    price: 5,
    name: 'foo'
  },
  {
    id: 2,
    price: 3,
    name: 'bar'
  },
  {
    id: 3,
    price: 9,
    name: 'bazz'
  }
];

//list of line items
var lineItems = [
   {
     productId: 1,
     quantity: 1
   },
   {
     productId: 1,
     quantity: 1
   },
   {
     productId: 2,
     quantity: 1
   },
   {
     productId: 3,
     quantity: 1
   },
];
//returns an object
//keys are the ids of products
//the values are the products themselves
function generateProductsMap(products) {
  return products.reduce(function (obj, current) {
    obj[current.id] = current;
    return obj;
  }, {})
}

//returns an object
//keys are the ids of products
//value is the total revenue for that product
function salesByProduct(products, lineItems) {
  var map = generateProductsMap(products);
  var result = lineItems.reduce(function (obj,currentElem) {
    if(!obj[currentElem.productId]) {
      obj[currentElem.productId] = map[currentElem.productId].price;
    } else {
      obj[currentElem.productId] += map[currentElem.productId].price;
    }
    return obj;
  }, {})
  return result;
}

//return the total revenue for all products
function totalSales(products, lineItems) {
  var total = 0;
  var totalObj = salesByProduct(products, lineItems);
  for (var keys in totalObj) {
    total += totalObj[keys];
  }
  return total;
}

//return the product responsible for the most revenue
function topSellerByRevenue(products, lineItems) {
  var map = generateProductsMap(products);
  var sales = salesByProduct(products, lineItems);
  var topSeller;
  for (var keys in sales) {
    if(topSeller === undefined || sales[keys] > topSeller) {
     topSeller = map[keys].name;
    }
  }
  return topSeller;
}
console.log(`generates product map - should be
{
  1:{
    id: 1,
    name: "foo",
    price: 5
  },
  2:{
    id: 2,
    name: "bar",
    price: 3
  },
  3:{
    id: 3,
    name: "bazz",
    price: 9
  }
}
`, generateProductsMap(products));
console.log(`sales by product - should be
  {
    1: 10,
    2: 3,
    3: 9
}`, salesByProduct( products, lineItems));
console.log('total sales - should be 22', totalSales( products, lineItems));
console.log('top seller by revenue', topSellerByRevenue(products, lineItems ));
