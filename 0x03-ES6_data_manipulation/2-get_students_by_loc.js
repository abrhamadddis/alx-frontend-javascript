export default function getStudentsByLocatio(arr, city) {
  return arr.filter((item) => item.location === city);
}
