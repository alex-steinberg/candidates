import React from "react";
import styled from "styled-components";
import { CandidateModel } from "../model/candidate.model";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const RoundedImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  margin-right: 1rem;
`;

export const Candidate: React.FC<CandidateModel> = ({ image, candidate }) => {
  return (
    <StyledDiv>
      <RoundedImage src={image} />
      <span>{candidate}</span>
    </StyledDiv>
  );
};
