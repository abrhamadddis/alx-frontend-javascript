export default function handleResponseFromAPI(promise) {
  const outPut = new Promise((resolve, reject) => {
    if (promise) {
      resolve();
    } else reject();
  });
  return outPut;
}
handleResponseFromAPI()
  .then(() => ({ status: 200, body: 'success' }))
  .catch(() => new Error())
  .finally(() => console.log('Got a response from the API'));
