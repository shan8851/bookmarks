import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
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
import { auth } from "../../firebase/fire";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((error) => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
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
        <AuthButtonText>
          Don't have an account?{" "}
          <Link
            style={{ textDecoration: "underline", color: "white" }}
            to="signUp"
          >
            Sign up
          </Link>{" "}
          <br />{" "}
          <Link
            style={{ textDecoration: "underline", color: "white" }}
            to="passwordReset"
          >
            Forgot Password?
          </Link>
        </AuthButtonText>
      </Container>
    </Wrapper>
  );
}
