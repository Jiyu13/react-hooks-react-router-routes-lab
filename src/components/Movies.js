import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies page</h1>
        {movies.map(movie => {
          return (
            <div key={movie.name}>
              <p>{movie.title}</p>
              <p>{movie.time}</p>
              <ul>
                {movie.genres.map(genre => {
                    return <li>{genre}</li>
                  }
                )}
              </ul>
            </div>
            )
        })}
    </div>
  )
}

export default Movies;
