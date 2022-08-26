import React from "react";
import styled from "styled-components";

const Box = ({ movie }) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <Container>
      <div className="image">
        {loading && <img src="/loader.svg" alt="loader" className="loader" />}
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie?.poster_path}`}
          alt={movie?.original_title}
          onLoad={() => setLoading(false)}
          style={loading ? { display: "none" } : {}}
        />
      </div>
      <div className="about">
        <p className="title">{movie?.original_title}</p>
        <p className="rate">{movie?.vote_average}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 550px;
  margin: 10px 0;
  color: var(--white);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  overflow: hidden;

  .image {
    width: 100%;
    height: 90%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
      object-position: center center;
    }

    .loader {
      width: 10%;
      object-fit: cover;
      border-radius: 5px;
      object-position: center center;
    }
  }

  .about {
    width: 100%;
    height: 10%;
    display: flex;
    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.2em;
    }
  }
`;

export default Box;
