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
function calculateTicketPrice(ticketData, ticketInfo) {

  let typeOfHuman = ["child", "adult", "senior"]
  let typeOfTicket = ["general", "membership", "extras"]
  let typeOfExtras = ["movie", "education", "terrace"]

  const { ticketType, entrantType, extras } = ticketInfo

      if (!typeOfTicket.includes(ticketType)) {
        return `Ticket type '${ticketType}' cannot be found.`
      } else if (extras.length >= 1 && !(typeOfExtras.includes(extras[0]))){
        return `Extra type '${extras}' cannot be found.`
      } else if (typeOfTicket.includes(ticketType) && !typeOfHuman.includes(entrantType)){
        return `Entrant type '${entrantType}' cannot be found.`
      } else if (typeOfTicket.includes(ticketType) && extras.length === 0 && typeOfHuman.includes(entrantType)){
        return ticketData[ticketType].priceInCents[entrantType];
      } else if (typeOfTicket.includes(ticketType) && extras.length >= 1 && typeOfHuman.includes(entrantType)){
        let originalPrice = ticketData[ticketType].priceInCents[entrantType]
        for (let extra of extras){
          originalPrice += ticketData.extras[extra].priceInCents[entrantType]
        }
        return originalPrice
      }
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
function purchaseTickets(ticketData, purchases) {

  const newPurchasesArray = purchases.map(obj => ({...obj}));
  const extraPurchasesArray = purchases.map(obj => ({...obj}));

  let humanType = ["child", "adult", "senior"]
  let ticketType = ["general", "membership", "extras"]
  let extras = ["movie", "education", "terrace"]
  
  for (let ticket of purchases){
    if (!ticketType.includes(ticket.ticketType)) {
    return `Ticket type '${ticket.ticketType}' cannot be found.`
  } else if (ticket.extras.length >= 1 && !(extras.includes(ticket.extras[0]))){
    return `Extra type '${ticket.extras}' cannot be found.`
  } else if (ticketType.includes(ticket.ticketType) && !humanType.includes(ticket.entrantType)){
    return `Entrant type '${ticket.entrantType}' cannot be found.`
  } 
}
  
  newPurchasesArray.map(obj => {
    if (!obj.ticketPrice){
      obj.ticketPrice = ticketData[obj.ticketType].priceInCents[obj.entrantType]
    } })

  extraPurchasesArray.map(obj => {
      if (!obj.extraTicketPrice){
        let extraCost = ticketData[obj.ticketType].priceInCents[obj.entrantType]
        for (let extra of obj.extras){
          extraCost += ticketData.extras[extra].priceInCents[obj.entrantType]
        }
        obj.extraTicketPrice = extraCost
      } 
      if (!obj.access){
        let extraAccess = "";
        for (let extra of obj.extras){
          extraAccess += ` ${ticketData.extras[extra].description},`
        }
        obj.access = extraAccess.slice(1, extraAccess.length - 1)
      }})

  let ticketTotal = 0;
  for (let ticket of newPurchasesArray) {
    ticketTotal += ticket.ticketPrice
  }

  let extraTicketTotal = 0;
  for (let ticket of extraPurchasesArray) {
    extraTicketTotal += ticket.extraTicketPrice
  }
  
  let noExtraReceiptString = newPurchasesArray.reduce(
    (a, b) =>
      a +
      `${b.entrantType[0].toUpperCase() + b.entrantType.slice(1)} ${
        b.ticketType[0].toUpperCase() + b.ticketType.slice(1)
      } Admission: $${b.ticketPrice / 100}.00\n`,
    "",
  );

  let extraReceiptString = extraPurchasesArray.reduce(
    (a, b) =>
      a +
      `${b.entrantType[0].toUpperCase() + b.entrantType.slice(1)} ${
        b.ticketType[0].toUpperCase() + b.ticketType.slice(1)
      } Admission: $${b.extraTicketPrice / 100}.00 (${b.access})\n`,
    "",
  );

  
  let receiptMsg = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${noExtraReceiptString}-------------------------------------------\nTOTAL: $${ticketTotal / 100}.00`

  let extraReceiptMsg = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${extraReceiptString}-------------------------------------------\nTOTAL: $${extraTicketTotal / 100}.00`

  if (ticketType.includes(purchases[0].ticketType) && purchases[0].extras.length === 0 && humanType.includes(purchases[0].entrantType)) {
    return receiptMsg
  }

  if (ticketType.includes(purchases[0].ticketType) && purchases[0].extras.length >= 1 && humanType.includes(purchases[0].entrantType)){
    return extraReceiptMsg
  }

}


// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
