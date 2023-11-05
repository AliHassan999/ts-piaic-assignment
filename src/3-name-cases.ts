let personName: string = "ali hassan";
let uppercaseTxt: string = personName.toUpperCase();
let lowercaseTxt: string = personName.toLowerCase();
function toTitleCase(str:string) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
let titlecaseTxt:string = toTitleCase(personName);
console.log(`Original Name: ${personName}`);
console.log(`Uppercase Name: ${uppercaseTxt}`);
console.log(`Lowercase Name: ${lowercaseTxt}`);
console.log(`Titlecase Name: ${titlecaseTxt}`);



