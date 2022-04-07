import React, { useEffect, useState } from "react";
import { ColumnWrapper } from "./styled/layout";
import { StyledTable, TableInfo } from "./styled/tables";
import { FaSort } from "react-icons/all";
import { Candidate } from "./Candidate";
import { LastComms } from "./LastComms";
import * as dayjs from "dayjs";
import styled from "styled-components";

const sortedCandidates = (candidates: any[]) => {
  return candidates.sort((a, b) => {
    return dayjs(a.last_comms.date_time).isBefore(dayjs(b.last_comms.date_time))
      ? 1
      : -1;
  });
};

const canShowCandidate = (
  candidate: any,
  archiveFilter: boolean,
  searchFilter: string
) => {
  const passArchiveFilter =
    archiveFilter || (!archiveFilter && !candidate.archived);
  const fieldsToSearch = [candidate.candidate];
  const passSearchFilter = fieldsToSearch.filter(
    (field) => field.toLowerCase().search(searchFilter.toLowerCase()) > -1
  ).length;
  return passArchiveFilter && passSearchFilter;
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.link};
`;

export const Candidates: React.FC<{
  candidates: any[];
  setCandidates: any;
  archiveFilter: boolean;
  searchFilter: string;
}> = ({ candidates, setCandidates, archiveFilter, searchFilter }) => {
  const toggleArchive = (e: any): any => {
    const nameToToggle = e.currentTarget.dataset.candidate;
    const newCandidates = candidates.map((candidate) => {
      if (candidate.candidate === nameToToggle) {
        candidate.archived = !candidate.archived;
        candidate.last_comms.unread = false;
      }
      return candidate;
    });
    setCandidates(sortedCandidates([...newCandidates]));
  };

  return (
    <ColumnWrapper>
      <TableInfo>{candidates.length} interview requests</TableInfo>
      <StyledTable>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Role</th>
            <th>
              Last Communication <FaSort />
            </th>
            <th>Salary</th>
            <th>Sent By</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {candidates.length ? (
            candidates.map((c, i) =>
              canShowCandidate(c, archiveFilter, searchFilter) ? (
                <tr
                  key={c.candidate + i}
                  className={c.archived ? "bg-gray" : ""}
                >
                  <td className={c.last_comms.unread ? "font-weight-bold" : ""}>
                    <Candidate image={c.image} candidate={c.candidate} />
                  </td>
                  <td className={c.last_comms.unread ? "font-weight-bold" : ""}>
                    {c.role}
                  </td>
                  <td className={c.last_comms.unread ? "font-weight-bold" : ""}>
                    <LastComms
                      isUnread={c.last_comms.unread}
                      description={c.last_comms.description}
                      dateTime={c.last_comms.date_time}
                    />
                  </td>
                  <td className={c.last_comms.unread ? "font-weight-bold" : ""}>
                    R
                    {c.salary
                      .toLocaleString()
                      .replace(",", " ")
                      .replace(".00", "")}
                  </td>
                  <td className={c.last_comms.unread ? "font-weight-bold" : ""}>
                    {c.sent_by}
                  </td>
                  <td className={c.last_comms.unread ? "font-weight-bold" : ""}>
                    <StyledButton
                      onClick={toggleArchive}
                      data-candidate={c.candidate}
                    >
                      {c.archived ? "Unarchive" : "Archive"}
                    </StyledButton>
                  </td>
                </tr>
              ) : (
                ""
              )
            )
          ) : (
            <tr>
              <td>There are no candidates</td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </ColumnWrapper>
  );
};
