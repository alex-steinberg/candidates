import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { ColumnWrapper, Container } from "./styled/layout";
import { Candidates } from "./Candidates";

export const Main: React.FC = () => {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [archiveFilter, setArchiveFilter] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  async function getCandidates() {
    const response = await fetch("../data/interviewRequests.json");
    if (response.ok) {
      const data = await response.json();
      setCandidates(data);
    }
    console.error("Error fetching data", response);
  }

  useEffect(() => {
    getCandidates();
  }, []);
  return (
    <main>
      <ColumnWrapper>
        <Filter
          archiveFilter={archiveFilter}
          setArchiveFilter={setArchiveFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Container>
          <ColumnWrapper>
            <Candidates
              candidates={candidates}
              setCandidates={setCandidates}
              archiveFilter={archiveFilter}
              searchFilter={searchFilter}
            />
          </ColumnWrapper>
        </Container>
      </ColumnWrapper>
    </main>
  );
};
