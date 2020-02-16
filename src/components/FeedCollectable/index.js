import { useState } from "react";
import styled from "styled-components";
import Heart from "../../svgs/Heart";

function FeedCollectable() {
  const [likes, setLikes] = useState(100);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLikeCollectable = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };
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
          {likes} likes{" "}
          <button onClick={handleLikeCollectable}>
            <Heart hasLiked={hasLiked} />
          </button>
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
    border-radius: 50%;
    height: 48px;
    width: 48px;
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

  button {
    display: block;
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export default FeedCollectable;
