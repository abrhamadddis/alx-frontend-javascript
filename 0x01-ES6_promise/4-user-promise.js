export default function signUpUser(firstName, lastName) {
  const out = new Promise((resolve) => {
    if (firstName != null && lastName != null) {
      resolve({
        firstName: `${firstName}`, lastName: `${lastName}`,
      });
    }
  });
  return out;
}
