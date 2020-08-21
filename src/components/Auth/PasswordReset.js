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
  ConfirmationBox,
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
          <AuthButton>Send me a reset link</AuthButton>
        </StyledForm>
        <Link to="/">&larr; back to sign in page</Link>
      </Container>
    </Wrapper>
  );
}
