// dinosaurs.js
dinosaurs: dinosaurs - array of objects - {object[]}
  dinosaur: dinosaur[i] - object representing a dinosaur - {}
    dinosaurId: dinosaur[i].dinosaurId - "YLtkN9R37" - {string}
    name: dinosaur[i].name - "Allosaurus" - {string}
    pronunciation: dinosaur[i].pronunciation - "AL-oh-sore-us" - {string}
    meaningOfName: dinosaur[i].meaningOfName - "other lizard" - {string}
    diet: dinosaur[i].diet - "carnivorous" - {string}
    lengthInMeters: dinosaur[i].lengthInMeters - 12 - {number}
    period: dinosaur[i].period - "Late Jurassic" - {string}
    mya: dinosaur[i].mya - [156, 144] - array of numbers - {number[]}
      mya value: dinosaur[i].mya[j] - million years ago - 156 - {number}
    info: dinosaur[i].info - "Allosaurus was an apex predator in the Late Jurassic in North America." - {string}

// rooms.js
rooms: rooms - array of objects - {object[]}
  room: rooms[i] - object representing a room - {}
    roomId: rooms[i].roomId - "zwfsfPU5u" - {string}
    name: rooms[i].name - "Entrance Room" - {string}
    requiredTicketPermissions: rooms[i].requiredTicketPermissions - [] -  array of strings {string[]}
    dinosaurs: rooms[i].dinosaurs - ["qk1bNQA9_n"]- array of strings dinosaurId
      dinosaurs in room: rooms[i].dinosaurs[j] - "qk1bNQA9_n" - {string}
    connectsTo: rooms[i].connectsTo - ["A6QaYdyKra"] - array of strings roomId
      connecting rooms: rooms[i].connectsTo[j] - "A6QaYdyKra" - {string}

// tickets.js
tickets: tickets - object of objects representing ticket types - {<object{}>}
  general: tickets.general - object representing a ticket type - {}
    description: tickets.general.description - "General Admission" - {string}
    priceInCents: tickets.general.priceInCents - {} - object holding ticket prices for visitors
      child: tickets.general.priceInCents.child - 2000 - {number}
      adult: tickets.general.priceInCents.adult - 3000 - {number}
      senior: tickets.general.priceInCents.senior - 2500 - {number}

  membership: tickets.membership - object representing a ticket type - {}
    description: tickets.membership.description - "General Admission" - {string}
    priceInCents: tickets.membership.priceInCents - {} - object holding ticket prices for visitors
      child: tickets.membership.priceInCents.child - 2000 - {number}
      adult: tickets.membership.priceInCents.adult - 3000 - {number}
      senior: tickets.membership.priceInCents.senior - 2500 - {number}

  extras: tickets.extras - object representing a ticket type - {}
    description: tickets.extras.description - "General Admission" - {string}
    priceInCents: tickets.extras.priceInCents - {} - object holding ticket prices for visitors
      child: tickets.extras.priceInCents.child - 2000 - {number}
      adult: tickets.extras.priceInCents.adult - 3000 - {number}
      senior: tickets.extras.priceInCents.senior - 2500 - {number}

  education: tickets.education - object representing a ticket type - {}
    description: tickets.education.description - "General Admission" - {string}
    priceInCents: tickets.education.priceInCents - {} - object holding ticket prices for visitors
      child: tickets.education.priceInCents.child - 2000 - {number}
      adult: tickets.education.priceInCents.adult - 3000 - {number}
      senior: tickets.education.priceInCents.senior - 2500 - {number}

  terrace: tickets.terrace - object representing a ticket type - {}
    description: tickets.terrace.description - "General Admission" - {string}
    priceInCents: tickets.terrace.priceInCents - {} - object holding ticket prices for visitors
      child: tickets.terrace.priceInCents.child - 2000 - {number}
      adult: tickets.terrace.priceInCents.adult - 3000 - {number}
      senior: tickets.terrace.priceInCents.senior - 2500 - {number}