import React from "react";
import styled from "styled-components";

export default function Layout() {
  return (
    <Wrapper>
      <h1>Layout component</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
