'use strict';

// locations
let location = ['seattle', 'tokyo', 'paris', 'dubai', 'lima'];
// hours open
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];


//  created random number function
function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let random1= getRandomNumber(5,15);
console.log(random1);

//stores min and max and avg

// have ul for each shop in html

let seattleShop = {
  minCust:'23',
  maxCust:'65' ,
  avgCookie:6.3 ,
};

let tokyoShop = {
  minCust:'3',
  maxCust:'24',
  avgCookie: 1.2,
};

let dubaiShop = {
  minCust:'11',
  maxCust:'38' ,
  avgCookie: 3.7,
};

let parisShop = {
  minCust:'20',
  maxCust:'38' ,
  avgCookie: 2.3,
};

let limaShop = {
  minCust:'2',
  maxCust:'16' ,
  avgCookie: 4.6,
};

// itterate hours at each location forloop

for(let i=0; i<location.length;i++){

  for(let j=0;j<hours.length;j++){
        
  }

}
