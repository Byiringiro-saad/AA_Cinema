import React, { useState } from "react";
import styled from "styled-components";

import Nav from "../components/nav";
import api from "../features/api";

const Search = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setLoading(true);

    api
      .get("/search/movie", {
        params: {
          query: query,
        },
      })
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        setSuggestions(response.data.results);
      });
  };

  return (
    <Container>
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
                {suggestions.slice(0, 4).map((suggestion, index) => (
                  <div key={index} className="suggestion">
                    <div className="image">
                      <img
                        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${suggestion?.poster_path}`}
                        alt={suggestion?.original_title}
                      />
                    </div>
                    <p className="name">{suggestion.original_title}</p>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    width: 50%;
    height: 50px;
    justify-self: center;
    background: var(--red);
    border-bottom: 1px solid var(--gray);

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
    width: 50%;
    height: 300px;
    margin: 50px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 30px;
    }

    .suggestion {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
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
`;

export default Search;
