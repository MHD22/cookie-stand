'use strict';

function getRandom(max, min) { // calculate a randome integer number within a range.
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//for storing the all totals for each hour.
var allTotalsForEachHour=new Array(15).fill(0);// initilaize it with zeroes.
var shops=[]; // for store the objects inside it.

//create constructor for shops/locations:
function Shop (location,minCustomer,maxCoustomer,avgCookiesPerCoust){
  this.location=location;
  this.minCoust=minCustomer;
  this.maxCoust=maxCoustomer;
  this.avgCookies=avgCookiesPerCoust;
  this.cookiesSaledArray=[]
  this.total=0;
  shops.push(this);//store this object in the shops array.
}

// prototype for calculate and store data for each location in its array (cookiesSaledArray).
Shop.prototype.storeDataPerHour= function(){
  for (var i =0; i<hours.length;i++){

    var random = getRandom(this.maxCoust, this.minCoust); // calculate random customers per hour

    var cookiesSaledPerHour = Math.floor(random * this.avgCookies); //  cookies purchased for each hour 

    this.total+=cookiesSaledPerHour; // total for location.


    this.cookiesSaledArray.push(`${hours[i]}: ${cookiesSaledPerHour} cookies`); // save data like this format '6am: 16 cookies'

    allTotalsForEachHour[i] += cookiesSaledPerHour;//store the total of all locations each hour..
  }
  allTotalsForEachHour[i] += this.total; // add the total for all locations each day
}

Shop.prototype.render = function(){
  var rowLocation = document.createElement('tr');
  for(var i = 0 ; i<hours.length +2 ; i++){ //loop over columns (16) 

    if( i === 0){ // check for first cell (location name)
      var colData= document.createElement('th');
      rowLocation.appendChild(colData);  
      colData.textContent=this.location;
    }

   else if(i === hours.length+1){ // check for last cell (Daily Location Total)
      var colData= document.createElement('td');
      rowLocation.appendChild(colData);
      colData.textContent=this.total;
    }

    else {  // add hours to cells
      var colData= document.createElement('td');
      rowLocation.appendChild(colData);
      colData.textContent=this.cookiesSaledArray[i-1];
    }

  }
  table.appendChild(rowLocation);


}



var container = document.getElementById('sales');
var table = document.createElement('table');
table.setAttribute('border','1');


function renderTableHeader(){ // to create the first row
 
  var rowHeader = document.createElement('tr');

  for(var i = 0 ; i<hours.length+2 ; i++){ //loop over columns (16) 

    if( i === 0){ // check for first cell (empty)
      var colData= document.createElement('th');
      rowHeader.appendChild(colData);  
    }

   else if(i === hours.length+1){ // check for last cell (Daily Location Total)
      var colData= document.createElement('th');
      rowHeader.appendChild(colData);
      colData.textContent='Daily Location Total';
    }
    else {  // add hours to cells
      var colData= document.createElement('th');
      rowHeader.appendChild(colData);
      colData.textContent=hours[i-1];
    }

  }
  table.appendChild(rowHeader);
  container.appendChild(table);

}


function renderTableFooter(){
  var rowFooter = document.createElement('tr');

  for(var i = 0 ; i<hours.length+2 ; i++){ //loop over columns (16) 

    if( i === 0){ // check for first cell (empty)
      var colData= document.createElement('th');
      rowFooter.appendChild(colData);  
      colData.textContent='Totals';
    }

    else {  // add hours to cells
      var colData= document.createElement('th');
      rowFooter.appendChild(colData);
      colData.textContent=allTotalsForEachHour[i-1];
    }

  }
  table.appendChild(rowFooter);
};




var seattle = new Shop('Seattle',23,65,6.3);
var dubai = new Shop('Dubai',11,38,3.7);
var paris = new Shop('Paris',20,38,2.3);
var lima = new Shop('Lima',2,16,4.6);
var tokyo = new Shop('Tokyo',3,24,1.2);





renderTableHeader();
for(var i=0; i<shops.length;i++){
  shops[i].storeDataPerHour();
  shops[i].render();
}
renderTableFooter();














