import styled from "styled-components";

function FeedCollectable() {
  return (
    <StyledFeedCollectable>
      <div>
        <User>
          <span></span>RYANWALKER
        </User>
        <Title>Title</Title>
        <Description>This is a description etc etc etc</Description>
        <Category>Vinyl</Category>
      </div>
      <div>
        <ImageContainer></ImageContainer>
        <LikesBar>
          200 likes <span></span>
        </LikesBar>
      </div>
    </StyledFeedCollectable>
  );
}

const StyledFeedCollectable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  margin-bottom: 6rem;
`;

const User = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  span {
    margin-right: 1rem;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #c4c4c4;
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 1.8rem;
  margin-bottom: 3rem;
`;

const Category = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 3px;
  background: #c4c4c4;
  margin-bottom: 1.5rem;
`;

const LikesBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;

  span {
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background: #c4c4c4;
  }
`;

export default FeedCollectable;
