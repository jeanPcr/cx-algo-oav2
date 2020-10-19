const anArray = [10, 5, 4, 67, 5, 42, 87, 0, 58, 7, 2, 3];

function selectionSorting(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    console.log(min, i);
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
}

selectionSorting(anArray);
console.log(anArray);
