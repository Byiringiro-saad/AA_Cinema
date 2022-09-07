import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Nav = ({ genre }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToSearch = () => {
    navigate("/search");
  };

  return (
    <Container>
      <div className="bars" onClick={goToHome}>
        <FaBars className="icon" />
      </div>
      <div className="genre">
        <p>{genre}</p>
      </div>
      <div className="search">
        <FiSearch className="icon" onClick={goToSearch} />
      </div>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);

  .icon {
    font-size: 1.8em;
    color: var(--white);
  }

  .bars {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .genre {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      color: var(--white);
      font-size: 2em;
      text-transform: capitalize;
    }
  }

  .search {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export default Nav;
