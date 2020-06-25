'use strict';

//Display new store
function handleFormSubmitted(event){
  var nameInput = document.getElementById('enterName');
  var nameValue = nameInput.value;

  var minInput = document.getElementById('enterMinCust');
  var minValue = minInput.value;

  var maxInput = document.getElementById('enterMaxCust');
  var maxValue = maxInput.value;

  var avgInput = document.getElementById('enterAvgCookies');
  var avgValue = avgInput.value;

}

// Event listener
var formElement = document.getElementById('enterStore');
formElement.addEventListener('submit', handleFormSubmitted());



/*
Lab 08 below
*/


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
  this.cookiesEachHourCalc = this.setTotalCookies();
  this.customersEachHourCalc = this.setCustomersEachHour();
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
  var oneHour = 0;
  for (var i = 0; i < hours.length; i++) {
    // push to array a random customer at the hour
    oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
    this.cookiesEachHour.push(oneHour);
  } // close multiply array for
};// close protofunction

Store.prototype.setTotalCookies = function(){
  this.setCookEachHour();
  var cookies = 0;
  for (var i = 0; i < hours.length; i++){
    cookies = cookies + this.cookiesEachHour[i];
  }
  return cookies;
};


//Set store values with var and new
var seattleStore = new Store('Seattle', 23, 65, 6.3);
console.log(seattleStore);

var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
console.log(tokyoStore);

var dubaiStore = new Store('Dubai',11 , 38, 3.7);
console.log(dubaiStore);

var parisStore = new Store('Paris', 20, 38, 2.3);
console.log(parisStore);

var limaStore = new Store('Lima', 2, 16, 4.6);
console.log(limaStore);

///

//Rendering
Store.prototype.render = function(){
  var cookieTable = document.getElementById('dataTable');

  var dataRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = this.storeName;
  dataRow.appendChild(nameCell);

  for (var i = 0; i < hours.length; i++){
    var dataCell = document.createElement('td');
    dataCell.textContent = this.cookiesEachHour[i];
    dataRow.appendChild(dataCell);

    cookieTable.appendChild(dataRow);
  }// close for loop
  var totalData = document.createElement('td');
  totalData.textContent = this.setTotalCookies();
  dataRow.appendChild(totalData);
};// close proto function

var allStores = [seattleStore,tokyoStore,dubaiStore, parisStore, limaStore];
function renderAllStores(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }//close for
}//close function

renderAllStores();
