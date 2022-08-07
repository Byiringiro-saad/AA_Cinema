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
    "scifi",
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
    "reality",
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
            <Link to={`/movies/${movie}`} data-text={`${movie}`}>
              {movie}
            </Link>
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
      position: relative;
      text-align: center;
      height: auto;
      margin: 50px 0;
      list-style: none;

      a {
        position: relative;
        font-size: 5em;
        font-weight: 700;
        text-decoration: none;
        color: transparent;
        text-transform: uppercase;
        -webkit-text-stroke: 1px var(--white);

        ::before {
          content: attr(data-text);
          position: absolute;
          color: var(--white);
          width: 0%;
          overflow: hidden;
          transition: 0.5s;
        }

        :hover {
          font-weight: 700;

          ::before {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default Home;
