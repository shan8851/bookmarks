import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 900;
  color: white;
`;

export const Container = styled.div`
  background-color: black;
  border-radius: 16px;
  padding: 24px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.div`
  padding: 8px 0;
  background-color: red;
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 900;
  margin-bottom: 3px;
  font-family: "Montserrat";
`;

export const ConfirmationBox = styled.div`
  padding: 8px 0;
  font-weight: 900;
  background-color: green;
  color: white;
  font-family: "montserrat";
  width: 100%;
  text-align: center;
  margin-bottom: 3px;
`;

export const StyledInput = styled.input`
  padding: 10px 15px;
  margin: 20px 0;
  font-size: 1.2rem;
  font-family: "montserrat";
  border: none;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AuthButton = styled.button`
  width: 100%;
  color: black;
  background-color: white;
  padding: 10px 15px;
  border: none;
  font-weight: bold;
  font-family: "montserrat";
  font-size: 18px;
  margin-top: 10px;
`;

export const GoogleAuthButton = styled.button`
  width: 100%;
  color: white;
  background-color: red;
  padding: 10px 15px;
  border: none;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthButtonText = styled.h1`
  font-family: "montserrat";
  font-weight: 900;
  color: white;
`;
