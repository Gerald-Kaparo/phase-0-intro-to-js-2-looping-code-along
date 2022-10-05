// Code your solutions in this file

const wrIteCards = ["Guadalupe", "Ollie", "Aki"];

// Thank you, ${wrapwriteCards}, for the wonderful surprise gift!

function writeCards(wrIteCards) {
    let repLy = []
  for (let kads = 0; kads < wrIteCards.length; kads++) {
    repLy.push(`Thank you, ${wrIteCards[kads]}, for the wonderful surprise gift!`)
    debugger;
  }

  return repLy;
}
writeCards(wrIteCards); 

// An arrow function that logs out descenting numbers

const countDown = () => {
    let form1 = 10 
    while (form1 > -1 ){
        console.log(form1--);
    }
}
