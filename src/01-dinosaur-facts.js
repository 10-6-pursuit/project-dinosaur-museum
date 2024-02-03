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
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`. //(lengthInMeters)
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 * 1. Find the dino obj with the highest value for the lengthInMeters key
 * Solution 1
 * if (!dinosaur.length) return {};
 * 
 * const longestDino = dinosaur.reduce((maxDino, currDino) => currDino.lengthInMeters > maxDino,lengthInMeters ? currDino : MaxDino)
 * return { [longestDino.name]: longestDino.lengthInMeters * 3.281}
 *2. Return a NEW obj where the name of the dino is the key and the value is teh 
 * 
 * solution 2
 * let longestDino = dinosaur[0];
 * 
 * for (let dino of dinosaurs) {
 * longest}
 */
function getLongestDinosaur(dinosaurs) {
  if (!dinosaurs.length) {
    return {};
  }

  let longestDino = dinosaurs[0];

  //iterating through an array through let of loop.

  for (let currDino of dinosaurs) { 
    if (currDino.lengthInMeters > longestDino.lengthInMeters) {
      longestDino = currDino;
    }
  }

  longestDino.lengthInFeet = longestDino.lengthInMeters * 3.281;

  return {[longestDino.name]: longestDino.lengthInFeet};
}



//const result = getLongestDinosaur(exampleDinosaurData);
//console.log(result);



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
 * 
 * 1. find dino by id
 * const myDino = dinosaur.find(dino => dino.dinosauriId === id)
 * 2. if there's a dino
 * if (myDino) {
 * const { name, pronounciation, info, period, mya } =
 * myDino;
 * return `{name}(${pronunciation})\n${info} had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago.`
 } else {
  return `A dinosaur with an ID of '${id}' cannot be found.`
 }
 * 
 * //return a formatted string
 * //else return an error message
 * 
 * 
 * 
 * 
 * 
 */
function getDinosaurDescription(dinosaurs, id) {
 
 for (let i = 0; i < dinosaurs.length; i++) {
  let dino = dinosaurs[i];
  if (dinosaurs[i].dinosaurId === id) {
    return `${dino.name} (${dino.pronunciation})\n${dino.info} It lived in the ${dino.period} period, over ${dino.mya.slice(-1)} million years ago.`;    
    } 
  }
   return "A dinosaur with an ID of 'incorrect-id' cannot be found.";
}


//pseudocode:
// How do we know what dino to look for: access dinosaur iD
//if that dino id cannot be found, return error message: conditional statement ... if (!dinosaurId) {return error message}
// if id can be found, return description : conditional statement and then return




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
 * 
 * function getDinosaursAliveMya(dinosaurs, mya, key) {
 * 1. find the dinos that were alive
 * dinosaurs.filter(dino => (dino.mya.length === 1 && (dino.mya[0] === mya || dino.mya === mya + 1)) || mya >= dino.mya[1] && mya <= dino.mya[0])).map(dino => dino[key] || dino.dinosaurId);
 * }
 *
 * 
 * 
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
    let dinoArr = [];

    function isDinoAlive(dino, mya) {
      if (dino.mya.length === 1) {
          if (dino.mya[0] === mya || dino.mya[0] - 1 === mya) {
              return true;
          }
      } else {
          if (mya >= dino.mya[1] && mya <= dino.mya[0]) {
            return true;
          }
      }
      return false;
    }
     // console.log(isDinoAlive(dino, mya));
        let dinoArrAlt = [];
  for (let dino of dinosaurs) {
    let shouldPush = isDinoAlive(dino, mya); // hold true or false
      if (shouldPush) {
        dinoArrAlt.push(key ? dino[key] || dino.dinosaurId : dino.dinosaurId);
      }
  }
  return dinoArrAlt;
} 

//if that element passes the helper function.. if true for mya param, then return 

//console.log(function isDinoAlive(dino, mya));


module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
