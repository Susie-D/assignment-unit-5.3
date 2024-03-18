console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line

// Create an empty array named myCollection.
let myCollection = [];

// Take in a collection parameter, the album's title, artist, yearPublished as parameters.
function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  // Add the new object to the end of the collection array.
  collection.push(album);
  // return the newly created object.
  // return album
  console.log(album);
  return album;
}

// Use and Test the addToCollection function. Add 6 albums
addToCollection(myCollection, 'Half Life', 'Grafix', 2022);
addToCollection(
  myCollection,
  'Color of Your Soul (Single)',
  'CloZee & GRiZ',
  2022
);
addToCollection(myCollection, 'SO WHAT', 'While She Sleeps', 2019);
addToCollection(myCollection, 'Things Change', 'Grabbitz', 2017);
addToCollection(myCollection, 'Paradise Lost', 'Delta Heavy', 2016);
addToCollection(myCollection, 'Passenger', 'Kingdom of Giants', 2020);

// Create a function named showCollection.
function showCollection(collection) {
  for (let albumInCollection of collection) {
    console.log(
      `${albumInCollection.title} by ${albumInCollection.artist}, published in ${albumInCollection.yearPublished}.`
    );
  }
}

// Test the showCollection function.
showCollection(myCollection);

// Add a function named findByArtist
function findByArtist(collection, artist) {
  // Create an empty array to hold any matching results, if any.
  let result = [];
  // Loop through the collection and add any album objects with a matching artist to the array.
  for (albumInCollection of collection) {
    if (artist === albumInCollection.artist) {
      result.push(albumInCollection);
      // console.log('artist', albumInCollection);
    }
  }
  // Return the array with the matching results. (If no results are found, an empty array should be returned.)
  return result;
}

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection
console.log('Find Grafix', findByArtist(myCollection, 'Grafix'));
console.log('Find Grabbitz', findByArtist(myCollection, 'Grabbitz'));
console.log(
  "Don't find the King of Pop",
  findByArtist(myCollection, 'Michael Jackson')
);

// Create a function called search that will allow for searching by artist and yearPublished

// Take in a collection parameter and a searchCriteria
function search(collection, searchCriteria) {
  // If there is no search object, an empty search object
  // or missing artist/yearPublished data provided as input,
  // return all albums from the collection being searched.

  if (
    !searchCriteria ||
    !searchCriteria.artist ||
    !searchCriteria.yearPublished
  ) {
    return collection;
  }

  let searchMatch = [];

  for (item of collection) {
    if (
      searchCriteria.artist === item.artist &&
      searchCriteria.yearPublished === item.yearPublished
    ) {
      // Return a new array of all items in the collection matching all of the search criteria.
      searchMatch.push(item);
      console.log('Found:', searchMatch);
    }
    // If no results are found, return an empty array.
  }
  return searchMatch;
}

console.log(
  "Don't find ",
  search(myCollection, {
    artist: 'Ray Charles',
    yearPublished: 1957,
  })
);

search(myCollection);
console.log('Find this', search(myCollection, 'Kingdom of Giants'));
search(myCollection, 'Grabbitz');
search(myCollection, 'Grafix');

// Add an array of tracks to each of your album objects.

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
