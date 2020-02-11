import styled from "styled-components";
import FeedCollectable from "../components/FeedCollectable";

function FeedCollectables() {
  return (
    <FeedCollectablesContainer>
      <FeedCollectable />
      <FeedCollectable />
      <FeedCollectable />
      <FeedCollectable />
      <FeedCollectable />
      <FeedCollectable />
    </FeedCollectablesContainer>
  );
}

const FeedCollectablesContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export default FeedCollectables;
