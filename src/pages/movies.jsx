import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import api from "../features/api";
import Nav from "../components/nav";
import Box from "../components/movie/box";

const Movies = () => {
  const { state } = useLocation();
  const { genre } = useParams();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const pagination = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    api
      .get("/discover/movie", {
        params: {
          page: page,
          include_adult: false,
          include_video: true,
          with_genres: `${state?.genreId},`,
        },
      })
      .then((res) => {
        setLoading(false);
        setResults(res?.data);
        setMovies(res?.data?.results);
      });
  }, [page, state?.genreId]);

  return (
    <Container>
      <Nav genre={genre} />
      <div
        className="movies"
        style={loading ? { height: "calc(100vh - 120px)" } : {}}
      >
        {loading ? (
          <img src="/loader.svg" alt="loader" />
        ) : (
          <>
            {movies.map((movie, index) => (
              <Box movie={movie} key={index} />
            ))}
          </>
        )}
      </div>
      <div className="pagination">
        <ThemeProvider theme={theme}>
          <Pagination
            count={results?.total_pages}
            shape="rounded"
            onChange={pagination}
            page={page}
          />
        </ThemeProvider>
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
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;

    > img {
      width: 50px;
    }
  }

  .pagination {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export default Movies;
