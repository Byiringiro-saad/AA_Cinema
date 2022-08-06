import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";

const Movies = () => {
  const { genre } = useParams();

  return <Container></Container>;
};

const Container = styled.div``;

export default Movies;
