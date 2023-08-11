// Opdracht 1: Destructure price en refreshRate uit onderstaand object, en log ze daarna in de terminal

const product = {
  price: 379,
  refreshRate: 50,
  screenType: 'LED',
}

// Destructuring opdracht 1
const {price, refreshRate, screenType} = product;
console.log(price, refreshRate);


// Opdracht 2: Destructure type en brand uit onderstaand object, en log ze daarna in de terminal

const productInformation = {
  general: {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
  },
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
}

// Destructuring opdracht 2
const {type, brand} = productInformation.general;
console.log(type, brand);

// Opdracht 3: destructure wifi en bluetooth uit onderstaand object, en log ze daarna in de terminal

const tvOptions = {
  options: {
    colors: [
      'black',
      'silver',
      'gold',
      'sand',
    ],
    connectivity: {
      popular: {
        wifi: true,
        bluetooth: false,
      },
      infrared: false,
    }
  },
};

// Destructuring opdracht 3
const { wifi, bluetooth } = tvOptions.options.connectivity.popular;
console.log(wifi, bluetooth);


// Opdracht 4: Destructure beide waardes uit onderstaande array, en log ze daarna in de terminal

const connectivity = ['wifi', 'bluetooth'];

// Destructuring opdracht 4
const [first, second] = connectivity;
console.log(first, second);



// Opdracht 5: Destructure de >eerste< en >derde< waarde uit onderstaande array, en log ze daarna in de terminal

const tvSizes = [41, 43, 46, 56, 65];

// Destructuring opdracht 5

const [size1, size2, size3, size4, size5] = tvSizes;
console.log(size1, size3);


// opdracht 6: Destructure name en address uit de return value van deze functie en log ze daarna in de terminal

function getCompanyDetails() {
  return {
    name: 'Novi Hogeschool',
    adress: 'Zonnebaan 9, Utrecht',
  }
}

// Destructuring opdracht 6: kijk hierbij heel goed of een object niet al eerder is gelogd in een andere destructured variable, anders crasht je code!
const { name, adress } = getCompanyDetails();
console.log(name, adress);

// Je moet hier wel goed opletten dat de name niet eerder  in opdracht 2 in de destructured variabele is gezet, anders crasht deze. Dit is denk ik wel goed om duidelijk te maken en dat een van de 'name' beter een andere naam had kunnen hebben!


// opdracht 7: Destructure beide zinnetjes uit de return value van de getDetails functie en log ze in de terminal.
// Let op: de functie verwacht argumenten bij het aanroepen!

function getDetails(name, age) {
  return [`Your name is ${name}`, `You are ${age} years old`];
}

// Destructuring opdracht 7: denk meegeven  parameters bij getDetails ('Ruud' en 42)!
const [nameDetails, ageDetails] = getDetails('Ruud', 42);
console.log(nameDetails);
console.log(ageDetails);