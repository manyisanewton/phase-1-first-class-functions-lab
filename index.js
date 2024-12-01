
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
console.log(returnFirstTwoDrivers(drivers))

// Return the last two drivers
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
console.log(returnLastTwoDrivers(drivers))

// Array of selecting drivers functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//fareMultiplier
const createFareMultiplier = (factor) => {
    return (fare) => fare * factor;
  }
  const fareMultiplier = createFareMultiplier(2);
  console.log(fareMultiplier(400))

//fareDoubler
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));


//fareTripler
const fareTripler = createFareMultiplier(3);
console.log(fareTripler(12));


//fareQuintupler
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5))



// Select different drivers based on a given function
const selectDifferentDrivers = (arrayOfDrivers, driverSelectorFunction) => driverSelectorFunction(arrayOfDrivers);