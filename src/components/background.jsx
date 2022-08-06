import React from "react";
import styled from "styled-components";

const Background = () => {
  return (
    <Container>
      <div className="background"></div>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;

  .background {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(9.9px);
    -webkit-backdrop-filter: blur(9.9px);
  }

  .one {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--bright);
    position: absolute;
    bottom: 40%;
    left: 10%;
    z-index: -1;
  }

  .two {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--bright);
    position: absolute;
    top: 20%;
    right: 10%;
    z-index: -1;
  }

  .three {
    width: 100px;
    height: 100px;
    background: var(--bright);
    position: absolute;
    bottom: 20%;
    right: 10%;
    z-index: -1;
  }
`;

export default Background;
