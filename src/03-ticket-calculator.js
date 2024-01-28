/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const exampleTicketData = require("../data/tickets");
// Do not change the line above.

/**
 * calculateTicketPrice()
 * ---------------------
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object} ticketInfo - An object representing data for a single ticket.
 * @param {string} ticketInfo.ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} ticketInfo.entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} ticketInfo.extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {number} The cost of the ticket in cents.
 *
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "adult",
      extras: [],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 3000
 *  
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "membership",
      entrantType: "child",
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 2500

 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "kid", // Incorrect
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> "Entrant type 'kid' cannot be found."
 */
function calculateTicketPrice(ticketData, ticketInfo, ticketType = ticketInfo.ticketType, entrantType = ticketInfo.entrantType, extras = ticketInfo.extras) {
  
  let isTicketTypeValid = ticketInfo.ticketType === "general" || ticketInfo.ticketType === "membership";
  let isEntrantValid = ticketInfo.entrantType === "adult" || ticketInfo.entrantType === "child" || ticketInfo.entrantType === "senior";
  let isExtraValid = ticketInfo.extras.every(elem => Object.keys(ticketData.extras).includes(elem));
  let sumOfExtras = 0;

  // Edge cases for when ticketType, entrantType and extras aren't valid.
  if (!isTicketTypeValid) return `Ticket type '${ticketInfo.ticketType}' cannot be found.`;
  
  if (!isEntrantValid) return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
  
  if (!(isExtraValid)) {
    return `Extra type '${ticketInfo.extras}' cannot be found.`
  } else {
    sumOfExtras = ticketInfo.extras.reduce((accu, currentVal) => ticketData.extras[currentVal]["priceInCents"][ticketInfo.entrantType] + accu, 0);
  }
  
  return ticketData[ticketInfo.ticketType]["priceInCents"][ticketInfo.entrantType] + sumOfExtras;


}



/**
 * purchaseTickets()
 * ---------------------
 * Returns a receipt based off of a number of purchase. Each "purchase" maintains the shape from `ticketInfo` in the previous function.
 *
 * Any errors that would occur as a result of incorrect ticket information should be surfaced in the same way it is in the previous function.
 * 
 * NOTE: Pay close attention to the format in the examples below and tests. You will need to have the same format to get the tests to pass.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
 * @param {string} purchases[].ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} purchases[].entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} purchases[].extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {string} A full receipt, with each individual ticket bought and the total.
 *
 * EXAMPLE:
 *  const purchases = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: ["movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "senior",
        extras: ["terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
    ];
    purchaseTickets(tickets, purchases);
    //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"

 * EXAMPLE:
    const purchases = [
      {
        ticketType: "discount", // Incorrect
        entrantType: "adult",
        extras: ["movie", "terrace"],
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found."
 */

//--------------------------------------- HELPER FUNCTIONS ----------------------------------------------------------------

const isTicketValid = (arr) => arr.ticketType === "general" || arr.ticketType === "membership";
const isEntrantValid = (arr) => arr.entrantType === "adult" || arr.entrantType === "child" || arr.entrantType === "senior";
const isExtraValid = (arr) => arr.extras.every((elem) => elem === "movie" || elem === "terrace" || elem === "education");
const sumOfExtras = (arr,ticketData) => arr.extras.reduce((sum, currentVal) => (currentVal === "movie" || currentVal === "education" || currentVal === "terrace") ? (sum + ticketData.extras[currentVal]["priceInCents"][arr.entrantType]) : sum + 0, 0);
const firstLetterCap = string => {
  let array = string.split("");
  array[0] = array[0].toUpperCase();
  return array.join(""); 
}

const extrasStringFormation = (array) => {
  let resultString = ` (`;
  if (array.length === 0) return "";

  for (let elem of array) {
    elem = firstLetterCap(elem);
    resultString += `${elem} Access, `;
  }
  if (resultString.length > 0) {
    let newResultString = resultString.split("");
    newResultString.splice(newResultString.length-2, 2, ")");
    resultString = newResultString.join("");
  }
  return resultString;
}

//-------------------------------------------------------------------------------------------------------------------------

function purchaseTickets(ticketData, purchases) {
  let finalReceipt = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`;
  let ticketSum;
  let finalTicketSum = 0
  let extraSum;
  for (let purchase of purchases) {
    if (isTicketValid(purchase) && isEntrantValid(purchase)) {
      if (!isExtraValid(purchase) && purchase.extras.length > 0) return `Extra type '${purchase.extras[0]}' cannot be found.`
      extraSum = sumOfExtras(purchase,ticketData);
      ticketSum = (ticketData[purchase.ticketType]["priceInCents"][purchase.entrantType] + extraSum) / 100;
      finalTicketSum += ticketSum;
      finalReceipt += `${firstLetterCap(purchase.entrantType)} ${firstLetterCap(purchase.ticketType)} Admission: $${ticketSum}.00${extrasStringFormation(purchase.extras)}\n`;
    } else {
      if (!isTicketValid(purchase)) return `Ticket type '${purchase.ticketType}' cannot be found.`;
      if (!isEntrantValid(purchase)) return `Entrant type '${purchase.entrantType}' cannot be found.`
    }
  }
  finalReceipt += `-------------------------------------------\nTOTAL: $${finalTicketSum}.00`;
  return finalReceipt;
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
