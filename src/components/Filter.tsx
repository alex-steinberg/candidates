import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./styled/layout";
import { StyledLabel } from "./styled/forms";

const FilterWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
`;

const FilterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSearch = styled.input`
  height: 48px;
  width: 210px;
  margin: 16px 0;
  padding: 13px 0 10px 14px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.color.mystic};
  color: ${({ theme }) => theme.color.gray100};
`;

const StyledCheckbox = styled.input`
  width: 14px;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
`;

export const Filter: React.FC<any> = ({
  archiveFilter,
  setArchiveFilter,
  searchFilter,
  setSearchFilter,
}) => {
  const handleSearch = (e: any) => {
    const term = e.currentTarget.value;
    setSearchFilter(term);
  };
  return (
    <FilterWrapper>
      <FilterContainer>
        <StyledSearch
          type="search"
          placeholder="Search"
          value={searchFilter}
          onChange={handleSearch}
        />
        <div>
          <StyledLabel htmlFor="showArchived">Show archived</StyledLabel>
          <StyledCheckbox
            type="checkbox"
            id="showArchived"
            onClick={() => setArchiveFilter(!archiveFilter)}
            checked={archiveFilter}
          />
        </div>
      </FilterContainer>
    </FilterWrapper>
  );
};
