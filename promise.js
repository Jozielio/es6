const firstPromise = (parm) => {
  return new Promise(
    (resolve, reject) => {
      if (parm) {
        resolve('1');
      } else {
        reject('Err promise 1!');
      }
    }
  );
};

const secondPromise = (message) => {
  return new Promise(
    (resolve, reject) => {
      if (message) {
        resolve(`${message} 2`);
      } else {
        reject('Err promise 2!');
      }
    }
  );
};

const thirdPromise = (message) => {
  return new Promise(
    (resolve, reject) => {
      if (message) {
        resolve(`${message} 3`);
      } else {
        reject('Err promise 3!');
      }
    }
  );
};

firstPromise(true).then(function (result) {
  return secondPromise(result);
}).then(function (result) {
  return thirdPromise(result);
}).then(function (result) {
  console.log(result);
}).catch(function (err) {
  console.log(err);
});