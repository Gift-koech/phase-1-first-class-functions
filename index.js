const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};
const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int) {
  if (int === 2) {
    return fareDoubler;
  } else if (int === 3) {
    return fareTripler;
  } else if (int === 5) {
    return fareQuintupler;
  }
}
function fareDoubler(fare) {
  return fare * 2;
}
function fareTripler(fare) {
  return fare * 3;
}
function fareQuintupler(fare) {
  return fare * 5;
}
function selectDifferentDrivers(arr, driversfn) {
  if (driversfn === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arr);
  } else if (driversfn === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arr);
  }
}