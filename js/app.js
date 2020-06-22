'use strict';
/*
1. Stores the min/max hourly customers, and the average cookies per customer, in object properties [DONE]
2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
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

function randoCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Object: Seattle Store
var storeSeattle ={
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
};
var customPerHour =  randoCust(storeSeattle.minCust,storeSeattle.maxCust);

// Write: Seatle Store
document.getElementById('minCustomers').innerHTML = storeSeattle.minCust;
document.getElementById('maxCustomers').innerHTML = storeSeattle.maxCust;
document.getElementById('avgCookies').innerHTML = storeSeattle.avgCookieSale;
document.getElementById('custPerHour').innerHTML = customPerHour;
