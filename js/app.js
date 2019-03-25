// 1. Data Types

// For each of the following, write which data types you would use to 
// represent the data, and then give a small example of the data structure:

//A light switch that can be either on or off.
// Boolean.  Light switch on would either be TRUE or FALSE
// lightSwitchOn === true;

// A user's email address.
// This would be a sting probably stored in a user object.
// const user = {
//     email: 'test@test.com'
// }

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// This would be an array
// const spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']

// A list of student names from our class
// This would be an array.
// const studentNames = ['name1', 'name2', 'name3'];

// A list of student names from our class, each with a location.
// This would be objects inside an object
// const studentNames = {
//     student1 = {
//         location: 'LA'
//     }
//     student2 = {
//         location: 'SF'
//     }
// }

// A list of student names from our class, each with a location and 
// each with a list of favorite tv shows.
// Same as above but with added keys.  The TV shows would be an array.
// const studentNames = {
//     student1 = {
//         location: 'LA',
//         tvshows: []
//     }
//     student2 = {
//         location: 'SF'
//         tvshows: []
//     }
// }



// 2. Take it Easy


// 1. Make an array that holds all of the colors of the rainbow.
// const rainbow = ['red', 'orange', 'yellow', 'blue', 'indigo', 'violet'];

// 2. Write code that will access "blue" from the rainbow array.
// rainbow[3];
// console.log(rainbow[3]);

// 3. Make an object that is called your name and holds the information about 
// your favorite food, a hobby, the name of the town that you live in currently, 
// and your favorite datatype.
// const Chase = {
//     favoritefood: 'Pineapple Pizza',
//     hobby: 'Photography',
//     town: 'Woodland Hills'
//     favoritedatatype: 'objects'
// }

// 4. Write code that will access your hobby from the object that you just created.
// Chase['hobby'];
// Chase.hobby;



// 3. Crazy Object!


// const crazyObject = {
//     taco: [
//       {
//         meat: 'steak',
//         cheese: ['panela', 'queso', 'chihuahua']
//       },
//       {
//         meat: 'chicken',
//         salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//       },
//     ],
//     larry: {
//       nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//       quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//       characters: [
//         {
//           name: "Jeff",
//           occupation: "manager"
//         },
//         {
//           name: "funkhauser",
//           occupation: "tv dude"
//         },
//         {
//           name: "susie",
//           occupation: "jeffs wife",
//           favourtieHobby: "Swearing at Larry and Jeff"
//         },
//       ]
//     }
//   }

// Use crazyObject to log the following.

// "omg my mouth is burning"
// console.log(crazyObject.taco[1].salsa[5]);
// "Pretty pretty prettayyyyy good"
// console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Chicken Teriyaki Boyyyyyy"
// console.log(crazyObject.larry.nicknames[1]);
// The object that contains the name funkhauser
// console.log(crazyObject.larry.characters[1]);



// 4. Object-ception

// const inception = {
//     reality: {
//         dreamLayer1: {
//             dreamLayer2: {
//                 dreamLayer3: {
//                     dreamLayer4: {
//                         dreamLayer5: {
//                             dreamLayer6: {
//                                 limbo: "Joseph Gordon Levitt"
//                            }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//  }

 // With the following object:
 // Change the value of limbo to null.
//  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
//  console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);



// 5-7. Bond Films 


const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

// Use loops and conditionals and functions in order to complete the below:
// 5. Create a new array called bondTitles with only the titles of the Bond films, 
// and console.log the new array.
let newArr = [];
for (let i = 0; i < bondFilms.length; i++) {
    newArr.push(bondFilms[i].title)
}
console.log(newArr);



