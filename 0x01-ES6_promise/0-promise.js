export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      resolve('sucess');
    } else reject(new Error('error happend'));
  });
  return promise;
}
