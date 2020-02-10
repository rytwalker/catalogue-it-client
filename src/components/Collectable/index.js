import styled from "styled-components";

function Collectable() {
  return (
    <StyledCollectable>
      <ImageContainer></ImageContainer>
      <div>
        <Title>Title</Title>
        <Description>This is a description etc etc.</Description>
        <LikesBar>
          <span></span>200 likes
        </LikesBar>
      </div>
    </StyledCollectable>
  );
}

const StyledCollectable = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 3px;
  background: #c4c4c4;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
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

export default Collectable;
