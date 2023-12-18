import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  width: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.secundary};
  border: none;
  font-weight: 600;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    cursor: pointer;
  }
`;
