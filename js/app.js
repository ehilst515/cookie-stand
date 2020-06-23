'use strict';
/*
1. Stores the min/max hourly customers, and the average cookies per customer, in object properties [1st DONE]
2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random [generator DONE]
3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
4. Store the results for each location in a separate array… perhaps as a property of the object representing that location
5. Display the values of each array as unordered lists in the browser
6. Calculating the sum of these hourly totals; your output for each location should look like this:

**Seattle**

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies

*/

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Random gen taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Object: Seattle Store
var storeSeattle ={
  storename: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3, //cookies sold per hour
  cookiesEachHour: [],
  customersEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function(){
    for (var i=0; i < hours.length; i++){
      this.customersEachHour.push(random(this.minCust,this.maxCust));
    }
  },
  caclulateCalcCookEachHour: function (){ //eslint-disable-line
    this.calcCustomersEachHour();
    var i;
    var oneHour;
    for (i = 0; i < hours.length; i++) {
    // push to array a random customer at the hour
      oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    //   dynamicArray.push(randoCust(storeSeattle.minCust,storeSeattle.maxCust));
    //   // multiply (current value) * (dynamic array position i+1)
    //   var multResult = currentVal * dynamicArray[i+1];
    //   calcArray.push(Math.floor(multResult));// add results to calcArray
    } // close multiply array for
    // return calcArray;
  },
  render(){
    this.caclulateCalcCookEachHour();
    var listPara = document.getElementById('list');
    var theUl = document.createElement('ul');
    listPara.appendChild(theUl);
    //   console.log(listPara);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ':' + this.cookiesEachHour[i] + ' cookies.';
      theUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
    theUl.appendChild(liEl);
  }
};



// storeSeattle.calcCustomersEachHour();
// storeSeattle.caclulateCalcCookEachHour();

// storeSeattle.calcArray()

// var customPerHour =  randoCust(storeSeattle.minCust,storeSeattle.maxCust);

// Write: Seatle Store
document.getElementById('minCustomers').innerHTML = storeSeattle.minCust;
document.getElementById('maxCustomers').innerHTML = storeSeattle.maxCust;
document.getElementById('avgCookies').innerHTML = storeSeattle.avgCookieSale;

// Calculate number of cookies purchased at each hour and total ammount



// start an array and a current value var with 1
// var dynamicArray = [1];
// // var calcArray = [];
// var currentVal = 6.3;
// var i;

// function salesAtHour(){ //eslint-disable-line
//   for (i = 0; i < hoursOp; i++) {
//   // push to array a random customer at the hour
//     dynamicArray.push(randoCust(storeSeattle.minCust,storeSeattle.maxCust));
//     // multiply (current value) * (dynamic array position i+1)
//     var multResult = currentVal * dynamicArray[i+1];
//     calcArray.push(Math.floor(multResult));// add results to calcArray
//   } // close multiply array for
//   return calcArray;
// }

// Write results from calcArray to website

// function writeList(){
// //   var cookiesAtHour = salesAtHour();
//   var text = '';
//   var i;
//   var listPara = document.getElementById('list');
//   var theUl = document.createElement('ul');
//   listPara.appendChild(theUl);
//   //   console.log(listPara);

//   for (i = 0; i < cookiesAtHour.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = cookiesAtHour[i] + ':' + this.calcArray[i];
//     text += '<li>' + cookiesAtHour[i] + '<li>';
//   }
//   document.getElementById('list').innerHTML = '<ul>' + text + '</ul>';
// }

// writeList();


var allStores = [storeSeattle];
function renderAllShops(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();

  }
}
renderAllShops();
