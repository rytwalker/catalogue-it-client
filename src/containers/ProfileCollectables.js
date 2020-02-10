import styled from "styled-components";
import Collectable from "../components/Collectable";

function ProfileCollectables() {
  return (
    <Container>
      <Collectable />
      <Collectable />
      <Collectable />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 8rem;
`;

export default ProfileCollectables;
