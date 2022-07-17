import styled from "styled-components";

export const StyledContactItem = styled.li`
  width: 16.8125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid white;
  border-radius: 8px;
  padding: 2rem;
  color: white;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    img {
      display: block;
    }
  }
`;

export const Title = styled.h2``;

export const Info = styled.p``;

export const CopyClipboard = styled.img`
  display: none;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;
