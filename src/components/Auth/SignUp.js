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
  AuthButtonText,
} from "./AuthStyles";
import {
  auth,
  signInWithGoogle,
  generateUserDocument,
} from "../../firebase/fire";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

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
            placeholder="Name"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
          <StyledInput
            type="email"
            name="userEmail"
            value={email}
            placeholder="Email"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <StyledInput
            type="password"
            name="userPassword"
            value={password}
            placeholder="Password"
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
        <p style={{ color: "white" }}>or</p>
        <AuthButton onClick={signInWithGoogle}>Sign In with Google</AuthButton>
        <AuthButtonText>
          Already have an account?{" "}
          <Link style={{ textDecoration: "underline", color: "white" }} to="/">
            Sign in here
          </Link>
        </AuthButtonText>
      </Container>
    </Wrapper>
  );
}
