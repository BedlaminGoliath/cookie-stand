'use strict';

// locations
let storeLocation = ['seattle', 'tokyo', 'paris', 'dubai', 'lima'];
// hours open
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];


//  created random number function

//stores min and max and avg

// have ul for each shop in html

let seattle = {
  minCust:'23',
  maxCust:'65' ,
  avgCookie:6.3 ,
  avgSales: 
};


let tokyo = {
  minCust:'3',
  maxCust:'24',
  avgCookie: 1.2,
  avgSales: 
};

let dubai = {
  minCust:'11',
  maxCust:'38' ,
  avgCookie: 3.7,
  avgSales: 
};

let paris = {
  minCust:'20',
  maxCust:'38' ,
  avgCookie: 2.3,
  avgSales: 
};

let lima = {
  minCust:'2',
  maxCust:'16' ,
  avgCookie: 4.6,
  avgSales: 
};


// itterate hours at each location 'forloop'
for(let i=0; i<storeLocation.length;i++){
console.log(storeLocation);
  for(let j=0; j<storeHours.length;j++){
    console.log(storeHours.length);
  let list = document.getElementById('seattle');
  }
    
}
// create function
function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max * min / 2) + min);
}
let random1= getRandomNumber(5,15);
console.log(random1);