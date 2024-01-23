// shows the path and data type of the data involved in the project

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
      child: tickets.membership.priceInCents.child - 1500 - {number}
      adult: tickets.membership.priceInCents.adult - 2800 - {number}
      senior: tickets.membership.priceInCents.senior - 2300 - {number}

  extras: tickets.extras - object of objects representing ticket upsales - {}
    movie: tickets.extras.movie
      description: tickets.extras.movie.description - "General Admission" - {string}
      priceInCents: tickets.extras.movie.priceInCents - {} - object holding ticket prices for visitors
        child: tickets.extras.movie.priceInCents.child - 1000 - {number}
        adult: tickets.extras.movie.priceInCents.adult - 1000 - {number}
        senior: tickets.extras.movie.priceInCents.senior - 1000 - {number}

    education: tickets.extras.education - object representing a ticket type - {}
      description: tickets.extras.education.description - "General Admission" - {string}
      priceInCents: tickets.extras.education.priceInCents - {} - object holding ticket prices for visitors
        child: tickets.extras.education.priceInCents.child - 1000 - {number}
        adult: tickets.extras.education.priceInCents.adult - 1200 - {number}
        senior: tickets.extras.education.priceInCents.senior - 1200 - {number}

    terrace: tickets.extras.terrace - object representing a ticket type - {}
      description: tickets.extras.terrace.description - "General Admission" - {string}
      priceInCents: tickets.extras.terrace.priceInCents - {} - object holding ticket prices for visitors
        child: tickets.extras.terrace.priceInCents.child - 500 - {number}
        adult: tickets.extras.terrace.priceInCents.adult - 1000 - {number}
        senior: tickets.extras.terrace.priceInCents.senior - 1000 - {number}