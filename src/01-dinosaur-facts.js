/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  if (!dinosaurs.length) {
    return {};
  }

  let max = -Infinity;
  let obj = {};
  for (let i = 0; i < dinosaurs.length; i++) {
    const dinoName = dinosaurs[i].name;
    const dinoLengthInFeet = dinosaurs[i].lengthInMeters * 3.281;
    if (dinoLengthInFeet > max) {
      max = dinoLengthInFeet;
      maxName = dinoName;
    }
  }
  obj[maxName] = max;
  return obj;
}
//we need to have {Brachiosaurus: 98.43}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  for (let i = 0; i < dinosaurs.length; i++) {
    const dinoID = dinosaurs[i].dinosaurId;
    const name = dinosaurs[i].name;
    const pronunciation = dinosaurs[i].pronunciation;
    const info = dinosaurs[i].info;
    const period = dinosaurs[i].period;
    let mya = dinosaurs[i].mya
    
    if(mya.length > 1) {
      mya = dinosaurs[i].mya[1];
    } else {
      mya = dinosaurs[i].mya;
    }

    if (id === dinoID) {
      return `${name} (${pronunciation})\n${info} It lived in the ${period} period, over ${mya} million years ago.`;
    }
  }
  return `A dinosaur with an ID of 'incorrect-id' cannot be found.`;
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  //return all dinos ids for current mya to an array
  //array.push? //YES
  //if key provided: return the key values for all dinos in the current mya, instead of ids
  //if key does not have value, return ID's
  //if mya.length === 1
  //return empty array if mya does not match

  let arr = [];

  for (let i = 0; i < dinosaurs.length; i++) {
    const currentDino = dinosaurs[i];
    const currentDinoMya = dinosaurs[i].mya;
    const currentDinoId = dinosaurs[i].dinosaurId;

    if (currentDinoMya.includes(mya) && currentDino[key]) {
      arr.push(currentDino[key]);
    } else if (currentDinoMya.includes(mya) && !currentDino[key]) {
      arr.push(currentDinoId);
    }
  }
  return arr;
}

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
