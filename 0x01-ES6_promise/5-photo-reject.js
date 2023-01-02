export default function uploadPhoto(filename) {
  const out = new Promise((reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  return out;
}
