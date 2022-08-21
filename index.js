// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
// function findMatching(drivers, str){
//     return drivers.filter(driver => str.tolowerCase() === driver.tolowerCase());

// }
function findMatching(drivers,array) {
    return drivers.filter(user => array.toLowerCase() === user.toLowerCase());
  }

function fuzzyMatch(drivers,letter) {
    return drivers.filter(user => user.startsWith(letter));
    }
    
    function matchName (drivers,name) {
    return drivers.filter(user => user.name === name);
    }