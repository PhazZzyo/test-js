// "use strict";

// -------------- --------- ---- ====***** ( Exercise ) #12

function countProps(object) {
  let propCount = 0;
  // Change code below this line
    
    for (const prop in object) {
        // Change code below this line
        if (object.hasOwnProperty(prop)) {
            propCount += 1;
        }
    }
  // Change code above this line
  return propCount;
}

// -------------- --------- ---- ====***** ( Exercise ) #11

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
 if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
 }
  // Change code above this line
}


// -------------- --------- ---- ====***** ( Exercise ) #10

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);  
}