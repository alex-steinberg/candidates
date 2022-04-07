import styled from "styled-components";

export const TableInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.muted};
  font-weight: bold;
  font-size: 14px;
  margin-top: 24px;
`;

export const StyledTable = styled.table`
  margin-top: 8px;
  background-color: ${({ theme }) => theme.color.white};
  thead {
    background-color: ${({ theme }) => theme.color.light};
    th {
      font-weight: bold;
    }
    td {
      color: ${({ theme }) => theme.color.muted};
    }
  }
`;
