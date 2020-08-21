import React, { useState } from "react";
import { Link } from "@reach/router";
import {
  Wrapper,
  Heading,
  Container,
  Error,
  StyledInput,
  StyledForm,
  AuthButton,
  GoogleAuthButton,
} from "./AuthStyles";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <Wrapper>
      <Container>
        <Heading>Sign Up</Heading>
        {error !== null && <Error>{error}</Error>}
        <StyledForm>
          <StyledInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
          <StyledInput
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <StyledInput
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <AuthButton
            onClick={(event) => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </AuthButton>
        </StyledForm>
        <p>or</p>
        <GoogleAuthButton>Sign In with Google</GoogleAuthButton>
        <p>
          Already have an account? <Link to="/">Sign in here</Link>
        </p>
      </Container>
    </Wrapper>
  );
}
