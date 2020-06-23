'use strict';


var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


// Random gen taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Store(storeName, minCust, maxCust, avgCookieSale){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.cookiesEachHourCalc = this.setCookEachHour();
  this.customersEachHourCalc = this.setCustomersEachHour();
  this.totalDailyCookies = 0;
}
// Calculate number of customers at each hour
Store.prototype.setCustomersEachHour = function(){
  for (var i=0; i < hours.length; i++){
    this.customersEachHour.push(random(this.minCust,this.maxCust));
  } //close for loop
}; //close proto function

// Calculate number of cookies sold at each hour
Store.prototype.setCookEachHour = function(){
  this.setCustomersEachHour();
  var i;
  var oneHour;
  for (i = 0; i < hours.length; i++) {
    // push to array a random customer at the hour
    oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  } // close multiply array for
};// close protofunction


Store.prototype.render = function(){
  this.setCookEachHour();
  var listPara = document.getElementById('list');
  var theUl = document.createElement('ul');
  listPara.appendChild(theUl);
  //   console.log(listPara);

  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies.';
    theUl.appendChild(liEl);
  }//close for
  liEl = document.createElement('b');
  liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
  theUl.appendChild(liEl);
};//close proto function

//Set store values with var and new
var seattleStore = new Store('Seattle',23 ,65 ,6.3);
console.log(seattleStore);

var tokyoStore = new Store('Tokyo',3 ,24 ,1.2);
console.log(tokyoStore);

var dubaiStore = new Store('Dubai',11, 38, 3.7);
console.log(dubaiStore);

var parisStore = new Store('Paris', 20, 38, 2.3);
console.log(parisStore);

var limaStore = new Store('Lima', 2, 16, 4.6);
console.log(limaStore);

// render all stores
var allStores = [seattleStore,tokyoStore,dubaiStore, parisStore, limaStore];

function renderAllStores(){
  for(var i = 0; i < allStores; i++){
    allStores[i].render();
  }//close for
}//close function

renderAllStores();
