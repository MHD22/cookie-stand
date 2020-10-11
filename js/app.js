'use strict';

function getRandom(max, min) { // calculate a randome integer number within a range.
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var seattle = {
  location: 'Seattle',
  minCoust: 23,
  maxCoust: 65,
  avgCookies: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  total: 0,// hourly totals  cookies 
  
  render: function () {// render the hourly cookies saled with total as an un ordered list.
    var container = document.getElementById('sales'); //main tag
    var section = document.createElement('section');
    var p1 = document.createElement('p');
    p1.textContent= this.location;
    section.appendChild(p1); 
    var ul1 = document.createElement('ul');
    for (var i = 0; i < this.hours.length; i++) {  
      var random = getRandom(this.maxCoust, this.minCoust); // calculate random customers per hour
      var cookies = Math.floor(random * this.avgCookies); //  cookies purchased for each hour 
      var result =`${this.hours[i]}: ${cookies} cookies`; // save data like this format '6am: 16 cookies'
      this.total+=cookies;
      var li = document.createElement('li'); //create li element each hour and append it to its parent 'ul1'.
      li.textContent = result;
      ul1.appendChild(li);
    }//finish the looping over hours
    var li = document.createElement('li'); //create another li for total cookies.
    li.textContent=`Total: ${this.total} cookies`;
    ul1.appendChild(li);
    section.appendChild(ul1);
    container.appendChild(section);
  },
}
	

var dubai = {
  location: 'Dubai',
  minCoust: 11,
  maxCoust: 38,
  avgCookies: 3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  total: 0,// hourly totals  cookies 
  
  render: function () {// render the hourly cookies saled with total as an un ordered list.
    var container = document.getElementById('sales'); //main tag
    var section = document.createElement('section');
    var p1 = document.createElement('p');
    p1.textContent= this.location;
    section.appendChild(p1); 
    var ul1 = document.createElement('ul');
    for (var i = 0; i < this.hours.length; i++) {  
      var random = getRandom(this.maxCoust, this.minCoust); // calculate random customers per hour
      var cookies = Math.floor(random * this.avgCookies); //  cookies purchased for each hour 
      var result =`${this.hours[i]}: ${cookies} cookies`; // save data like this format '6am: 16 cookies'
      this.total+=cookies;
      var li = document.createElement('li'); //create li element each hour and append it to its parent 'ul1'.
      li.textContent = result;
      ul1.appendChild(li);
    }//finish the looping over hours
    var li = document.createElement('li'); //create another li for total cookies.
    li.textContent=`Total: ${this.total} cookies`;
    ul1.appendChild(li);
    section.appendChild(ul1);
    container.appendChild(section);
  },
}
		

var paris = {
  location: 'Paris',
  minCoust: 20,
  maxCoust: 38,
  avgCookies: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  total: 0,// hourly totals  cookies 
  
  render: function () {// render the hourly cookies saled with total as an un ordered list.
    var container = document.getElementById('sales'); //main tag
    var section = document.createElement('section');
    var p1 = document.createElement('p');
    p1.textContent= this.location;
    section.appendChild(p1); 
    var ul1 = document.createElement('ul');
    for (var i = 0; i < this.hours.length; i++) {  
      var random = getRandom(this.maxCoust, this.minCoust); // calculate random customers per hour
      var cookies = Math.floor(random * this.avgCookies); //  cookies purchased for each hour 
      var result =`${this.hours[i]}: ${cookies} cookies`; // save data like this format '6am: 16 cookies'
      this.total+=cookies;
      var li = document.createElement('li'); //create li element each hour and append it to its parent 'ul1'.
      li.textContent = result;
      ul1.appendChild(li);
    }//finish the looping over hours
    var li = document.createElement('li'); //create another li for total cookies.
    li.textContent=`Total: ${this.total} cookies`;
    ul1.appendChild(li);
    section.appendChild(ul1);
    container.appendChild(section);
  },
}
// 			

var lima = {
  location: 'Lima',
  minCoust: 2,
  maxCoust: 16,
  avgCookies: 4.6,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  total: 0,// hourly totals  cookies 
  
  render: function () {// render the hourly cookies saled with total as an un ordered list.
    var container = document.getElementById('sales'); //main tag
    var section = document.createElement('section');
    var p1 = document.createElement('p');
    p1.textContent= this.location;
    section.appendChild(p1); 
    var ul1 = document.createElement('ul');
    for (var i = 0; i < this.hours.length; i++) {  
      var random = getRandom(this.maxCoust, this.minCoust); // calculate random customers per hour
      var cookies = Math.floor(random * this.avgCookies); //  cookies purchased for each hour 
      var result =`${this.hours[i]}: ${cookies} cookies`; // save data like this format '6am: 16 cookies'
      this.total+=cookies;
      var li = document.createElement('li'); //create li element each hour and append it to its parent 'ul1'.
      li.textContent = result;
      ul1.appendChild(li);
    }//finish the looping over hours
    var li = document.createElement('li'); //create another li for total cookies.
    li.textContent=`Total: ${this.total} cookies`;
    ul1.appendChild(li);
    section.appendChild(ul1);
    container.appendChild(section);
  },
}


// another way..
var tokyo = {
  location: 'Tokyo',
  minCoust: 3,
  maxCoust: 24,
  avgCookies: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPerHour: [],//how cookies saled per hour( avg X random Costumer) from 6AM to 8 PM

  total: 0,// hourly totals  cookies 
  
  calculateCookies: function () {//calculate cookies per our and stores the data inside cookiesPerHour array.
    for (var i = 0; i < this.hours.length; i++) {
      var random = getRandom(this.maxCoust, this.minCoust);
      var cookies = Math.floor(random * this.avgCookies);
      this.total+=cookies;
      this.cookiesPerHour[i] = `${this.hours[i]}: ${cookies} cookies`;
    }


  },// render the hourly cookies saled with total as un ordered list
  render: function () {
    var container = document.getElementById('sales');
    var section = document.createElement('section');
    var p1 = document.createElement('p');
    p1.textContent= this.location;
    section.appendChild(p1);
    var ul1 = document.createElement('ul');
    for (var i = 0; i < this.hours.length; i++) { 
      var li = document.createElement('li');
      li.textContent = this.cookiesPerHour[i];
      ul1.appendChild(li);

    }
    var li = document.createElement('li'); //create another li for total cookies.
    li.textContent=`Total: ${this.total} cookies`;
    ul1.appendChild(li);
    section.appendChild(ul1);
    container.appendChild(section);
  },
}







seattle.render();
tokyo.calculateCookies();
tokyo.render();
dubai.render();
paris.render();
lima.render();

