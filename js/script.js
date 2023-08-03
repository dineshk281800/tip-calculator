'use strict';

// variable
let totalBill=0;
let totalPeople=0;
let tipSelected=0;

const isNumeric=function(number){
  return !isNaN(number) && isFinite(number);
}


// Function to handle input value of the Bill

const billInput=function(){
  totalBill=Number(document.getElementById('bill-charge').value);

  // check for the valid input

  if(totalBill<=0){
    document.getElementById('bill-error-message').style.display='block';
  }else{
    document.getElementById('bill-error-message').style.display='none';
  }
}