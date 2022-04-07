import React from "react";
import logo from "../logo.svg";
import { settings } from "../settings/settings";
import styled from "styled-components";
import { Container } from "./styled/layout";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
`;

const StyledDiv = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing["1"]} 0;

  img {
    max-width: 117px;
    padding: 18px 0;
  }
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledDiv>
          <img src={logo} alt={settings.companyName + " logo"} />
        </StyledDiv>
      </Container>
    </StyledHeader>
  );
};
