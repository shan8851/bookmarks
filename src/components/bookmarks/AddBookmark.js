import React, { useState } from "react";
import Layout from "../Layout/Layout";
import styled from "styled-components";
import { addBookmark } from "../../firebase/fire";

export default function AddBookmark() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const bookmarkData = { name, link, category, description };

  const resetForm = () => {
    setName("");
    setLink("");
    setCategory("");
    setDescription("");
    setConfirmation(true);
    setTimeout(() => {
      setConfirmation(false);
    }, 3000);
  };

  return (
    <Layout>
      <Container>
        <h1>Add Bookmark</h1>
        <p>Fill in the details below to add a new bookmark</p>
        {confirmation && <Success>Bookmark has been added</Success>}
        <Card>
          <Question>
            What name would you like to associate with the bookmark?
          </Question>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Question>Paste the complete URL of the bookmark below.</Question>
          <Input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Question>What Category should be used for this bookmark?</Question>
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Question>Give the bookmark a brief description.</Question>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <AddButton
            onClick={() => addBookmark(bookmarkData, () => resetForm())}
          >
            Add Bookmark
          </AddButton>
        </Card>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

const Question = styled.h3`
  font-size: 2rem;
  letter-spacing: 3px;
  font-family: "Montserrat";
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 2px solid black;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  font-size: 2.5rem;
  font-family: "Montserrat";
  font-weight: 900;
  padding: 20px;
  border: none;
  margin-top: 20px;
`;

const Success = styled.div`
  background-color: green;
  color: white;
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Montserrat";
  padding: 8px 16px;
`;
