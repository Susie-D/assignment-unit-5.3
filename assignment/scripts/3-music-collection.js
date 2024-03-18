console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line

// Create an empty array named myCollection.
let myCollection = [];

// Take in a collection parameter, the album's title, artist, yearPublished as parameters.
function addToCollection(
  collection,
  title,
  artist,
  yearPublished,
  albumTracks
) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    albumTracks: albumTracks,
  };
  // Add the new object to the end of the collection array.
  collection.push(album);
  // return the newly created object.
  // return album
  return album;
}

// Use and Test the addToCollection function. Add 6 albums
addToCollection(myCollection, 'Half Life', 'Grafix', 2022, [
  { name: 'Feel Alive', duration: '4:08' },
  { name: 'Skyline', duration: '4:10' },
  { name: 'Somewhere', duration: '3:40' },
  { name: 'Half Life', duration: '3:23' },
  { name: 'Blast Out', duration: '2:59' },
  { name: 'Accelerate', duration: '4:05' },
  { name: 'Save Me', duration: '4:30' },
  { name: 'Radiance', duration: '4:13' },
  { name: 'The Chance', duration: '4:30' },
  { name: 'Synchronic', duration: '3:46' },
  { name: 'CTRL', duration: '4:09' },
  { name: 'Watch The Sky', duration: '4:08' },
  { name: 'Only Now', duration: '3:46' },
  { name: 'Way Back', duration: '4:51' },
]);

addToCollection(
  myCollection,
  'Color of Your Soul (Single)',
  'CloZee & GRiZ',
  2022,
  [{ name: 'Color of Your Soul', duration: '3:22' }]
);
addToCollection(myCollection, 'SO WHAT?', 'While She Sleeps', 2019, [
  { name: 'Anti-Social', duration: '4:12' },
  { name: "I've Seen It All", duration: '4:12' },
  { name: 'Inspire', duration: '4:10' },
  { name: 'So What?', duration: '4:32' },
  { name: 'The Guilty Party', duration: '4:26' },
  { name: 'Haunt Me', duration: '4:31' },
  { name: 'Elephant', duration: '4:38' },
  { name: 'Set You Free', duration: '4:17' },
  { name: 'Good Grief', duration: '3:38' },
  { name: 'Back of My Mind', duration: '4:27' },
  { name: 'Gates of Paradise', duration: '5:20' },
]);
addToCollection(myCollection, 'Things Change', 'Grabbitz', 2017, [
  { name: 'Follow Me', duration: '3:43' },
  { name: "Don't Let Me Go", duration: '4:18' },
  { name: 'I Think That I Might Be Going Crazy', duration: '3:13' },
  { name: 'Play This Game', duration: '2:40' },
  { name: 'Break Me Down', duration: '3:27' },
  { name: 'Pretty Little Melody', duration: '1:21' },
  { name: 'Love Like That (Let You Down)', duration: '3:14' },
  { name: 'Hold Steady (Better Days)', duration: '3:18' },
  { name: 'Things Change', duration: '4:49' },
  { name: "I Shouldn't Mind", duration: '3:33' },
  { name: 'A Tragic Interlude', duration: '0:23' },
  { name: "What I'm Going Thru", duration: '4:42' },
]);
addToCollection(myCollection, 'Paradise Lost', 'Delta Heavy', 2016, [
  { name: 'Paradise Lost', duration: '4:45' },
  { name: 'Event Horizon', duration: '4:30' },
  { name: 'City of Dreams', duration: '4:34' },
  { name: 'White Flag', duration: '3:03' },
  { name: 'Punish My Love', duration: '4:08' },
  { name: 'Limbo', duration: '1:03' },
  { name: 'Pathways', duration: '4:10' },
  { name: 'Tremors', duration: '3:08' },
  { name: 'Conquer The Galaxy', duration: '4:40' },
  { name: 'Oscillator', duration: '4:16' },
  { name: 'Ascending', duration: '2:12' },
  { name: 'Reborn', duration: '3:27' },
  { name: 'Cut Me', duration: '4:11' },
  { name: 'Ghost', duration: '4:15' },
]);
addToCollection(myCollection, 'Passenger', 'Kingdom of Giants', 2020, [
  { name: 'Two Suns ', duration: '3:52' },
  { name: 'Night Shift ', duration: '3:57' },
  { name: 'Sync ', duration: '4:11' },
  { name: 'Side Effect ', duration: '3:45' },
  { name: '00397 ', duration: '1:46' },
  { name: 'Burner ', duration: '3:29' },
  { name: 'Wayfinder ', duration: '4:28' },
  { name: 'Blue Dream (Ft. Michael Barr) ', duration: '4:19' },
  { name: 'Sleeper ', duration: '4:22' },
  { name: 'Bleach ', duration: '3:43' },
  { name: 'Lost Hills ', duration: '3:44' },
  { name: 'The Ride (Ft. Courtney LaPlante)', duration: '4:27' },
]);

console.log('Collection', myCollection);

// Create a function named showCollection.
function showCollection(collection) {
  for (let albumInCollection of collection) {
    console.log(
      `${albumInCollection.title} by ${
        albumInCollection.artist
      }, published in ${
        albumInCollection.yearPublished
      } ${albumInCollection.albumTracks.map((item) => JSON.stringify(item))}`
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
    }
  }
  // Return the array with the matching results. (If no results are found, an empty array should be returned.)
  return result;
}

// ------ STRETCH GOALS ------ //

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection
console.log('Find Grafix', findByArtist(myCollection, 'Grafix'));
console.log('Find Grabbitz', findByArtist(myCollection, 'Grabbitz'));
console.log(
  "Don't find the King of Pop",
  findByArtist(myCollection, 'Michael Jackson')
);

// Create a function called search that will allow for searching by artist and yearPublished

// Take in a collection parameter and a searchCriteria
function search(collection, searchCriteria, trackName) {
  // If there is no search object, an empty search object
  // or missing artist/yearPublished data provided as input,
  // return all albums from the collection being searched.
  // IF the search object has a trackName property, only search for that, ignoring any artist or yearPublished properties.

  // OPTIONAL TRACK
  // if (trackName) {
  //   collection.filter((trackItem) => trackItem);
  //   console.log(trackItem);
  // }

  if (
    !searchCriteria ||
    !searchCriteria.artist ||
    !searchCriteria.yearPublished
  ) {
    return collection;
  }

  // --- USING IF/ELSE --- //

  // let searchMatch = [];

  // for (item of collection) {
  //   if (
  //     searchCriteria.artist === item.artist &&
  //     searchCriteria.yearPublished === item.yearPublished
  //   ) {
  //     // Return a new array of all items in the collection matching all of the search criteria.
  //     searchMatch.push(item);
  //   }
  //   // If no results are found, return an empty array.
  // }
  // return searchMatch;

  // --- USING FILTERING --- //

  let filteredSearch = collection.filter(
    (item) =>
      item.artist === searchCriteria.artist &&
      item.yearPublished === searchCriteria.yearPublished
  );
  return filteredSearch;
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
console.log(search(myCollection, '', 2022));

// ------ EXTRA STRETCHY STRETCH GOALS ------ //

// Add an array of tracks to each of your album objects.
//  Each track should have a name and duration. ✅

// You will need to update the functions to support this new property:
// Update the addToCollection function to also take an input parameter for the array of tracks. ✅
// Update the showCollection function to display the list of tracks for each album with its name and duration. ✅

// TITLE by ARTIST, published in YEARPUBLISHED:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION

// TITLE by ARTIST, published in YEARPUBLISHED:
//     1. NAME: DURATION
//     2. NAME: DURATION

// Update search to allow an optional trackName search criteria.
// IF the search object has a trackName property, only search for that, ignoring any artist or yearPublished properties❓

// ------ SLACK DISCUSSION ------ //

const susie2024 = {
  name: 'Susie',
  car: {
    make: 'Honda',
    model: 'Fit',
    year: 2012,
  },
  activity: {
    fitness: () => workingOut(),
    eating: 'Food',
    sleeping: 'Every evening',
    coding: "Daily...when I'm able",
    reading: 'I wish I did more of this...',
    coffee: 'susie2024.activity.coding',
  },
  address: {
    city: 'Minneapolis',
  },
};

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
