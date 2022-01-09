import React from "react";
import Box from "../Box/Box";
import styled from "styled-components";
import Summary from "../Summary/Summary";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const DaysListItems = ({ week, data }) => {
  const firstWeek = data.slice((week - 1) * 7, week * 7);
  const secondWeek = data.slice(week * 7, (week + 1) * 7);
  const amountFirstWeek = (firstWeek.reduce((acc, cur) => +cur.dailyInfected + acc, 0) / 7).toFixed(0);
  const amountSecondWeek = secondWeek.reduce((acc, cur) => acc + +cur.dailyInfected, 0) / 7;
  const percentWeek = ((amountFirstWeek / amountSecondWeek) * 100 - 100).toFixed(2);

  return (
    <Wrapper>
      <Summary amount={amountFirstWeek} percent={percentWeek} />
      {firstWeek.map((item, idx) => {
        const date = item.txtDate.slice(0, 10);
        const amount = item.dailyInfected;
        const secondWeekInfected = secondWeek[idx].dailyInfected;
        const percent = ((amount / secondWeekInfected) * 100 - 100).toFixed(2);
        return <Box date={date} amount={amount} key={date} percent={percent} />;
      })}
    </Wrapper>
  );
};

export default DaysListItems;
