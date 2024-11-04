import { Outlet } from "react-router-dom";
import styled from 'styled-components';

import Button from './Button.tsx';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import SquareButton from './SquareButton.tsx';

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
  background: hsl(0, 0%, 97%);
  width: 50px;
  height: auto;
  position: fixed;
  right: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border-radius: 5px 0 0 5px;
  border: 2px solid hsl(0, 0%, 92%);
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.3rem;
  width: 100%;
`;
const StyledListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

function Layout() {
  return (
    <StyledLayout>
      <PageHeader />
      <StyledSideMenu>
        <StyledList>
          <StyledListItem>
            <SquareButton>TGL</SquareButton>
          </StyledListItem>
          <StyledListItem>
            <SquareButton>Z</SquareButton>
          </StyledListItem>
          <StyledListItem>
            <SquareButton>DRK</SquareButton>
          </StyledListItem>
          <StyledListItem>
            <SquareButton>RST</SquareButton>
          </StyledListItem>
        </StyledList>
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
