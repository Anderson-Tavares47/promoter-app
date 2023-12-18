import styled from "styled-components";

export const InputStyled = styled.input`
  height: 40px;
  width: 300px;
  padding-left: 10px;
  background: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 10px;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;
