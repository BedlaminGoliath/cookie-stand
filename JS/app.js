'use strict';
// create a random number generator with the parameters being min and max cust
function randomNumberCustomers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}
// function DomRender (){

// }

// let random1= getRandomNumber(5,15);
// console.log(random1)

// locations
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];
let hourByHours = storeHours.length;


//  created random number function

//stores min and max and avg

// have ul for each shop in html

// creat object lit. with function
let seattle = {
  minCust: 23,
  maxCust: 65 ,
  avgCookie:6.3 ,
  avgSales:[],


  avgSalesFunction: function(){
    for(let i = 0; i<storeHours.length; i++){
      console.log(storeHours);
      let randomCustomers = randomNumberCustomers(this.minCust, this.maxCust);
      let avgCookieSales = Math.ceil((randomCustomers * this.avgCookie));
      this.avgSales.push(avgCookieSales);
    }
  },
  render() {
    this.avgSalesFunction();
    let list = document.getElementById('seattle');
    for (let i = 0;i< storeHours.length ; i++){
      let li = document.createElement('li');
      li.innerText = ` ${storeHours[i]}: ${this.avgSales[i]} cookies`;
      list.appendChild(li);
    }

  }
  // console.log(avgSales)
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
    console.log(list);
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

// console.log(storeLocation);

//   avgSalesFunction= function() {
//     for(let j = 0; j<storeHours.length; j++){
//       console.log(storeHours);
//       let randomCustomers = randomNumberCustomers(storeLocation.minCust, storeLocation.maxCust);
//       let avgCookieSales = (randomCustomers * storeLocation.avgCookie);
//       // console.log(avgCookieSales);
//       // console.log(storeLocation.avgSales);
//       storeLocation.avgSales.push(avgCookieSales);
//     }

// //   }
// render() {
//     this.avgSalesFunction();
//     let list = document.getElementById('tokyo');
//     for (let i = 0;i< storeHours.length ; i++){
//       let li = document.createElement('li');
//       li.textContent= this.avgSales[i];
//       list.appendChild(li);
//     }
//   }

// function location(minCust,maxCust, avgCookie ){
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookie = avgCookie;

//    let seattle = new location (seattle, 23, 65, 6.3);
//    let tokyo = new location (2, 24, 1.2);
//    let dubai = new location (11, 38, 3.7);
//    let paris = new location (20, 38, 2.3);
//    let lima = new lima (2, 16, 4.6);