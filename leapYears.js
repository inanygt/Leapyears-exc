const leapYears = function(year) {
   if (year%400 == 0) {
      return true
   } else if (year%100 == 0) {
      return false
   } else if (Number.isInteger(year/4)) {
      return true;
   } else {
      return false;
   }
};

// Do not edit below this line
module.exports = leapYears;


// npm test leapyears.spec