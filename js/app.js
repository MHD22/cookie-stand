'use strict';

function getRandom(max, min) { // calculate a randome integer number within a range.
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//to storing the all totals for each hour.
var allTotalsForEachHour = new Array(15).fill(0);// initilaize it with zeroes.

var shops = []; // to store the objects inside it.

//create constructor for shops/locations:
function Shop(location, minCustomer, maxCoustomer, avgCookiesPerCoust) {
  this.location = location;
  this.minCoust = minCustomer;
  this.maxCoust = maxCoustomer;
  this.avgCookies = avgCookiesPerCoust;
  this.cookiesSaledArray = []
  this.total = 0;
  shops.push(this);//store this object in the shops array.
}

//create prototypes:

// prototype for calculate and store the data for each location in its array (cookiesSaledArray).
Shop.prototype.storeDataPerHour = function () {
  for (var i = 0; i < hours.length; i++) {

    var random = getRandom(this.maxCoust, this.minCoust); // calculate random customers per hour

    var cookiesSaledPerHour = Math.floor(random * this.avgCookies); //  cookies purchased for each hour 

    this.total += cookiesSaledPerHour; // total for location.

    this.cookiesSaledArray.push(`${hours[i]}: ${cookiesSaledPerHour} cookies`); // save data like this format '6am: 16 cookies'

    allTotalsForEachHour[i] += cookiesSaledPerHour;//store the total of all locations each hour..
  }

  allTotalsForEachHour[i] += this.total; // add the total for all locations each day
}

// prototype for render each location in a row
Shop.prototype.render = function () {
  var rowLocation = document.createElement('tr'); //create  a row element for each object.
  for (var i = 0; i < hours.length + 2; i++) { //loop over columns (16) 14 for hours + 1 for location name and 1 for total

    if (i === 0) { // check for first cell (location name)
      var colData = document.createElement('th');
      rowLocation.appendChild(colData);
      colData.textContent = this.location;
    }

    else if (i === hours.length + 1) { // check for last cell (Daily Location Total)
      var colData = document.createElement('td');
      rowLocation.appendChild(colData);
      colData.textContent = this.total;
    }

    else {  // add number of cookies saled each hour
      var colData = document.createElement('td');
      rowLocation.appendChild(colData);
      colData.textContent = this.cookiesSaledArray[i - 1];
    }

  }
  table.appendChild(rowLocation); // append the table with this location row

}

//DOM 
var container = document.getElementById('sales');// get main element from html to append it with the table at the end.
var table = document.createElement('table');//create table element to hold the data.
table.setAttribute('border', '1');// set the border attribute to the table.
container.appendChild(table);// append the main tag with table tag.


function renderTableHeader() { // to create the first row and append the table with it.

  var rowHeader = document.createElement('tr');//create  a row element

  for (var i = 0; i < hours.length + 2; i++) { //loop over columns (16) '14 for hours, 1 for first empty cell, 1 for daily location total

    if (i === 0) { // check for first cell (empty)
      var colData = document.createElement('th');
      rowHeader.appendChild(colData);
    }

    else if (i === hours.length + 1) { // check for last cell (Daily Location Total)
      var colData = document.createElement('th');
      rowHeader.appendChild(colData);
      colData.textContent = 'Daily Location Total';
    }
    else {  // add hours to cells
      var colData = document.createElement('th');
      rowHeader.appendChild(colData);
      colData.textContent = hours[i - 1]; // because will start print hours from second cell..
    }

  }
  table.appendChild(rowHeader); //append the table with this header row

}


function renderTableFooter() {// to create the last row and append the table with it.
  var rowFooter = document.createElement('tr');

  for (var i = 0; i < hours.length + 2; i++) { //loop over columns (16) 

    if (i === 0) { // check for first cell (empty)
      var colData = document.createElement('th');
      rowFooter.appendChild(colData);
      colData.textContent = 'Totals';
    }

    else {  // add totals to remain cells
      var colData = document.createElement('th');
      rowFooter.appendChild(colData);
      colData.textContent = allTotalsForEachHour[i - 1];
    }

  }
  table.appendChild(rowFooter);
};


//create instances from Shop constructor:
var seattle = new Shop('Seattle', 23, 65, 6.3);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);


//render the table header and lacations rows and table footer.
renderTableHeader();
for (var i = 0; i < shops.length; i++) {//loop over the locations(instances) and render them.
  shops[i].storeDataPerHour();
  shops[i].render();
}
renderTableFooter();

