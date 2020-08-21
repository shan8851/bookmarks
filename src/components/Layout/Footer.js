import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <FooterText>
        Made with{" "}
        <span aria-label="heart image" role="img">
          ❤️
        </span>{" "}
        & React by Asam Shan
      </FooterText>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 12px;
  letter-spacing: 2px;
`;
