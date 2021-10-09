const categories = [];
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

for (const movie of movies) {
  //console.log(movie.categories)
  for (const categorie of movie.categories) {
    if (!categories.includes(categorie)) {
      categories.push(categorie);
    }
  }
}

console.log(categories);
