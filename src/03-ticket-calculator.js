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
	const validation = isTicketValid(ticketData, ticketInfo);
	if (!validation.isValid) return validation.error;

	const membershipCost = calcMembershipCost(ticketData, ticketInfo);
	const extrasCost = calcExtrasCost(ticketData, ticketInfo);

	return membershipCost + extrasCost;
}

function calcMembershipCost(ticketData, ticket) {
	return ticketData[ticket.ticketType].priceInCents[ticket.entrantType];
}
function calcExtrasCost(ticketData, ticket) {
	return ticket.extras.reduce((acc, curr) => {
		acc += ticketData.extras[curr].priceInCents[ticket.entrantType];
		return acc;
	}, 0);
}

function isTicketValid(ticketData, ticket) {
	if (!ticketData[ticket.ticketType]) {
		return {
			isValid: false,
			error: `Ticket type '${ticket.ticketType}' cannot be found.`,
		};
	}

	if (!ticketData[ticket.ticketType].priceInCents[ticket.entrantType]) {
		return {
			isValid: false,
			error: `Entrant type '${ticket.entrantType}' cannot be found.`,
		};
	}

	let incorrectExtra = ticket.extras.find((ele) => {
		if (!ticketData.extras[ele]) {
			return ele;
		}
	});
	if (incorrectExtra) {
		return {
			isValid: false,
			error: `Extra type '${incorrectExtra}' cannot be found.`,
		};
	}
	return { isValid: true, error: null };
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
	for (ticket of purchases) {
		const validation = isTicketValid(ticketData, ticket);

		if (!validation.isValid) {
			return validation.error;
		}
	}

	let purchaseDetails = "";
	let total = 0;

	purchases.forEach((ticket) => {
		const purchaseDetail = createPurchaseDetail(ticketData, ticket);
		purchaseDetails += purchaseDetail.purchaseDetail;
		total += purchaseDetail.subTotal;
	});

	const receipt = createReciept(purchaseDetails, total);

	return receipt;
}

function createPurchaseDetail(ticketData, ticket) {
	const membershipCost = calcMembershipCost(ticketData, ticket);
	const extrasCost = calcExtrasCost(ticketData, ticket);
	const subTotal = extrasCost + membershipCost;
	const entrantType = capitalizeWord(ticket.entrantType);
	const ticketType = capitalizeWord(ticket.ticketType);
	const extrasDescription = getExtrasDescription(ticketData, ticket);
	const subTotalFormatted = formatCentsToDollarsCurrency(subTotal);

	const purchaseDetail = extrasDescription
		? `${entrantType} ${ticketType} Admission: ${subTotalFormatted} ${extrasDescription}`
		: `${entrantType} ${ticketType} Admission: ${subTotalFormatted}`;

	return { purchaseDetail: "\n" + purchaseDetail, subTotal };
}

function getExtrasDescription(ticketData, ticket) {
	if (ticket.extras.length > 0) {
		const extrasList = ticket.extras.map(
			(item) => ticketData.extras[item].description
		);
		return `(${extrasList.join(", ")})`;
	}
}

function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1);
}

function formatCentsToDollarsCurrency(cents) {
	return `$${(cents / 100).toFixed(2)}`;
}

function createReciept(purchaseDetails, total) {
	const totalFormatted = formatCentsToDollarsCurrency(total);
	const receipt = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------${purchaseDetails}\n-------------------------------------------\nTOTAL: ${totalFormatted}`;

	return receipt;
}

// Do not change anything below this line.
module.exports = {
	calculateTicketPrice,
	purchaseTickets,
};
