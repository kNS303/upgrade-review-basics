["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  console.log(array);
}
swap(["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"], 0, 2);
