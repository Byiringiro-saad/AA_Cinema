import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../components/nav";

const Home = () => {
  const [movies, setMovies] = useState([
    "fantasy",
    "comedy",
    "action",
    "drama",
    "horror",
    "thriller",
    "sci - fi",
    "animation",
    "documentary",
    "mystery",
    "romance",
    "family",
    "war",
    "history",
    "western",
    "adventure",
    "musical",
    "sport",
    "news",
    "short",
    "tv - movie",
    "game show",
    "reality",
    "tv - minisode",
  ]);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container>
      <Nav />
      <ul>
        {movies.map((movie, index) => (
          <motion.li
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            key={index}
          >
            <Link to={`/movies/${movie}`}>{movie}</Link>
          </motion.li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      width: auto;
      text-align: center;
      height: auto;
      margin: 50px 0;

      a {
        font-size: 5em;
        font-weight: 500;
        text-decoration: none;
        color: var(--white);

        :hover {
          font-weight: 500;
          color: var(--bright);
        }
      }
    }
  }
`;

export default Home;
