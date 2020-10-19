const anArray = [10, 5, 4, 67, 5, 42, 87, 0, 58, 7, 2, 3];

function insertionSorting(array) {
  for (let i = 1; i < array.length; i++) {
    let x = array[i];

    let j = i - 1;
    while (j >= 0 && x < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = x;
  }
}

insertionSorting(anArray);
console.log(anArray);
