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
const rainbow = ['red', 'orange', 'yellow', 'blue', 'indigo', 'violet'];

// 2. Write code that will access "blue" from the rainbow array.
rainbow[3];
console.log(rainbow[3]);

// 3. Make an object that is called your name and holds the information about 
// your favorite food, a hobby, the name of the town that you live in currently, 
// and your favorite datatype.
const Chase = {
    favoritefood: 'Pineapple Pizza',
    hobby: 'Photography',
    town: 'Woodland Hills'
    favoritedatatype: 'objects'
}

// 4. Write code that will access your hobby from the object that you just created.
Chase['hobby'];
Chase.hobby;