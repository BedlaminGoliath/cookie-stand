'use strict';
let section = document.getElementById('table');


function randomNumberCustomers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];

let allStores = [];

let storeTotal = [];

let locationTotals= [];



// constructor function: WORKING
function Location(minCust,maxCust, avgCookie,name ){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.avgSales = [];
  allStores.push(this);
}
// average sales function
Location.prototype.avgSalesFunction = function(){

  for(let j = 0; j<storeHours.length; j++){
    let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
    let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
    this.avgSales.push(avgCookieSales);
  }
};
// render function
Location.prototype.render = function(){

  this.avgSalesFunction();


  let h2 = document.createElement('td');

  h2.textContent = this.name;
  section.appendChild(h2);

  let list = document.createElement('ul');
  section.appendChild(list);

  for (let i = 0;i< storeHours.length ; i++){
    let li = document.createElement('li');
    li.innerText =`${storeHours[i]}: ${this.avgSales[i]} cookies`;
    list.appendChild(li);
  }
};

function headerRow(){

  let tableHeader = document.createElement ('th');
  let tableRow  = document.createElement ('tr');

  for ( let i =0; i < storeHours.length; i ++){
    tableHeader = document.createElement ('th');
    tableHeader.innerText = storeHours;
    tableRow.appendChild(tableHeader);
  }



};


new Location(23, 65, 6.3, 'seattle');
new Location(3, 24, 1.2, 'tokyo');
new Location(11, 38, 3.7, 'dubai');
new Location(20, 38, 3.3, 'paris');
new Location(2, 16, 4.6, 'lima');

(function renderTable (){
  headerRow();
  for (let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
})();

console.log(allStores);


// function renderSales() {
//   let table = document.getElementById('table');
//   let hRow = document.createElement('tr');
//   let headElem = document.createElement('th');
//   table.appendChild(hRow);
//   hRow.appendChild(headElem);
//   headElem.innerText='storeHours';

//   // itterate through to print daily sales for stores.
//   for(let h = 0; h< allStores.length; h++){
//     headElem = document.createElement('th');
//     headElem.innerText = storeHours[h];
//     hRow.appendChild(headElem);
//     locationTotals[h] = 0;
//   }
// }
// function rows(){
//   for(let k = 0; k < allStores.length; k++){

Location.prototype.renderTable = function() {

  let table = document.getElementById('table');
  let tBody = document.createElement('tr');
  let locat = document.createElement('th');
  locat.innerText = this.Location;
  table.appendChild(locat);

  for(let i = 0; i < this.sales.length; i++){
    let sales = document.createElement('td');
    sales.innerText = this.sales[i];
    tBody.appendChild(sales);
    tBody.appendChild(tBody);
  }
};
// }
// };

// renderSales();


