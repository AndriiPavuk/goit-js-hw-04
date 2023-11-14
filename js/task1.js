function isenoughcapacity(products, containersize) {
  let totalQuantity = 0;
  for (let product in products) {
    totalQuantity += products[product];
  }

  if (totalQuantity <= containersize) {
    return true;
  } else {
    return false;
  }
}
