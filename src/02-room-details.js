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
 * //1. loop thru og dino data match dino name to id
 * //2.loop thru room data 
 * //3. return room name aka  " "
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
  let dinoId = null;
  for (let i = 0; i < dinosaurs.length; i++){
    if (dinosaurs[i].name === dinosaurName){
      dinoId = dinosaurs[i].dinosaurId
    }
  }
  if (!dinoId) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`
  }

  for (let i = 0; i < rooms.length; i++){
    let room = rooms[i]
    if(room.dinosaurs.includes(dinoId)){
      return room.name
    }
  }







  return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
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
    // 1_ Loop through ALL rooms to build an object
      // the keys in the object should be the roomID, the values should be the room name
      // guide = { A6QaYdyKra : Ticket Center, }
    // for (let i = 0; i < rooms.length; i++){
      // guide[rooms[i].roomId] = 

    // 2) go to the room with your id param, pull the connectsTo key to get the array of ids,
      // map the connectsTo array 

        //[
    //   "zwfsfPU5u", // Entrance Room
    //   "aIA6tevTne", // Coat Check Room
    //   "dpQnu5wgaN", // Ellis Family Hall
    //   "L72moIRcrX", // Kit Hopkins Education Wing
    // ].map ( room => guide[room])
function getConnectedRoomNamesById(rooms, id) {

}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
