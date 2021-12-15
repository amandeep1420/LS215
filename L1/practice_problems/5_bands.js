/*
> fix country for each band
> fix band names
> remove dots ----> use replace with regex and g flag

*/

function processBands(data) { // I did not want to mutate the original data in any way
  return data.map(hash => {
    let fixedHash = {};  // removed storage in external array
    fixedHash.name    = fixName(hash.name); // could also remove this local variable entirely
    fixedHash.country = 'Canada'; // and just write out an object literal to be returned
    fixedHash.active  = hash.active; // doesn't really save any lines, though
    return fixedHash;
  });
}

function fixName(name) { // the string slice method would've been extremely helpful here
  let wordArr = name.replace(/[.]/g, '').split(' ');
  return wordArr.map(word => {
    let letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    return letters.join('');
  }).join(' ');
}


let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));


// their non-mutating solution
// notice how they're starting to focus on compartmentalizing generic functionality in functions
// I should start focusing on doing this again, too

function processBands(bands) {
  return bands.map(band => {
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) {
  return phrase.split(' ')
               .map(word => capitalizeString(word))
               .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(/\./g, '');
}



