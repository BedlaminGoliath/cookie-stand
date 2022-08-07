'use strict';


function randomNumberCustomers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}
function totalHours ( ){


}

let storeHours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];

let allStores = [];

let storeTotal = [];

let locationTotals= [];

// =========================================================================================
// =============================factory and avg sales things============================

// constructor function: WORKING
function Location(minCust,maxCust, avgCookie,name ){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.avgSales = [];
  allStores.push(this);
  // this.daytots = 0;
  this.dailyValue = 0;

}



// average sales function
Location.prototype.avgSalesFunction = function(){
  for ( let i = 0; i < storeHours.length; i++){
    let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
    let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
    console.log(avgCookieSales);
    this.avgSales.push(avgCookieSales);

  }
  for (let i = 0; i < this.avgSales.length; i++){
    this.dailyValue += this.avgSales[i];
  }

};

// ==============================================
// ================Rendering things====================================


// render function
Location.prototype.render = function(){
  let table = document.getElementById('tbody');
  this.avgSalesFunction();
  console.log(this);

  let tableRow = document.createElement('tr');

  table.appendChild(tableRow);

  let tabledata = document.createElement('td');
  tabledata.textContent = this.name;
  tableRow.appendChild(tabledata);

  for (let i = 0;i< storeHours.length ; i++){
    let td = document.createElement('td');
    td.innerText = `${this.avgSales[i]} cookies`;
    tableRow.appendChild(td);
    console.log(storeHours.length);
  }


  const dailyTotal = document.createElement('td');
  dailyTotal.innerText = this.dailyValue;
  tableRow.appendChild(dailyTotal);



};

function headerRow(){

  const table = document.getElementById('thead');

  let tableRow  = document.createElement ('tr');
  let tableHeader = document.createElement ('th');
  table.appendChild(tableRow);
  tableHeader.innerText = 'hours';
  tableRow.appendChild(tableHeader);
  for ( let i = 0; i < storeHours.length; i ++){
    tableHeader = document.createElement ('th');
    tableHeader.innerText = storeHours[i];
    tableRow.appendChild(tableHeader);
  }
  const dailyTotal = document.createElement('th');
  dailyTotal.innerText = 'DAILY-TOTAL';
  tableRow.appendChild(dailyTotal);


}



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








// =================================
// boneyard==============
// ==================================

// actually rendering the table
// Location.prototype.actualRendor = function() {
//   this.avgSalesFunction();

//   let tableBody = document.getElementById('tablebody');

//   let tableRow = document.createElement('tr');
//   let minCust = document.createElement('td');
//   let maxCust = document.createElement('td');
//   let avgCookie = document.createElement('td');
//   minCust.innerText = this.minCust;
//   maxCust.innerText = this.maxCust;
//   avgCookie.innerText = this.avgCookie;

//   // append the 3tds
//   tableRow.appendChild(minCust);
//   tableRow.appendChild(maxCust);
//   tableRow.appendChild(avgCookie);
//   // append row to table body
//   tableBody.appendChild(tableRow);
// };




// Location.prototype.renderTable = function() {

//  let table = document.getElementById('table');
//   let tBody = document.createElement('tr');
//   let locat = document.createElement('th');
//   locat.innerText = this.Location;
//   table.appendChild(locat);

//   for(let i = 0; i < this.sales.length; i++){
// actually rendering the table
// Location.prototype.actualRendor = function() {
//   this.avgSalesFunction();

//   let tableBody = document.getElementById('tablebody');

//   let tableRow = document.createElement('tr');
//   let minCust = document.createElement('td');
//   let maxCust = document.createElement('td');
//   let avgCookie = document.createElement('td');
//   minCust.innerText = this.minCust;
//   maxCust.innerText = this.maxCust;
//   avgCookie.innerText = this.avgCookie;

//   // append the 3tds
//   tableRow.appendChild(minCust);
//   tableRow.appendChild(maxCust);
//   tableRow.appendChild(avgCookie);
//   // append row to table body
//   tableBody.appendChild(tableRow);
// };
//     let sales = document.createElement('td');
//     sales.innerText = this.sales[i];
//     tBody.appendChild(sales);
//     tBody.appendChild(tBody);
//   }
// };
// }
// };

// renderSales();



