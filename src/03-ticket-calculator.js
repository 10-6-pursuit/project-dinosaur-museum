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
  const ticketType = ["general", "membership"];
  const entrantType = ["adult", "child", "senior"];
  const extras = ["movie", "education", "terrace"];

  if (!ticketType.includes(ticketInfo.ticketType)) {
    return `Ticket type '${ticketInfo["ticketType"]}' cannot be found.`;
  }
  if (!entrantType.includes(ticketInfo.entrantType)) {
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
  }
  for (let extra of ticketInfo.extras) {
    if (!extras.includes(extra)) {
      return `Extra type '${extra}' cannot be found.`;
    }
  }

  let sum = 0;
  for (const key in ticketData) {
    if (key === ticketInfo["ticketType"]) {
      let priceInCents = ticketData[key].priceInCents;
      for (const key in priceInCents) {
        if (key === ticketInfo["entrantType"]) {
          sum += priceInCents[key];
        }
      }
    }
  }
  for (let i = 0; i < ticketInfo["extras"].length; i++) {
    const category = ticketInfo["extras"][i];
    for (const key in ticketData["extras"]) {
      if (category === key) {
        let extraPriceInCents = ticketData["extras"][category].priceInCents;
        for (const key in extraPriceInCents) {
          if (key === ticketInfo["entrantType"]) {
            sum += extraPriceInCents[key];
          }
        }
      }
    }
  }
  return sum;
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
  let sum = 0;
  let totalSum = 0;
  let description = null;
  const totalForEach = [];
  const messageArr = [];

  for (let i = 0; i < purchases.length; i++) {
    const ticketType = purchases[i].ticketType;
    const entrantType = purchases[i].entrantType;
    const extraType = purchases[i].extras;
    let str = "";

    if (ticketType !== "general" && ticketType !== "membership") {
      return `Ticket type '${ticketType}' cannot be found.`;
    }
    if (entrantType !== "adult" && entrantType !== "child" && entrantType !== "senior") {
      return `Entrant type '${entrantType}' cannot be found.`;
    }

    for (const key in ticketData) {
      if (key === ticketType) {
        let obj = ticketData[key];
        let type = obj.priceInCents;
        description = obj.description;

        for (const key in type) {
          if (key === entrantType) {
            let price = type[key];
            sum += price;
          }
        }
      }
    }
    for (let extra of extraType) {
      if (extra !== "education" && extra !== "movie" && extra !== "terrace") {
        return `Extra type '${extra}' cannot be found.`;
      }

      for (const key in ticketData["extras"]) {
        if (key === extra) {
          let extraObj = ticketData["extras"][key];
          let extraPrice = extraObj.priceInCents;
          eachExtra = extraObj.description;
          if (extraType.length === 1) { 
            str += `${eachExtra}`;
          } else {
            str += `${eachExtra}, `;
          }

          for (const key in extraPrice) {
            if (key === entrantType) {
              let pricing = extraPrice[key];
              sum += pricing;
            }
          }
        }
      }
    }
    let entrantTypeUpper =
      entrantType.charAt(0).toUpperCase() + entrantType.slice(1); 
    let ticketTypeUpper = description; 
    if (extraType.length > 1) {
      str = str.slice(0, -2);
    }
    let message = purchases[i]["extras"].length > 0
        ? `\n${entrantTypeUpper} ${ticketTypeUpper}: $${sum / 100}.00 (${str})`
        : `\n${entrantTypeUpper} ${ticketTypeUpper}: $${sum / 100}.00`;
    messageArr.push(message);
    totalForEach.push(sum / 100);
    sum = 0;
  }
  for (let sumsOfEach of totalForEach) {
    totalSum += sumsOfEach;
  }
  const startingMessage = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------`;
  const endOfMessage = `\n-------------------------------------------\nTOTAL: $${totalSum}.00`;
  return startingMessage + messageArr.join("") + endOfMessage;
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
