/* var puppy = "cute";
console.log(puppy);
{
  var puppy = "so cute"; // var는 function scope
  console.log("5번째 줄===", puppy);
}
console.log(puppy);
*/

let puppy = "cute";
console.log(puppy);
{
  let puppy = "so cute"; // let은 block scope
  console.log("5번째 줄===", puppy);
}
console.log(puppy);
