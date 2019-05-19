import React from 'react';
import styled from 'styled-components';
import StyledTopbar from './StyledComponents/StyledTopBar'
import TopBarContainer from './StyledComponents/TopBarContainer'
import TopBarContainerLeft from './StyledComponents/TopBarContainerLeft'
import TopBarContainerCenter from './StyledComponents/TopBarContainerCenter'
import TopBarContainerRight from './StyledComponents/TopBarContainerRight'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

// const StyledTopbar = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: none;
//   flex-direction: row;
//   position: fixed;
//   height: 44px;
//   background-color: #333;

//   .container {
//   width: 100%;
//   display: flex;
//   justify-content: none;
//   align-items: none;
//   flex-direction: row;
//   color: #fff;
//   letter-spacing: 1px;
//   padding: 0 10px;
//   }
//   @media (min-width: 1280px) {
//   .container {
//     width: 1280px;
//   }
//   }

//   .container .container-left {
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
//   flex: 1;
//   font-size: 11px;
//   }
//   .container .container-left span {
//   cursor: pointer;
//   margin-right: 25%;
//   font-weight: bold;
//   }
//   .container .container-center {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   flex: 3;
//   font-size: 9px;
//   }
//   container .container-center span {
//   cursor: pointer;
//   margin-right: 5%;
//   }
//   .container .container-center span:last-child {
//   margin-right: 0;
//   }
//   .container .container-center span:hover {
//   text-decoration: underline;
//   }
//   .container .container-right {
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   flex-direction: row;
//   flex: 1;
//   font-size: 11px;
//   font-weight: bold;
//   }
//   .container .container-right span {
//   cursor: pointer;
//   }
// `

const TopBar = () => {
  return (
    <StyledTopbar>
      <TopBarContainer>
        <TopBarContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <span>LOG IN</span>
        </TopBarContainerRight>
      </TopBarContainer>
    </StyledTopbar>
  )
}

export default TopBar;