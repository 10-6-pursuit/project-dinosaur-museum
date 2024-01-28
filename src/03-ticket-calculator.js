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
      let ticketPrice=0;
      let wasTicketFound=false;
      let thereIsEntrantType=false;

      if (Object.hasOwn(ticketData, ticketInfo.ticketType)) {
        wasTicketFound = true;
        if(Object.hasOwn(ticketData[ticketInfo.ticketType].priceInCents,ticketInfo.entrantType)){
          

          ticketPrice+=ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType]
           thereIsEntrantType=true;
        }
      }
      // ticketData[ticketInfo.ticketType]

      // ORIGINAL WORKING CODE
      // for(let ticketType in ticketData){
      //   // console.log(ticketType)
      //   if(ticketType===ticketInfo.ticketType){
      //     wasTicketFound = true;
      //     if(Object.hasOwn(ticketData[ticketInfo.ticketType].priceInCents,ticketInfo.entrantType)){
            

      //       ticketPrice+=ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType]
      //        thereIsEntrantType=true;
      //     }
      //   }
      // }
      
       
        if(ticketInfo.extras.length!==0){
          
          for(let extra of ticketInfo.extras){
            let extraIsNotEmpty=false;
          if(Object.hasOwn(ticketData.extras,extra)){
            extraIsNotEmpty=true;
            ticketPrice+=ticketData.extras[extra].priceInCents[ticketInfo.entrantType]
           
          }else{return "Extra type 'incorrect-extra' cannot be found."}
        
          // if (!extraIsNotEmpty) return "Extra type 'incorrect-extra' cannot be found.";
         }}
        

       
        if(!wasTicketFound){
          return "Ticket type 'incorrect-type' cannot be found."
       }
      
       else if(!thereIsEntrantType){
        return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
       }
       
       else return ticketPrice
       
       
        
     
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
    ;
function purchaseTickets(ticketData, purchases) {
  function  capitalize(string){

     let str=string[0].toUpperCase()+string.slice(1)

    return str

    }


let str1=``;
  let sum=0;
  for(let purchase of purchases){
    
    let price=calculateTicketPrice(ticketData,purchase) ;
    typeof price===`number`?sum+=price:sum=price;

    

  let stringExtras=``  
    for(let extra of purchase.extras){
      stringExtras+=capitalize(extra)+` Access, `
      }
      str1+=`\n${capitalize(purchase.entrantType)} ${capitalize(purchase.ticketType)} Admission: $${price/100}.00`;
    if (purchase.extras.length!==0){str1+= ` (${stringExtras.slice(0,-2)})`}
    
    }
     if(typeof sum===`string`){return sum}
     else return "Thank you for visiting the Dinosaur Museum!\n------------------------------------------"+str1+`\n-------------------------------------------\nTOTAL: $${sum/100}.00`
    
   

   
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
