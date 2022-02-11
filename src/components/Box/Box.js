import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 392px;
  aspect-ratio: 1/1;
  background-color: bisque;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

const Box = ({ date, amount, percent }) => {
  return (
    <Wrapper>
      {date ? <p>{date}</p> : <p>Week Summary</p>}
      <p>{amount}</p>
      <p>{percent}%</p>
    </Wrapper>
  );
};

export default Box;
