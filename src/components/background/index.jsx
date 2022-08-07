import React from "react";
import styled from "styled-components";

import Item from "./item";

const Background = () => {
  return (
    <Container>
      <div className="background"></div>
      <Item top={20} left={10} />
      <Item bottom={20} left={50} />
      <Item top={50} right={10} />
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
`;

export default Background;
