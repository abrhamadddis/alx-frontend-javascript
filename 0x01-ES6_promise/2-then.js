export default function handleResponseFromAPI(promise) {
  const outPut = new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else reject(new Error());
  });
  return outPut;
}
handleResponseFromAPI()
  .then(console.log('Got a response from the API'))
  .catch((e) => {
    console.log(e); // works!
  });
