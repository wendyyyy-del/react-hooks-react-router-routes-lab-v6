import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(res => res.json())
      .then(data => setmovies(data))
      .catch(error => console.error(error));
  }, []);

      
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
        ))}
      </main>
    </>
  );
};

export default Home;