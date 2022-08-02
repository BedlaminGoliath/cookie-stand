'use strict';
// create a random number generator with the parameters being min and max cust
function randomNumberCustomers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];

let seattle = {
  minCust: 23,
  maxCust: 65 ,
  avgCookie:6.3 ,
  avgSales:[],

  // random number function
  avgSalesFunction: function(){
    for(let i = 0; i<storeHours.length; i++){
      console.log(storeHours);
      let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
      let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
      this.avgSales.push(avgCookieSales);
    }
  },
  // render function
  render() {
    this.avgSalesFunction();
    let list = document.getElementById('seattle');
    for (let i = 0;i< storeHours.length ; i++){
      let li = document.createElement('li');
      li.innerText = ` ${storeHours[i]}: ${this.avgSales[i]} cookies`;
      list.appendChild(li);
    }

  }
};
seattle.render();

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  avgSales:[],
  avgSalesFunction: function(){
    for(let j = 0; j<storeHours.length; j++){
      console.log(storeHours);
      let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
      let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
      this.avgSales.push(avgCookieSales);
    }
  },
  render() {
    this.avgSalesFunction();
    let list = document.getElementById('tokyo');
    for (let i = 0;i< storeHours.length ; i++){
      let li = document.createElement('li');
      li.innerText = `${storeHours[i]}: ${this.avgSales[i]} cookies`;
      list.appendChild(li);
    }
  }
};
tokyo.render();

let dubai = {
  minCust: 11,
  maxCust: 38 ,
  avgCookie: 3.7,
  avgSales:[],
  avgSalesFunction: function(){
    for(let j = 0; j<storeHours.length; j++){
      console.log(storeHours);
      let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
      let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
      this.avgSales.push(avgCookieSales);
    }
  },
  render() {
    this.avgSalesFunction();
    let list = document.getElementById('dubai');
    for (let i = 0;i< storeHours.length ; i++){
      let li = document.createElement('li');
      li.innerText =`${storeHours[i]}: ${this.avgSales[i]} cookies`;
      list.appendChild(li);
    }
  }
};
dubai.render();

let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  avgSales:[],
  avgSalesFunction: function(){
    for(let j = 0; j<storeHours.length; j++){
      console.log(storeHours);
      let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
      let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
      this.avgSales.push(avgCookieSales);
    }
  },
  render() {
    this.avgSalesFunction();
    let list = document.getElementById('paris');
    for (let i = 0;i< storeHours.length ; i++){
      let li = document.createElement('li');
      li.innerText =`${storeHours[i]}: ${this.avgSales[i]} cookies`;
      list.appendChild(li);
    }
  }
};
paris.render();

let lima = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  avgSales:[],
  avgSalesFunction: function(){
    for(let j = 0; j<storeHours.length; j++){
      console.log(storeHours);
      let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
      let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
      this.avgSales.push(avgCookieSales);
    }
  },
  render() {
    this.avgSalesFunction();
    let list = document.getElementById('lima');
    for (let i = 0;i< storeHours.length ; i++){
      let li = document.createElement('li');
      li.innerText =`${storeHours[i]}: ${this.avgSales[i]} cookies`;
      list.appendChild(li);
    }
  }
};
lima.render();

// constructor function: WORKING
function Location(minCust,maxCust, avgCookie){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.avgSales = [];
  this.avgSalesFunction = function(){
    for(let j = 0; j<storeHours.length; j++){
      console.log(storeHours);
      let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
      let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
      this.avgSales.push(avgCookieSales);
    }

  };
}


let seattle1 = new Location(23, 65, 6.3);
seattle1.avgSalesFunction();
console.log(seattle1);


let tokyo1 = new Location(3, 24, 1.2);
tokyo1.avgSalesFunction();

console.log(tokyo1);


// let edmonds = new Location (12 , 14, 63);

// edmonds.avgSalesFunction();
// console.log(edmonds);


// trying prototype constructor needs to assign output to avgSales key
// Location.prototype.randomNumberCustomers = function(){
//   for(let i = 0; i<storeHours.length; i++){
//     console.log(storeHours);
//     let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
//     let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
//     this.avgSales.push(avgCookieSales);
//   }
//   console.log(this.avgCookieSales);
// };
// Edmonds.randomNumberCustomers();


// const locationMethod = {
//   render() {
//     this.avgSalesFunction();
//     let list = document.getElementById('lima');
//     for (let i = 0;i< storeHours.length ; i++){
//       let li = document.createElement('li');
//       li.innerText =`${storeHours[i]}: ${this.avgSales[i]} cookies`;
//       list.appendChild(li);
//     }
//   },
//   avgSalesFunction: function(){
//     for(let j = 0; j<storeHours.length; j++){
//       console.log(storeHours);
//       let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
//       let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
//       this.avgSales.push(avgCookieSales);
//     }
//   }
// };
