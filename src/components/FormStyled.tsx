import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 818px) {
    width: 100%;
  }

  @media (max-width: 1038px) {
    width: 100%;
  }

  .imgLogo {
    @media (max-height: 700px) {
      height: 180px;
      width: 180px;
    }
    @media (max-height: 650px) {
      height: 150px;
      width: 150px;
    }
    @media (max-height: 600px) {
      height: 120px;
      width: 120px;
    }
  }
`;
