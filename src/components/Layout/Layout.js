import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

const MainContent = styled.div`
  flex: 2;
`;
