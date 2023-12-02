export default function getSum(array) {
  return array.reduce((prev, current) => {
    return prev + current.price * current.counter;
  }, 0);
}
