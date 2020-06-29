'use strict';




///////// Lab 06 below /////////
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Random gen taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Object: Seattle Store
var storeSeattle ={
  storeName:'Seattle',
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
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies.';
      theUl.appendChild(liEl);
    }
    liEl = document.createElement('b');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
    theUl.appendChild(liEl);
  }
}; //close object; Seatle Store

// Write: Seatle Store
document.getElementById('minCustomers').innerHTML = storeSeattle.minCust;
document.getElementById('maxCustomers').innerHTML = storeSeattle.maxCust;
document.getElementById('avgCookies').innerHTML = storeSeattle.avgCookieSale;

///

// Object: Tokyo Store
var storeTokyo ={
  storeName:'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2, //cookies sold per hour
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
    } // close multiply array for
    // return calcArray;
  },
  render(){
    this.caclulateCalcCookEachHour();
    var listPara = document.getElementById('listTokyo');
    var theUl = document.createElement('ul');
    listPara.appendChild(theUl);
    //   console.log(listPara);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies.';
      theUl.appendChild(liEl);
    }
    liEl = document.createElement('b');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUl.appendChild(liEl);
  }
}; //close object; Tokyo Store

// Write: Tokyo Store
document.getElementById('minCustomersTokyo').innerHTML = storeTokyo.minCust;
document.getElementById('maxCustomersTokyo').innerHTML = storeTokyo.maxCust;
document.getElementById('avgCookiesTokyo').innerHTML = storeTokyo.avgCookieSale;

///

// Object: Dubai Store
var storeDubai ={
  storeName:'Dubai',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2, //cookies sold per hour
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
    } // close multiply array for
    // return calcArray;
  },
  render(){
    this.caclulateCalcCookEachHour();
    var listPara = document.getElementById('listDubai');
    var theUl = document.createElement('ul');
    listPara.appendChild(theUl);
    //   console.log(listPara);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies.';
      theUl.appendChild(liEl);
    }
    liEl = document.createElement('b');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUl.appendChild(liEl);
  }
}; //close object; Dubai Store

// Write: Dubai Store
document.getElementById('minCustomersDubai').innerHTML = storeDubai.minCust;
document.getElementById('maxCustomersDubai').innerHTML = storeDubai.maxCust;
document.getElementById('avgCookiesDubai').innerHTML = storeDubai.avgCookieSale;

///

// Object: Paris Store
var storeParis ={
  storeName:'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3, //cookies sold per hour
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
    } // close multiply array for
    // return calcArray;
  },
  render(){
    this.caclulateCalcCookEachHour();
    var listPara = document.getElementById('listParis');
    var theUl = document.createElement('ul');
    listPara.appendChild(theUl);
    //   console.log(listPara);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies.';
      theUl.appendChild(liEl);
    }
    liEl = document.createElement('b');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUl.appendChild(liEl);
  }
}; //close object; Paris Store

// Write: Paris Store
document.getElementById('minCustomersParis').innerHTML = storeParis.minCust;
document.getElementById('maxCustomersParis').innerHTML = storeParis.maxCust;
document.getElementById('avgCookiesParis').innerHTML = storeParis.avgCookieSale;

///
// Object: Lima Store
var storeLima ={
  storeName:'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6, //cookies sold per hour
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
    } // close multiply array for
    // return calcArray;
  },
  render(){
    this.caclulateCalcCookEachHour();
    var listPara = document.getElementById('listLima');
    var theUl = document.createElement('ul');
    listPara.appendChild(theUl);
    //   console.log(listPara);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies.';
      theUl.appendChild(liEl);
    }
    liEl = document.createElement('b');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUl.appendChild(liEl);
  }
}; //close object; Lima Store

// Write: Lima Store
document.getElementById('minCustomersLima').innerHTML = storeLima.minCust;
document.getElementById('maxCustomersLima').innerHTML = storeLima.maxCust;
document.getElementById('avgCookiesLima').innerHTML = storeLima.avgCookieSale;
///

/*
Uncomment below to display data by non-proto method
*/
// // Render store sales at each hour
// var allStores = [storeSeattle, storeTokyo, storeDubai, storeParis, storeLima];
// function renderAllShops(){
//   for(var i = 0; i < allStores.length; i++){
//     allStores[i].render();
//   }
// }
// // renderAllShops();


