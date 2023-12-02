export default function sumOrders(array) {
  return array.reduce((prev, current) => {
    return prev + current.counter;
  }, 0);
}
