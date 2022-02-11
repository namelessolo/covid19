import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 392px;
  aspect-ratio: 1/1;
  background-color: bisque;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

const SkeletonBox = () => {
  return (
    <Container>
      <Wrapper>
        <SkeletonTheme baseColor="#333" highlightColor="white" width={350}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </SkeletonTheme>
      </Wrapper>
    </Container>
  );
};

export default SkeletonBox;
