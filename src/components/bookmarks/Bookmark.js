import React, { useState, useEffect, useContext } from "react";
import Layout from "../Layout/Layout";
import { firestore } from "../../firebase/fire";
import { UserContext } from "../../providers/UserProvider";
import Spinner from "../loading/Spinner";
import styled from "styled-components";
import { FaTags, FaTimesCircle } from "react-icons/fa";
import { Link } from "@reach/router";

export default function Bookmark() {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [bookmarkRemoved, setBookmarkRemoved] = useState(false);

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

  const removeBookmark = (bookmarkName) => {
    // Make a copy of bookmarks
    const currentBookmarks = data;
    // filter the bookmark array
    const newBookmarks = currentBookmarks.filter(
      (bookmark) => bookmark.name !== bookmarkName
    );
    // update the firestore with new bookmarks
    var docRef = firestore.doc(`users/${user.email}`);
    docRef.update({
      bookmarks: newBookmarks,
    });
    // update my state to reload user data
    setBookmarkRemoved(true);
  };

  useEffect(() => {
    const results = data.filter((bookmark) =>
      bookmark.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("results", results);
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    fetchAllBookmarksFromFirebase();
    setBookmarkRemoved(false);
  }, [bookmarkRemoved]);

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
            <CardTopRow>
              <BookmarkName href={bookmark.link}>{bookmark.name}</BookmarkName>
              <FaTimesCircle onClick={() => removeBookmark(bookmark.name)} />
            </CardTopRow>
            <BookmarkCategory>
              <FaTags /> {bookmark.category}
            </BookmarkCategory>
            <BookmarkDescription>{bookmark.description}</BookmarkDescription>
            <BookmarkLink href={bookmark.link}>{bookmark.link}</BookmarkLink>
          </Card>
        ))}
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AddButton>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="add-bookmark"
          >
            Add new bookmark
          </Link>
        </AddButton>
      </div>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  width: 90vw;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
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
  @media (max-width: 750px) {
    width: 90vw;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #e0e0e0;
  width: 350px;
  margin: 15px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const CardTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BookmarkName = styled.a`
  font-family: "Montserrat";
  font-weight: 900;
  color: black;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  font-size: 1.5rem;
  font-family: "Montserrat";
  font-weight: 900;
  padding: 20px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
`;

const BookmarkCategory = styled.p``;

const BookmarkDescription = styled.p``;

const BookmarkLink = styled.a`
  cursor: pointer;
`;
