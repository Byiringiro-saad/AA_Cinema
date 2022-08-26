import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import api from "../features/api";
import Nav from "../components/nav";
import Box from "../components/movie/box";

const Movies = () => {
  const { state } = useLocation();
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .get("/discover/movie", {
        params: {
          include_adult: false,
          include_video: true,
          with_genres: `${state?.genreId},`,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setMovies(res?.data?.results);
      });
  }, []);

  return (
    <Container>
      <Nav genre={genre} />
      <div className="movies">
        {movies.map((movie, index) => (
          <Box movie={movie} key={index} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .movies {
    margin-top: 100px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

export default Movies;
