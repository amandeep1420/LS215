function acronym(string) {
  string = string.replace(/-/g, ' ');
  return string.split(' ').map(word => word[0].toUpperCase()).join('');
}

// maybe start writing like so

function acronym2(string) {
  return string.replace(/-/g, ' ')
               .split(' ')
               .map(word => word[0].toUpperCase())
               .join('');
}


// book says this is noticeably less readable
// thus, focus more on using readable variable names and chunking it out
// like so


function acronym(string) {
  let stringArray = string.replace(/-/g, ' ').split(' ');
  let initials = stringArray.map(word => word[0].toUpperCase());
  return initials.join('');
}

/[A-Za-z0-9]+@[A-Za-z]\./ // need to read book