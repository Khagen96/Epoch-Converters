const readLineSync = require('readline-sync');
const utilityOption = parseInt(readLineSync.question('Welcome to Epoch Converters Utility. \nWhich utility function would you like to use?\n1. Epoch to Human Date\n2. Human Date to Epoch\nEnter your choice:'));

function convertToEpoch(humandate){
  var getDate = new Date(humandate); 
  var getEpoch = getDate.getTime();

  return getEpoch;

}
function convertToHumanDate(epochdate){
var date = new Date(epochdate);
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var fullDate = day + "/" +(month + 1) + "/" + year +" "+hour+":"+minute+":"+second;

return fullDate;
}

function takeEpochInput(){
  const epoch = parseInt(readLineSync.question('Please enter the Epoch Date. Eg: 1611041456000\n'));
  let humandate=convertToHumanDate(epoch);

  return humandate;
}
function  takeHumanDateInput(){
  console.log('Please enter the Human Date one by one. Eg year: 2021, month: 1, date: 19, hours: 7, minutes: 30, seconds: 56\n');
  
  const year = readLineSync.question('Please enter year:\n');
  const month = readLineSync.question('Please enter the month:\n');
  const date = readLineSync.question('Please enter the date:\n');
  const hour = readLineSync.question('Please enter the hour:\n');
  const minute = readLineSync.question('Please enter the minute:\n');
  const second = readLineSync.question('Please enter the second:\n');

  const humandate=month+' '+date+' '+year+' '+hour+':'+minute+':'+second;
  let epochDate=convertToEpoch(humandate);

  return epochDate;

}


switch(utilityOption){
case 1:{
  const result = takeEpochInput();
  console.log("The Human Date is: "+result);
  break;
}
case 2:{
  const result = takeHumanDateInput();
  console.log("The Epoch date is: "+result);
  break;
}
default:{
  console.log("Invalid Input");  
  break;
}
}