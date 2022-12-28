export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else reject(new Error({}));
    });
  }
  getFullResponseFromAPI()
    .then(console.log('Got a response from the API'))
    .catch((e) => {
      console.log(e); // works!
    });
