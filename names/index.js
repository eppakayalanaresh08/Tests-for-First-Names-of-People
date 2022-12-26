const eachObject = require("../country/state/city/index");
const listObject = require("../utilities/utils/index");

const getPeopleInCity = (eachObject) => {
  return listObject(eachObject);
};
module.exports = getPeopleInCity;
