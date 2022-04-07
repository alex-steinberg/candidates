import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  margin-right: 6px;
`;

const UnreadStyledDiv = styled(StyledDiv)`
  background-color: ${({ theme }) => theme.color.success};
`;

export const Unread: React.FC<{ isUnread: boolean }> = ({ isUnread }) => {
  return isUnread ? <UnreadStyledDiv /> : <StyledDiv />;
};
