import styled from "styled-components";

export const AppStyle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  input{
    height: 35px;
  }
  label{
    font-weight: bold;
  }
  button{
    height: 35px;
  }
`;
