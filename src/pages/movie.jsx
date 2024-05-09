import styled from "styled-components";
import React, { useEffect } from "react";
import { useParams } from "react-router";

import api from "../features/api";
import Nav from "../components/nav";

const Movie = () => {
  const { movie } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [movieData, setMovieData] = React.useState({});

  console.log(movieData);

  useEffect(() => {
    setLoading(true);
    api.get(`/movie/${movie}/videos`).then((res) => {
      const trailers = res?.data?.results?.filter((data) => {
        if (data.type === "Trailer") {
          return true;
        }
        return false;
      });
      setLoading(false);
      setMovieData(trailers[0]);
    });
  }, [movie]);

  return (
    <Container>
      <Nav />
      <div className="container">
        {loading ? (
          <img src="/loader.svg" alt="loader" className="loader" />
        ) : (
          <iframe
            style={{ width: "100%", height: "100%" }}
            frameborder="0"
            allowfullscreen
            title="YouTube video player"
            referrerpolicy="strict-origin-when-cross-origin"
            src={`https://www.youtube.com/embed/${movieData?.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .container {
    width: 100%;
    margin-top: 80px;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;

    .loader {
      width: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default Movie;
