// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//  for (let i = 0; i < gifts.length; i++) {
//    console.log(`Wrapped ${gifts[i]} and added a bow!`);

//  }

//  return gifts;
//}

//wrapGifts(gifts);

//let array = ["Guadalupe", "Ollie", "Aki"];
//let newArray = [];
//function writeCards(array, parameter2) {
  //for (let index = 0; index < array.length; index++) {
      //newArray = [...array, "surprise"];
      //console.log(`Thank you, ${array[index]}, for the wonderful ${newArray[newArray.length-1]} gift!`);
 // }
 // return array;
//}
//writeCards(array);
//`Thank you, ${name} for the wonderful ${event} gift!`

//let array = [];
//function writeCards() {
 // for (let index = 0; index < array.length; index++) {
 //     let array = [];
 //     array[0].push(`Thank you, Guadalupe for the wonderful birthday gift!`)
 // }
//  return array;
//}
//console.log(array);

function writeCards(names) {
  const thankYouMessages = []; // Create an empty array to hold the messages
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const message = `Thank you, ${name}, for the wonderful surprise gift!`; // Build out the 'thank you' message using string interpolation
    thankYouMessages.push(message); // Add the message to the new array
  }
  
  return thankYouMessages; // Return the new array
}
const names = ['Guadalupe', 'Ollie', 'Aki'];
const thankYouMessages = writeCards(names);
console.log(thankYouMessages); 

function countDown(){
  let x = 10;
  while (Number.isInteger(x) && x >= 0){
    console.log(x--);
  } 
}
countDown(x);