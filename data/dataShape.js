// dinosaurs.js
dinosaurs: dinosaurs - array of objects
  dinosaur: dinosaur[i] - object representing a dinosaur
    dinosaurId: dinosaur[i].dinosaurId - "YLtkN9R37" - {string}
    name: dinosaur[i].name - "Allosaurus" - {string}
    pronunciation: dinosaur[i].pronunciation - "AL-oh-sore-us" - {string}
    meaningOfName: dinosaur[i].meaningOfName - "other lizard" - {string}
    diet: dinosaur[i].diet - "carnivorous" - {string}
    lengthInMeters: dinosaur[i].lengthInMeters - 12 - {number}
    period: dinosaur[i].period - "Late Jurassic" - {string}
    mya: dinosaur[i].mya - [156, 144] - array of numbers
      dinosaur[i].mya[j] - million years ago - {number}
    info: dinosaur[i].info - "Allosaurus was an apex predator in the Late Jurassic in North America." - {string}

// rooms.js
rooms: rooms - array of objects
  room: rooms[i] - object representing a room
    roomId: rooms[i].roomId - "zwfsfPU5u" - {string}
    name: rooms[i].name - "Entrance Room" - {string}
    requiredTicketPermissions: rooms[i].requiredTicketPermissions - [] -  array of strings {string[]}
    dinosaurs: rooms[i].dinosaurs - ["qk1bNQA9_n"]- array of strings dinosaurId
    connectsTo: rooms[i].connectsTo - ["A6QaYdyKra"] - array of strings roomId