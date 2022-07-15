import styled from "styled-components";

export const StyledSkillItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  :hover p {
    opacity: 1;
  }
`;

export const Icon = styled.img`
  width: 100%;
`;

export const HoverText = styled.p`
  position: absolute;
  top: 100%;
  opacity: 0;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  background-color: black;
  color: white;
  border-radius: 8px;
`;
