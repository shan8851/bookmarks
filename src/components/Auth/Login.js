import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

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
        <form className="">
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <StyledInput
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <StyledInput
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </button>
        </form>
        <p>or</p>
        <button>Sign in with Google</button>
        <p className="text-center my-3">
          Don't have an account? <Link to="signUp">Sign up here</Link> <br />{" "}
          <Link to="passwordReset">Forgot Password?</Link>
        </p>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
`;

const Heading = styled.div`
  font-size: 3rem;
  margin-bottom: 2px;
  text-align: center;
  font-weight: bold;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 12px;
`;

const Error = styled.div`
  padding: 4px 0;
  background-color: red;
  color: white;
  width: 100%;
  text-align: center;
  margin-bottom: 3px;
`;

const StyledInput = styled.input`
  padding: 5px;
`;
