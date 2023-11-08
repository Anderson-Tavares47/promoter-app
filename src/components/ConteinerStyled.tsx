import styled from "styled-components";

export const ConteinerStyled = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 70%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
