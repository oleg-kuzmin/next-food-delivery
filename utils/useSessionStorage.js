export function deleteSessionOrder({ ...object }) {
  const basketArray = JSON.parse(sessionStorage.getItem('basket'));
  const result = basketArray.filter(item => item.id !== object.id);

  if (result.length === 0) {
    sessionStorage.removeItem('basket');
  } else {
    sessionStorage.setItem('basket', JSON.stringify(result));
  }
}

export function saveSessionOrder({ ...object }, counter) {
  const basketArray = JSON.parse(sessionStorage.getItem('basket'));
  let result;

  if (!basketArray) {
    sessionStorage.setItem('basket', JSON.stringify([{ ...object, counter: counter }]));
    return;
  }

  const isNewElement = !basketArray.some(item => {
    return item.id === object.id;
  });

  if (isNewElement) {
    result = [...basketArray, { ...object, counter: counter }];
  } else {
    result = basketArray.map(item => {
      if (item.id !== object.id) {
        return item;
      } else {
        return {
          ...item,
          counter: counter,
        };
      }
    });
  }

  sessionStorage.setItem('basket', JSON.stringify(result));
}
