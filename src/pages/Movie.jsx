import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setmovie] = useState([])
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(res => res.json())
      .then(data => setmovie(data))
      .catch(error => console.error(error));
  }, [movieId]);

  if (!movie.title) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map(genre =>(
          <span>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;