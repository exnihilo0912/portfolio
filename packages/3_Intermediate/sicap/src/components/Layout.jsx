import { Outlet } from "react-router-dom";
import styled from 'styled-components';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

const StyledLayout = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const StyledContent = styled.div`
  flex-basis: 2;
  flex-grow: 2;
  flex-shrink: 2;
  overflow-y: scroll;
`;

function Layout() {
  return (
    <StyledLayout>
      <PageHeader />
      <StyledContent>
        <Outlet />
      </StyledContent>
      <PageFooter />
      <div id="modal"></div>
    </StyledLayout>
  );
}

export default Layout;
