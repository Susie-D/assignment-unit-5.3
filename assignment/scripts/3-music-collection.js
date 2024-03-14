console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line

// Create an empty array named myCollection.
let myCollection = [];

// Create a function named addToCollection. 

// Use and Test the addToCollection function

// Create a function named showCollection.

// Test the showCollection function.

// Add a function named findByArtist

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection

// Create a function called search that will allow for searching by artist and yearPublished

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
