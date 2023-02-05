function newMap(array, callback) {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {


    let callbackReturn = callback(array[i], i, array);

    outputArray.push(callbackReturn)
  }
  return outputArray;
}



function newFilter(array, callback) {
  let outputFiltered = []

  for (let i = 0; i < array.length; i++) {
    let callbackFilter = callback(array[i], i, array);

    if (callbackFilter) {
      outputFiltered.push(array[i]);
    }
  }
  return outputFiltered;
}



function newFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let callbackFind = callback(array[i], i, array);
    if (callbackFind) {
      return array[i]
    }
  }
}

function newReduce(array, callback, initialValue) {
  let acc;
  let initialIndex;

  if (initialValue != undefined) {
    acc = initialValue;
    initialIndex = 0;
  } else {
    acc = array[0];
    initialIndex = 1;
  }

  for (let i = initialIndex; i < array.length; i++) {
    let callbackReduce = callback(acc, array[i], i, array);

    acc = callbackReduce;
    
  }
  return acc;
}




export {
  newMap,
  newFilter,
  newFind,
  newReduce
}