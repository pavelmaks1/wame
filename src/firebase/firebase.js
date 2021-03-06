import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     })
//     console.log(expenses);
//   });





// database.ref('expenses').push({
//   description: 'something desc',
//   note: 'Note added',
//   amount: 223,
//   createdAt: 122
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     })
//     console.log(expenses);
//   });



// database.ref('notes').push({
//   title: 'Something new here',
//   body: 'Go for a run , angel'
// });

// const firebaseNotes = {
//   notes: {
//     id1112: {
//       title: 'First note',
//       body: 'This is my note'    
//     },
//     id334: {
//       title: 'Second note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// set up data subscription

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });



// database.ref('location/city')
//   .once('value')
//   .then(((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }))
//   .catch((e) => {
//     console.log('Err:', e);
//   })


// database.ref().set({
//   name: 'Paul Maks',
//   age: 26,
//   job: {
//     title: 'Software developer',
//     company: 'Yandex'
//   },
//   isSingle: true,
//   stressLevel: 7,
//   location: {
//     city: 'Saint-Petersburg',
//     badCity: 'Bryansk'
//   }

// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed:', e);
// })

// database.ref().update({
//   stressLevel: 10,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });