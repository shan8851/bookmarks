import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import styled from "styled-components";
import Layout from "./Layout/Layout";
import { Link } from "@reach/router";

export default function Main() {
  const user = useContext(UserContext);
  const { photoURL, displayName } = user;
  return (
    <Layout>
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              background: `url(${
                photoURL ||
                "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
              })  no-repeat center center`,
              backgroundSize: "cover",
              height: "200px",
              width: "200px",
            }}
          />
        </div>
        <p>
          Hi {displayName} welcome to your bookmarks homepage, you can add new
          bookmarks <Link to="addBookmark">here</Link> or head
          <Link to="bookmarks">here</Link> to view your existing bookmarks.
          Below are some stats about your bookmarks.
        </p>
        <InfoRow>
          <h2>Total Bookmarks:</h2>
          <p>Some number</p>
        </InfoRow>
        <InfoRow>
          <h2>Number of categories:</h2>
          <p>Some number</p>
        </InfoRow>
        <InfoRow>
          <h2>Most Popular category:</h2>
          <p>Some category</p>
        </InfoRow>
        <InfoRow>
          <h2>Most recent bookmark:</h2>
          <p>Some link</p>
        </InfoRow>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: auto;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;
