import React from "react";
import styled from "styled-components";

const Item = ({ top, bottom, left, right }) => {
  return (
    <Container top={top} bottom={bottom} left={left} right={right}></Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  background: var(--bright);
  z-index: -1;
  filter: drop-shadow(0 0 30px var(--bright));
  top: ${(props) => props.top}%;
  bottom: ${(props) => props.bottom}%;
  left: ${(props) => props.left}%;
  right: ${(props) => props.right}%;
`;

export default Item;
