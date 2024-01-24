const dinosData = require("../data/dinosaurs");
const roomsData = require("../data/rooms");
const ticketsData = require("../data/tickets");

// Stretch goals

console.log('How many dinosaurs are in the museum?');
/** getNumber of Dinosaurs */

function getNumberOfDinosaurs(dinosaurs) {
  return dinosaurs.length
}

function printNumOfDinoMess() {
  console.log(`The Dinosaur Museum has ${getNumberOfDinosaurs(dinosData)} life size dinosaurs on exhibit!`);
}

printNumOfDinoMess();


console.log('How many rooms are in the museum?');
const numOfRooms = roomsData.length
console.log(`The Dinosaur Museum has ${numOfRooms} rooms totalling 5,000 sqft!`);


// console.table(roomsData);