console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

let collection = []

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished) {
    collection.push({
        title, 
        artist, 
        yearPublished
    });
    return collection.slice(-1);
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log('The new album is: ', addToCollection('Take Me Back To Eden', 'Sleep Token', 2023));
console.log('The new album is: ', addToCollection('Clairvoyant', 'The Contortionist', 2017));
console.log('The new album is: ', addToCollection('Language', 'The Contortionist', 2014));
console.log('The new album is: ', addToCollection('God Loves Ugly', 'Atmosphere', 2002));
console.log('The new album is: ', addToCollection('For Emma, Forever Ago', 'Bon Iver', 2008));
console.log('The new album is: ', addToCollection('five seconds flat', 'Lizzy McAlpine', 2022));

console.log('The collection is:',collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
    console.log('The number of items in this array is:', array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
    }
    return 'End of array.'
}

// - Test the `showCollection` function.
console.log(showCollection(collection));