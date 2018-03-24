const promise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    
    reject('Wrong!');
  }, 1500);
});

promise.then((data) => {
  console.log('1',data);
}, (error) => {
  console.log('error: ', error);
});
