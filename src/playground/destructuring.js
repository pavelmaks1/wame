const book = {
  title: 'Archetypes and the structure of the psycho',
  author: 'Karl Goustav Joung',
  publisher: {
    name: 'Prospect'
  }
};

const { name: publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia' ,'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

const item = ['Coffee (hot)', '$2.00', '$2.50' ,'$2.75'];

const [name, , cost] = item;
console.log(`${name} costs ${cost}`);


console.log(`You are in ${address[1]} ${address[2]}`);