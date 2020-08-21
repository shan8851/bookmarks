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
  font-weight: bold;
`;

export const Container = styled.div`
  background-color: #e0e0e0;
  border-radius: 16px;
  padding: 24px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.div`
  padding: 4px 0;
  background-color: red;
  color: white;
  width: 100%;
  text-align: center;
  margin-bottom: 3px;
`;

export const ConfirmationBox = styled.div`
  padding: 4px 0;
  background-color: green;
  color: white;
  width: 100%;
  text-align: center;
  margin-bottom: 3px;
`;

export const StyledInput = styled.input`
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 1.2rem;
  border: none;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AuthButton = styled.button`
  width: 100%;
  color: white;
  background-color: green;
  padding: 10px 15px;
  border: none;
  font-weight: bold;
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
