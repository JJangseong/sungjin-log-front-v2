import styled from "styled-components";
import CustomButton from "src/components/button/Button.component";

export const PostWriteBottomContainer = styled.div`
  padding: 2rem;
  height: 5rem;
  display: flex;
  align-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;

  @media only screen and (max-width: 900px) {
    justify-content: space-between;
  }
`;

export const Button = styled(CustomButton)`
  margin-left: 2rem;
  &:nth-child(2) {
    margin-left: auto;    

    @media only screen and (max-width: 900px) {
      margin-left: 2rem;
    }
  }
`;
