import styled from "styled-components";

function CollectionsNav() {
  return (
    <Nav>
      <Button bold>Most Recent</Button> | <Button>Collections</Button>
      <Button alignRight>New Collectable</Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

const Button = styled.button`
  font-size: 2.4rem;
  font-family: inherit;
  text-transform: uppercase;
  border: none;
  border-radius: none;
  cursor: pointer;
  margin-left: ${({ alignRight }) => (alignRight ? "auto" : 0)};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
`;

export default CollectionsNav;
