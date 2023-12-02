export default function getOrderData(objectCardId, array) {
  return array.find(element => {
    return element.id === objectCardId;
  });
}
