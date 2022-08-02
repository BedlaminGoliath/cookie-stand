# OOPS We're under construction

[Take me to sales](/sales.html)

<!-- java logic for randomnumber -->
function randomNumberCustomers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}

-----

<!-- java logic for rendor -->
  render() {
    this.avgSalesFunction();
    let list = document.getElementById('seattle');
    for (let i = 0;i< storeHours.length ; i++){
      let li = document.createElement('li');
      li.innerText = ` ${storeHours[i]}: ${this.avgSales[i]} cookies`;
      list.appendChild(li);
    }

  }