function extractGivenName(fullname) {

  let comma = fullname.indexOf(', ');
  let gn = fullname.substring(comma+1);
  return gn;
}
const fullName = "simon, yemane" ;
console.log(extractGivenName(fullName));