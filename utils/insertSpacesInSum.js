export default function insertSpacesInSum(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}
