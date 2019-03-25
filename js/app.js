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

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

 // With the following object:
 // Change the value of limbo to null.
 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);