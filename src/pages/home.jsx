import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../components/nav";

import api from "../features/api";

const Home = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api.get("/genre/movie/list").then((res) => {
      setGenres(res?.data?.genres);
    });
  }, []);

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
        {genres.map((genre, index) => (
          <motion.li
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            key={index}
          >
            <Link
              to={`/genres/${genre?.name?.toLowerCase()}`}
              state={{ genreId: genre?.id }}
              data-text={`${genre.name}`}
            >
              {genre.name}
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
    margin-top: 100px;
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

  @media screen and (max-width: 600px) {
    ul li a {
      font-size: 3em;
    }
  }
`;

export default Home;
