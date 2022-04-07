import React from "react";
import styled from "styled-components";
import { Unread } from "./Unread";
import { LastCommsModel } from "../model/candidate.model";
import * as dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import customParseFormat from "dayjs/plugin/customParseFormat";
// import { parse, format, isToday, isYesterday } from "date-fns";
import { settings } from "../settings/settings";
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(customParseFormat);

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const MutedSpan = styled.span`
  color: ${({ theme }) => theme.color.muted};
  font-weight: 300;
  font-size: 12px;
  align-self: flex-end;
`;

export const LastComms: React.FC<LastCommsModel> = ({
  isUnread,
  description,
  dateTime,
}) => {
  const dateObj = dayjs(dateTime, settings.parseDateFormat);
  return (
    <StyledDiv>
      <Unread isUnread={isUnread} />
      <span className="mr-1">{description}</span>
      <MutedSpan>
        {dateObj.isToday()
          ? dateObj.format("hh:mma")
          : dateObj.isYesterday()
          ? "yesterday"
          : dateObj.format("DD/MM/YYYY")}
      </MutedSpan>
    </StyledDiv>
  );
};
