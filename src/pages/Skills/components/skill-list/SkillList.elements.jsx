import styled from "styled-components";
import Device from "../../../../globals/Devices";

export const StyledSkillList = styled.ul`
  width: 100%;
  padding: 0;
  display: grid;
  column-gap: 3rem;
  row-gap: 1.5rem;
  justify-content: center;
  grid-template-columns: repeat(2, 6rem);

  @media ${Device.mobileL} {
    grid-template-columns: repeat(3, 6rem);
  }

  @media ${Device.laptopS} {
    grid-template-columns: repeat(6, 6rem);
  }
`;
