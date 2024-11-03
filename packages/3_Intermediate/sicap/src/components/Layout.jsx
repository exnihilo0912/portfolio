import { Outlet } from "react-router-dom";
import styled from 'styled-components';

import Button from './Button.tsx';
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
const StyledSideMenu = styled.div`
  background: lightgrey;
  width: 50px;
  height: auto;
  position: fixed;
  right: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border-radius: 5px 0 0 5px;
`;

function Layout() {
  return (
    <StyledLayout>
      <PageHeader />
      <StyledSideMenu>
        <Button>TGL</Button>
        <hr/>
        <Button>ZOM</Button>
        <Button>DRK</Button>
        <Button>RST</Button>
      </StyledSideMenu>
      <StyledContent>
        <Outlet />
      </StyledContent>
      <PageFooter />
      <div id="modal"></div>
    </StyledLayout>
  );
}

export default Layout;
