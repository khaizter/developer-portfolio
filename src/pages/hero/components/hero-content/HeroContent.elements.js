import styled from "styled-components";

export const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  width: 50%;
`;

export const HeroTitle = styled.h1`
  color: ${(props) => props.theme.primaryText};
  font-size: 3rem;
`;

export const HeroParagraph = styled.p`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1.5rem;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 2rem;
`;

export const HeroButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.accent};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: ${(props) => props.theme.white};
  font-size: 1.25rem;
  padding-block: 0.625rem;
  padding-inline: 1.25rem;
  border-radius: 8px;
`;
