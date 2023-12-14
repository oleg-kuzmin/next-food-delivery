export default function getSessionOrderData(objectCardId) {
  const basketArray = JSON.parse(sessionStorage.getItem('basket'));

  if (!basketArray) {
    return;
  }

  return basketArray.find(element => {
    return element.id === objectCardId;
  });
}
