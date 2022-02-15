import styled from "styled-components";

export const StyledBtn = styled.button`
  background-color: #222222;
  color: #eee;

  padding: 0.5em 2em;

  outline: none;
  border: none;
  border-radius: 0.5rem;

  transition: all 150ms ease-in-out;

  &:focus-visible, &:active, &:hover{
    cursor: pointer;
    opacity: 0.75;
  }
`;