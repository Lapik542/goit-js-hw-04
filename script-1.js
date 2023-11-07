const cars = [
   {
   modal: 'Audio',
   price: 10000,
   speed: '240km/gh',
   currency: 'USD',
   
   engine: {
      modal: 'V2',
      price: 2000,
   },
   },
   {
   modal: 'BMV',
   price: 18000,
   speed: '340km/gh',
   currency: 'USD',
   
   engine: {
      modal: 'V6',
      price: 6000,
   },
   },
   {
   modal: 'Tesla',
   price: 20000,
   speed: '400km/gh',
   currency: 'USD',
   
   engine: {
      modal: 'V12',
      price: 14000,
   },
   },
];
cars[1].currency = 'UAH';
cars[0].price = 12000;
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2].modal
   + ' ' +
   cars[2].engine.modal
   + ', ' +
   cars[2].speed
   + ', ' +
   cars[2].price
   + ' ' +
   cars[2].currency
);



