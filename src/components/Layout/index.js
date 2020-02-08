import styled from "styled-components";

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 994px;
  width: 100%;
`;

export default Layout;
