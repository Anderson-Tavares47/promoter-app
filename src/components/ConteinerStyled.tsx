import styled from "styled-components";

export const ConteinerStyled = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 70%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 826px) {
    width: 60%;
  }

  .imgStyle {
    @media (max-width: 810px) {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 710px) {
    width: 50%;
  }

  .imgStyle {
    @media (max-width: 710px) {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 658px) {
    display: none;
  }
`;
