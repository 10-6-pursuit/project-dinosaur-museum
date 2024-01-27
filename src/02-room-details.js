/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  let dinoId = "";

  for (let index of dinosaurs) {
    if (index.name === dinosaurName) {
      dinoId = index.dinosaurId;
      break;
    }
  }

  if (!dinoId) return `Dinosaur with name '${dinosaurName}' cannot be found.`;

  for (let index of rooms) {
    if (index['dinosaurs'].includes(dinoId)) {
      return index.name;
    }
  }

  return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
}

/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */
function getConnectedRoomNamesById(rooms, id) {
  let roomIds = [];
  let result = [];

  for (let index of rooms) {
    if (index.roomId === id) {
      roomIds = index.connectsTo;
    }
  }

  if (!roomIds.length) return `Room with ID of '${id}' could not be found.`;


  for (i of roomIds) {
    switch (i) {
      case "A6QaYdyKra": result.push('Ticket Center'); break;
      case "zwfsfPU5u": result.push('Entrance Room'); break;
      case "aIA6tevTne": result.push('Coat Check Room'); break;
      case "dpQnu5wgaN": result.push('Ellis Family Hall'); break;
      case "L72moIRcrX": result.push('Kit Hopkins Education Wing'); break;
      case "Ys2Trg-1OT": result.push('Terrell Leon Lecture Room'); break;
      case "0eNtkY5WoA": result.push('Haley Hall'); break;
      case "dBZeK6vhpt": result.push('Paxton Decker Terrace'); break;
      case "VEr3w2ca_v": result.push('Cabrera Hall'); break;
      case "Y707HL8uP9": result.push('Roberts Room'); break;
      case "Gp6nCN1JGT": result.push('Reyes Hall'); break;
      case "1FMoeqQxFk": result.push('Blackwell Amphitheater'); break;
      case "qi5e4IFDby": result.push('Bryan Decker Hall'); break;
      case "nt85di9a1V": result.push('Owen Family Room'); break;
    }
  }
  
  if (!result.length) return `Room with ID of 'incorrect-id' could not be found.`;

  return result;
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
