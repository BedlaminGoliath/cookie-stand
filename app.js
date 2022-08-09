'use strict';

let storeHours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];

let allStores = [];

// =========================================================================================
// =============================factory and avg sales things============================

// constructor function: WORKING
function Location(name, minCust,maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.randomCustomersEachHour = [];
  this.avgSales = [];
  // this.daytots = 0;
  this.dailyValue = 0;

  allStores.push(this);
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
Location.prototype.randomNumberCustomers = function(){
  for (let i = 0; i < storeHours.length; i++){
    this.randomCustomersEachHour.push(random(this.minCust, this.maxCust));
  }
};

// average sales function
Location.prototype.avgSalesFunction = function(){
  this.randomNumberCustomers();
  for ( let i = 0; i < storeHours.length; i++){
    let avgCookieSales = Math.ceil((this.randomCustomersEachHour[i] * this.avgCookie));
    console.log(typeof(avgCookieSales));
    this.avgSales.push(avgCookieSales);
    this.dailyValue += avgCookieSales;
  }
  // for (let i = 0; i < this.avgSales.length; i++){
  //   this.dailyValue += this.avgSales[i];
  // }

};

new Location('seattle', 23, 65, 6.3);
new Location('tokyo', 3, 24, 1.2 );
new Location('dubai', 11, 38, 3.7);
new Location('paris', 20, 38, 3.3);
new Location('lima', 2, 16, 4.6);

console.log(allStores);
// ==============================================
// ================Rendering things====================================


// render function
Location.prototype.render = function(){
  this.avgSalesFunction();
  let table = document.getElementById('tbody');
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



function renderFooter(){

  const table = document.getElementById('tfoot');

  let tableRow = document.createElement ('tr');
  let tableData = document.createElement ('td');
  table.appendChild(tableRow);
  tableData.innerText = ('total-hours sale');
  tableRow.appendChild(tableData);
  for (let i = 0; i < storeHours.length; i++){
    let locationTotals = 0;
    for (let j = 0; j < allStores.length; j++){
      // console.log(allStores[j].avgSales[i]);
      let thisHour = allStores[j].avgSales[i];
      locationTotals += thisHour;
    }

    let hourlyTotal = document.createElement('td');
    hourlyTotal.innerText = locationTotals;
    tableRow.appendChild(hourlyTotal);
  }

}


(function renderTable (){
  headerRow();
  // createTableFooter();

  for (let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
  console.log(allStores);
})();

console.log(allStores);

let locationForm = document.getElementById('addLocation');
locationForm.addEventListener('submit', addEventListener);

function addEventListener (event){
  event.preventDefault();
  let form = event.target;
  let minCust = form.minCust.value;
  let maxCust = form.maxCust.value;
  let avgCookie = form.avgCookie.value;
  console.log(minCust, maxCust, avgCookie);

  new Location (minCust, maxCust, avgCookie, 'edmonds');

}



renderFooter();

// comment to add to reload file
