import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth } from "../../firebase/fire";
import {
  Wrapper,
  Heading,
  Container,
  StyledInput,
  StyledForm,
  AuthButton,
  AuthButtonText,
} from "./AuthStyles";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <Wrapper>
      <Container>
        <Heading>Reset your Password</Heading>
        <StyledForm action="">
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <div>{error}</div>}
          <StyledInput
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
          />
          <AuthButton onClick={sendResetEmail}>Send me a reset link</AuthButton>
        </StyledForm>
        <AuthButtonText>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            &larr; back to sign in page
          </Link>
        </AuthButtonText>
      </Container>
    </Wrapper>
  );
}
