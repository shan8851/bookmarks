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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Heading>Sign In</Heading>
        {error !== null && <Error>{error}</Error>}
        <StyledForm>
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
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </AuthButton>
        </StyledForm>
        <p>or</p>
        <GoogleAuthButton>Sign in with Google</GoogleAuthButton>
        <p>
          Don't have an account? <Link to="signUp">Sign up here</Link> <br />{" "}
          <Link to="passwordReset">Forgot Password?</Link>
        </p>
      </Container>
    </Wrapper>
  );
}
