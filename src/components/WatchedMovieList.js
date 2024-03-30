import WatchedMovie from "./WachedMovie";

export default function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDelete={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
