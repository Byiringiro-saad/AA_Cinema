import styled from "styled-components";
import React, { useState } from "react";

import api from "../features/api";
import Nav from "../components/nav";
import Details from "../components/movie/details";

const Search = () => {
  const [query, setQuery] = useState("");
  const [details, setDetails] = useState(false);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    clearTimeout();
    setTimeout(() => {
      setLoading(true);

      api
        .get("/search/movie", {
          params: {
            query: query,
          },
        })
        .then((response) => {
          setLoading(false);
          setSuggestions(response.data.results);
        });
    }, 3000);
  };

  const handleDetails = () => {
    setDetails(!details);
  };

  const handleSelection = (id) => {
    setSelected(suggestions[id]);
    setDetails(true);
  };

  return (
    <Container>
      {details ? <Details movie={selected} close={handleDetails} /> : ""}
      <Nav />
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search here...."
          onChange={handleChange}
          value={query}
        />
      </form>
      <div className="suggestions">
        {query.length > 0 && (
          <>
            {loading ? (
              <img src="/loader.svg" alt="loader" />
            ) : (
              <>
                {suggestions.slice(0, 6).map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion"
                    onClick={() => handleSelection(index)}
                  >
                    <p className="name">{suggestion.title}</p>
                  </div>
                ))}
              </>
            )}
          </>
        )}
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

  .form {
    width: 90%;
    height: 50px;
    justify-self: center;
    background: var(--red);
    border-bottom: 1px solid var(--gray);
    margin: 250px 0 0 0;

    input {
      width: 100%;
      height: 100%;
      padding: 0 0 0 20px;
      background: transparent;
      border: none;
      outline: none;
      color: var(--white);
      font-size: 1.5em;
    }
  }

  .suggestions {
    width: 90%;
    height: 400px;
    margin: 50px 0 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;

    img {
      width: 30px;
    }

    .suggestion {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
      cursor: pointer;

      :hover {
        p {
          color: var(--bright);
        }

        img {
          opacity: 0.8;
        }
      }

      p {
        font-size: 1.2em;
        margin: 0 0 0 20px;
        color: var(--white);
      }

      img {
        width: auto;
        height: 100px;
        border-radius: 5px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .suggestions {
      grid-template-columns: 1fr;

      .suggestion {
        height: 60px;
      }
    }
  }
`;

export default Search;
