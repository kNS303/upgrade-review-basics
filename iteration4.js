arreglo = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
texto = "Ajolote";
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
}
console.log(findArrayIndex(arreglo, texto));
