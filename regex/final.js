function isUrl(string) {
  return !!string.match(/^https?:\/\/.+\.com$/);
}

function fields(string) {
  return string.split(/[ ,\t]+/);
}

function mysteryMath(string) {
  return string.replace(/[*\-+/]/, '?'); // did not escape hyphen
}

function mysteriousMath(string) {
  return string.replace(/[*\-+/]/g, '?'); // did not escape hyphen
}

function danish(string) {
  return string.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}

function formatDate(date) {
  return date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1')
}
// forgot to reverse capture groups..

function formatDate(date) {
  return date.replace(/(\d{4})[\-/](\d{2})[\-/](\d{2})/, '$3.$2.$1')
} // not quite; does not ensure consistency in delimiter
  // should use capture groups instead, like so
  
  (/\d{4})([\-/])(\d{2})\2(\d{2})/) // then 4, 3, 1