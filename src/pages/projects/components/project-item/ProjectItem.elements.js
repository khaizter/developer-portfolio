import styled from "styled-components";

export const StyledProjectItem = styled.div`
  overflow: hidden;
  border-radius: 8px;
  /* box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); */
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.secondaryText};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const Link = styled.a`
  border: none;
  background: none;
  padding: 0;
  img {
    width: 2rem;
  }
`;
