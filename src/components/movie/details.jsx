import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import api from "../../features/api";

const Details = ({ movie, close }) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    api.get(`/movie/${movie.id}`).then((res) => {
      console.log(res.data);
      setLoading(false);
      setData(res.data);
    });
  }, []);

  return ReactDOM.createPortal(
    <Container>
      <div className="details">
        {loading ? (
          <img src="/loader.svg" alt="loader" className="loader" />
        ) : (
          <>
            <div className="top">
              <p className="name">{data?.original_title}</p>
              <p>{data?.tagline}</p>
              <p className="vote">{data?.vote_average}</p>
            </div>
            <div className="body">
              <p>{data?.overview}</p>
              <div className="genres">
                {data?.genres?.map((genre, index) => (
                  <p className="genre" key={genre?.id}>
                    {genre?.name}
                  </p>
                ))}
              </div>
              <div className="about">
                <div className="row">
                  <p>{data?.status}</p>
                  <p>{data?.release_date}</p>
                </div>
                <div className="row">
                  <p>Length</p>
                  <p>{data?.runtime} mins</p>
                </div>
              </div>
              <div className="companies">
                {data?.production_companies?.map((company, index) => (
                  <p key={index}>{company?.name}</p>
                ))}
              </div>
            </div>
          </>
        )}
        <button>Play</button>
      </div>
      <div className="background" onClick={() => close()}></div>
    </Container>,
    document.querySelector("#movie")
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;

  .details {
    width: 70%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .loader {
      width: 40px;
    }

    .top {
      width: 100%;
      height: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      p {
        color: var(--white);
        font-size: 1.1em;
        font-weight: 700;
      }
    }

    .body {
      width: 80%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 0;
      border-top: 1px solid var(--white);

      > p {
        color: var(--white);
        margin: 0 0 20px 0;
      }

      .genres {
        width: 100%;
        height: 50px;
        display: flex;

        p {
          margin: 0 10px 0 0;
          color: var(--gray);
        }
      }
    }

    .about {
      width: 80%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .row {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        p {
          color: var(--white);
        }
      }
    }

    .companies {
      width: 80%;
      height: auto;
      margin: 50px 0 0 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      p {
        color: var(--white);
      }
    }

    button {
      width: 80%;
      height: 40px;
      background: var(--bright);
      color: var(--white);
      font-size: 1.1em;
      font-weight: 800;
      cursor: pointer;
    }
  }

  .background {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
`;

export default Details;
