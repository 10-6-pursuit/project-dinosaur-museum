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
  let dinoId = null;
  let dinoInRoom = null;
  const noDino = `Dinosaur with name '${dinosaurName}' cannot be found.`
  for (let dino of dinosaurs) {
    if (dino.name === dinosaurName) {
      dinoId = dino.dinosaurId
    }
  }
  if (!dinoId) return noDino;
  for (let room of rooms) {
    if (room.dinosaurs.includes(dinoId)) return room.name;
  }
  return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
}



const input = [
  {
    roomId: "xwG7O4wQl",
    name: "Room A",
    requiredTicketPermissions: [],
    dinosaurs: [],
    connectsTo: [
      "GHPLI7EmD", // Room B
      "eU46gvYUF", // Room C
      "incorrect-id", // Incorrect Room. Does not exist.
    ],
  },
  {
    roomId: "GHPLI7EmD",
    name: "Room B",
    requiredTicketPermissions: [],
    dinosaurs: [],
    connectsTo: [
      "xwG7O4wQl", // Room A
    ],
  },
  {
    roomId: "eU46gvYUF", // 3
    name: "Room C",
    requiredTicketPermissions: [],
    dinosaurs: [],
    connectsTo: [
      "xwG7O4wQl", // Room A
    ],
  },
];

const badID = 'xwG7O4wQl';

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
  // find room by id
  // get connectTo array of roomIds
  // for each room id get room name
  
  const roomsById = [];
  const roomsByName = [];
  let initialRoomIndex = null;
  
  let connectedRoomsById;
  let connectedRoomsByName = [];
  let connectedRoomError;

  for (let i = 0; i < rooms.length; i++) {
    roomsById.push(rooms[i].roomId);
    roomsByName.push(rooms[i].name);
    if (rooms[i].roomId === id){
      initialRoomIndex = i;
      connectedRoomsById = rooms[i].connectsTo;
    }
  }
  
  if (initialRoomIndex === null) {
    return `Room with ID of '${id}' could not be found.`
  }
  
  for (let connectedRoomId of connectedRoomsById) {
    let connectedRoomIndex = roomsById.indexOf(connectedRoomId)
    if (connectedRoomIndex > -1) {
      connectedRoomsByName.push(roomsByName[connectedRoomIndex]);
    } else {
      return `Room with ID of '${connectedRoomId}' could not be found.`
    }
  }

  console.log(`connected rooms`, connectedRoomsByName);
  
  // return connectedRooms || `Room with ID of '${id}' could not be found.`;

  return connectedRoomsByName;
}


console.log(getConnectedRoomNamesById(exampleRoomData, 'A6QaYdyKra'));
console.log(getConnectedRoomNamesById(input, 'xwG7O4wQl'));

/**
 * takes looks for room id in rooms and outputs the room name
 */
function getRoomById(rooms, connectedId) {
  for (let room of rooms) {
    if (room.roomId === connectedId ) return room.name
  }
  connectedRoomError.push()
}

function checkRoomId(rooms, id) {
  const roomsById = [];
  for (let room of rooms) {
    rooms.Id
  }
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
