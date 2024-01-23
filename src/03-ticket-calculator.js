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

// Main function
function calculateTicketPrice(ticketData, ticketInfo) {  
  // check for ticket for invalid ticket info
  const ticketError = checkTicketInfo(ticketData, ticketInfo);
  if (ticketError) return ticketError;

  // calculate price of admission and extras
  const admissionPrice = calculateAdmissionPrice(ticketData, ticketInfo)
  const addonsPrice = calculateAddonPrice(ticketData, ticketInfo);
  
  return admissionPrice + addonsPrice;
}

// Helper function - calculate admission price
function calculateAdmissionPrice(ticketData, { ticketType, entrantType }) {
  const admissionPrice = ticketData[ticketType].priceInCents[entrantType];
  return admissionPrice;
}

// Helper function - calculate price of extras on ticket
function calculateAddonPrice(ticketData, { extras, entrantType }) {
  let addonPrice = 0;
  for (let addon of extras) {
    addonPrice += ticketData.extras[addon].priceInCents[entrantType]
  }
  return addonPrice;
}
 // Helper function - check ticket info for invalid info
function checkTicketInfo(ticketData, { ticketType, entrantType, extras }) {
  // get arrays of ticket valid ticket types, entrants, and extras
  const validTicketTypes = Object.keys(ticketData);
  const validEntrants = Object.keys(ticketData.general.priceInCents);
  const validAddons = Object.keys(ticketData.extras);

  // check if all ticket info is invalid
  //  if invalid return appropriate error
  if (!validTicketTypes.includes(ticketType)) return `Ticket type '${ticketType}' cannot be found.`
  if (!validEntrants.includes(entrantType)) return `Entrant type '${entrantType}' cannot be found.`
  for (let addon of extras) {
    if (!validAddons.includes(addon)) return `Extra type '${addon}' cannot be found.`
  }
  return false;
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

// Main function
function purchaseTickets(ticketData, purchases) {
  // check tickets in purchases for errors
  for (let ticket of purchases) {
    if (checkTicketInfo(ticketData, ticket)) {
      return checkTicketInfo(ticketData, ticket);
    }
  }

  // variables for tickets in purchases and accumulator for price
  const tickets = [];
  let purchasePriceInCents = 0; 
  
  // for each ticket entrantType, ticketType,:, priceInDollars, (extras)
  for (let ticket of purchases) {
    // destructure iterated ticket in purchases
    const { entrantType, ticketType, extras } = ticket;
    const ticketPriceInCents = calculateTicketPrice(ticketData, ticket);

    // map `extras` to `access` to add `extras description` for receipt
    const access = extras.map(extra => ticketData.extras[extra].description);

    // get ticket admission and extra info
    const admissionDetails = `${capWord(entrantType)} ${ticketData[ticketType].description}: ${centsToDollars(ticketPriceInCents)}`
    const extrasDetails = access.length ? ' ('+access.join(', ')+')' : '';

    // push ticket admission or admission + extras info
    tickets.push(access.length ? admissionDetails+extrasDetails : admissionDetails);

    // accumulate ticket prices to purchasePriceInCents
    purchasePriceInCents += ticketPriceInCents;
  }

  // receipt variables
  const greeting = 'Thank you for visiting the Dinosaur Museum!';
  const horiRule = `\n${'-'.repeat(43)}\n`;
  const purchaseTotal = `TOTAL: ${centsToDollars(purchasePriceInCents)}`;
  
  // build receipt
  const receipt = 
    greeting +
    horiRule +
    tickets.join('\n') +
    horiRule +
    purchaseTotal;

  return receipt;
}

// Helper function - capitalize word
function capWord(s) {
  return s[0].toUpperCase()+s.slice(1).toLowerCase()
}

// Helper function - convert cents to dollars
function centsToDollars(cents) {
  const strCents = String(cents);
  return `$${strCents.slice(0, -2)}.${strCents.slice(-2)}`
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
