export default function getResponseFromAPI() {
    const test = new Promise((resolve, reject) => {
        const error = true;
        if (error) {
            resolve(false)
        } else {
            reject(true)
        }
    })
    return test;
}