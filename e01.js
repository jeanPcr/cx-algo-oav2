const anArray = [10, 5, 4, 67, 5, 42, 87, 0, 58, 7, 2, 3];

function bubleSorting(array) {
  let aux = 0;
  for (let j = array.length - 1; j >= 0; j--) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
  }
}
bubleSorting(anArray);
console.log(anArray);
