import React from "react";
import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
  return (
    <Container>
      <div className="bars">
        <FaBars className="icon" />
      </div>
      <div className="search">
        <FiSearch className="icon" />
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
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
