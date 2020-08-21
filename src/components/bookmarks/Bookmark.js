import React, { useState, useEffect, useContext } from "react";
import Layout from "../Layout/Layout";
import { firestore } from "../../firebase/fire";
import { UserContext } from "../../providers/UserProvider";
import Spinner from "../loading/Spinner";
import styled from "styled-components";
import { FaTags } from "react-icons/fa";

export default function Bookmark() {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchAllBookmarksFromFirebase = async () => {
    firestore
      .doc(`users/${user.email}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data().bookmarks);
          setSearchResults(doc.data().bookmarks);
        } else {
          console.log("No such document!");
        }
      })
      .then(() => setLoading(false))
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    fetchAllBookmarksFromFirebase();
  }, []);

  useEffect(() => {
    const results = data.filter((bookmark) =>
      bookmark.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("results", results);
    setSearchResults(results);
  }, [searchTerm]);

  if (loading) return <Spinner />;
  return (
    <Layout>
      <SearchContainer>
        <Heading>Bookmarks</Heading>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
      </SearchContainer>
      <Container>
        {searchResults.map((bookmark, index) => (
          <Card key={index}>
            <h3>
              <a href={bookmark.lnk}>{bookmark.name}</a>
            </h3>
            <p>
              <FaTags /> {bookmark.category}
            </p>
            <p>{bookmark.description}</p>
            <a href={bookmark.lnk}>{bookmark.link}</a>
          </Card>
        ))}
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  flex-wrap: wrap;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 900;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px 15px;
  margin: 20px 0;
  font-size: 1.2rem;
  font-family: "montserrat";
  border: none;
  background-color: black;
  color: white;
  width: 60vw;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 30%;
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.17);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.17);
`;
