# shows the path and data type of the data involved in the project

## dinosaurs.js
|Element / Key      | Value Path                    | Type       | Description / Value  | 
|-------------------|-------------------------------|------------|----------------------|
| dinosaurs         | dinosaurs                     | {object[]} | array of objects     |
| - dinosaur        | dinosaur[ i ]                 | {}         | object representing a dinosaur |
| - dinosaurId      | dinosaur[ i ].dinosaurId      | {string}   | "YLtkN9R37"     |
| - name            | dinosaur[ i ].name            | {string}   | "Allosaurus"    |
| - pronunciation   | dinosaur[ i ].pronunciation   | {string}   | "AL-oh-sore-us" |
| - meaningOfName   | dinosaur[ i ].meaningOfName   | {string}   | "other lizard"  |
| - diet            | dinosaur[ i ].diet            | {string}   | "carnivorous"   |
| - lengthInMeters  | dinosaur[ i ].lengthInMeters  | {number}   | 12              |
| - period          | dinosaur[ i ].period          | {string}   | "Late Jurassic" |
| - mya             | dinosaur[ i ].mya             | {number[]} | [156, 144]      |
| - - mya value     | dinosaur[ i ].mya[j]          | {string}   | 156             |
| - info            | dinosaur[ i ].info            | {string}   | "Allosaurus was an apex predator in the Late Jurassic in North America." | {string} |

## rooms.js
| Element / Key                   | Path                                 | Type       | Value / Description         | Reference |
|---------------------------------|--------------------------------------|------------|-----------------------------|-----------|
| rooms                           | rooms                                | {object[]} | array of objects            |
| - room                          | rooms[ i ]                           | {}         | object representing a room  |
| - - roomId                      | rooms[ i ].roomId                    | {string}   | "zwfsfPU5u"                 |
| - - name                        | rooms[ i ].name                      | {string}   | "Entrance Room"             |
| - - requiredTicketPermissions   | rooms[ i ].requiredTicketPermissions | {string[]} | ["education"]               | ticket type
| - - dinosaurs                   | rooms[ i ].dinosaurs                 | {string[]} | ["qk1bNQA9_n"]              | dinosaurId
| - - - dinosaur in room element  | rooms[ i ].dinosaurs[ j ]            | {string}   | "qk1bNQA9_n"                |
| - - connectsTo                  | rooms[ i ].connectsTo                | {string[]} | ["A6QaYdyKra"]              | roomId
| - - - connecting room value     | rooms[ i ].connectsTo[ j ]           | {string}   | "A6QaYdyKra"                |

## tickets.js
### tickets.general
| Element / Key    | Path                                | Type         | Value / Description                         | Reference |
|------------------|-------------------------------------|--------------|---------------------------------------------|-----------|
| tickets          | tickets                             | {<object{}>} | object of objects representing ticket types | 
| - general        | tickets.general                     | {}           | object representing a ticket type           |
| - - description  | tickets.general.description         | {string}     | "General Admission"                         |
| - - priceInCents | tickets.general.priceInCents        | {}           | object holding ticket prices                |
| - - - child      | tickets.general.priceInCents.child  | {number}     | 2000 |
| - - - adult      | tickets.general.priceInCents.adult  | {number}     | 3000 |
| - - - senior     | tickets.general.priceInCents.senior | {number}     | 2500 |

### tickets.membership
| Element / Key    | Path                                   | Type         | Value / Description                         | Reference |
|------------------|----------------------------------------|--------------|---------------------------------------------|-----------|
| tickets          | tickets                                | {<object{}>} | object of objects representing ticket types | 
| - membership     | tickets.membership                     | {}           | object representing a ticket type           |
| - - description  | tickets.membership.description         | {string}     | "Membership Admission"                      |
| - - priceInCents | tickets.membership.priceInCents        | {}           | object holding ticket prices                |
| - - - child      | tickets.membership.priceInCents.child  | {number}     | 1500 |
| - - - adult      | tickets.membership.priceInCents.adult  | {number}     | 2800 |
| - - - senior     | tickets.membership.priceInCents.senior | {number}     | 2300 |

### tickets.extras.movie
| Element / Key      | Path                                     | Type         | Value / Description                            | Reference |
|--------------------|------------------------------------------|--------------|------------------------------------------------|-----------|
| tickets            | tickets                                  | {<object{}>} | object of objects representing ticket types    |
| - extras           | tickets.extras                           | {}           | object of objects representing ticket access   |
| - - movie          | tickets.extras.movie                     | {}           | object representing a type of access           |
| - - - description  | tickets.extras.movie.description         | {string}     | "Movie Access"                                 |
| - - - priceInCents | tickets.extras.movie.priceInCents        | {}           | object holding ticket prices                   |  
| - - - - child      | tickets.extras.movie.priceInCents.child  | {number}     | 1000 |
| - - - - adult      | tickets.extras.movie.priceInCents.adult  | {number}     | 1000 |
| - - - - senior     | tickets.extras.movie.priceInCents.senior | {number}     | 1000 |

### tickets.extras.education
| Element / Key      | Path                                         | Type         | Value / Description                          | Reference |
|--------------------|----------------------------------------------|--------------|----------------------------------------------|-----------|
| tickets            | tickets                                      | {<object{}>} | object of objects representing ticket types  |
| - extras           | tickets.extras                               | {}           | object of objects representing ticket access |
| - - education      | tickets.extras.education                     | {}           | object representing a type of access         |
| - - - description  | tickets.extras.education.description         | {string}     | "Education Access"                           |
| - - - priceInCents | tickets.extras.education.priceInCents        | {}           | object holding ticket prices                 |  
| - - - - child      | tickets.extras.education.priceInCents.child  | {number}     | 1000 |
| - - - - adult      | tickets.extras.education.priceInCents.adult  | {number}     | 1200 |
| - - - - senior     | tickets.extras.education.priceInCents.senior | {number}     | 1200 |

### tickets.extras.terrace
| Element / Key      | Path                                       | Type         | Value / Description                          | Reference |
|--------------------|--------------------------------------------|--------------|----------------------------------------------|-----------|
| tickets            | tickets                                    | {<object{}>} | object of objects representing ticket types  |
| - extras           | tickets.extras                             | {}           | object of objects representing ticket access |
| - - terrace        | tickets.extras.terrace                     | {}           | object representing a type of access         |
| - - - description  | tickets.extras.terrace.description         | {string}     | "Terrace Access"                             |
| - - - priceInCents | tickets.extras.terrace.priceInCents        | {}           | object holding ticket prices                 |  
| - - - - child      | tickets.extras.terrace.priceInCents.child  | {number}     | 500 |
| - - - - adult      | tickets.extras.terrace.priceInCents.adult  | {number}     | 1000 |
| - - - - senior     | tickets.extras.terrace.priceInCents.senior | {number}     | 1000 |