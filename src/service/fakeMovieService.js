const movies = [
  {
    _id: "5b23ca3eeb7f6bccd471815",
    title: "Terminator",
    genre: { _id: "5b23ca3eeb7f6bccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b23ca3eeb7f6bccd471816",
    title: "Die Hard Die Hard Die Hard Die Hard",
    genre: { _id: "5b23ca3eeb7f6bccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    liked: false,
  },
  {
    _id: "5b23ca3eeb7f6bccd471817",
    title: "Get Out",
    genre: { _id: "5b23ca3eeb7f6bccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "5b23ca3eeb7f6bccd471819",
    title: "Trip to Italy Trip to Italy Trip to Italy",
    genre: { _id: "5b23ca3eeb7f6bccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "5b23ca3eeb7f6bccd47181a",
    title: "Airplane",
    genre: { _id: "5b23ca3eeb7f6bccd471814", name: "Comdey" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "5b23ca3eeb7f6bccd47181b",
    title:
      "Wedding Crashers Wedding Crashers  Wedding Crashers Wedding Crashers",
    genre: { _id: "5b23ca3eeb7f6bccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "5b23ca3eeb7f6bccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b23ca3eeb7f6bccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    liked: false,
  },
  {
    _id: "5b23ca3eeb7f6bccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b23ca3eeb7f6bccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "5b23ca3eeb7f6bccd471821",
    title: "The Avengers",
    genre: { _id: "5b23ca3eeb7f6bccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
];

export function getMovies() {
  return movies;
}
export function getMovie(id) {
  return movies.find((m) => m.id === id);
}
