import styled from "styled-components";

export const RegisterStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    background: #acada8;
    gap: 0.5rem;
    padding: 20px;
  }
  input {
    height: 35px;
    padding: 10px;
    outline: none;
    border: none;
  }
  label {
    font-weight: bold;
  }
  button {
    height: 35px;
  }
  .errorMessage {
    font-weight: bold;
    color: #ff0f0f;
  }
`;
