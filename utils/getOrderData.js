export default function getOrderData(objectCardId, array) {
  if (array) {
    return array.find(element => {
      return element.id === objectCardId;
    });
  } else {
    return null;
  }
}
