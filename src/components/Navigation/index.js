import styled from "styled-components";
import Link from "next/link";

function Navigation() {
  return (
    <StyledNavigation>
      <Heading>
        <Link href="/">
          <a>Catalogue it</a>
        </Link>
      </Heading>
      <div>
        <NavLinks>
          <NavLink>
            <Link href="/feed">
              <a>Feed</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/">
              <a>Logout</a>
            </Link>
          </NavLink>
        </NavLinks>
      </div>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 3.6rem;
  color: #393939;

  a,
  a:visited {
    text-decoration: none;
    color: #393939;
  }
`;

const NavLinks = styled.ul`
  display: flex;
`;

const NavLink = styled.li`
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-left: 2.4rem;
  a,
  a:visited {
    color: #393939;
    text-decoration: none;
  }
`;

export default Navigation;
