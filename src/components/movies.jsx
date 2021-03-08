import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies } from "../service/fakeMovieService";
import { getGenre } from "../service/fakeGenreService";
import { paginate } from "../utils/paginate";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    selectedGenre: "",
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenre()];
    this.setState({ movies: getMovies(), genres });
  }
  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((item) => item._id !== movie._id);
    console.log(movies);
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filetered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filetered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filetered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, genres, sortColumn } = this.state;

    if (count === 0) return <p>There ar no movies in the database.</p>;

    const { totalCount, data: movies } = this.getPageData();
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
            onSort={this.handeSort}
          />
        </div>
        <div className="col">
          {" "}
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLiked}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
