import React, { useEffect, useState } from "react";

import "./App.css";
import styled from "styled-components";
import DaysListItems from "./components/DaysListItems/DaysListItems";

const WeekContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    padding-top: 100px;
    color: bisque;
    font-size: 4rem;
  }
`;

function App() {
  const [data, setData] = useState(null);

  const removeDuplicatesByDate = (arr) => {
    return arr.filter(
      (v, i, a) => a.findIndex((t) => t.lastUpdatedAtApify.slice(0, 10) === v.lastUpdatedAtApify.slice(0, 10)) === i
    );
  };

  useEffect(() => {
    async function fetchMyApi() {
      const url = "https://api.apify.com/v2/datasets/L3VCmhMeX0KUQeJto/items?format=json&desc=true&clean=1&limit=30";
      const response = await fetch(url);
      const data = await response.json();
      setData(removeDuplicatesByDate(data));
    }
    fetchMyApi();
  }, []);

  return (
    <WeekContainer>
      {!data ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DaysListItems week={1} data={data} />
          <DaysListItems week={2} data={data} />
        </>
      )}
    </WeekContainer>
  );
}

export default App;
