import React from 'react';
import HeaderDate from "./StyledComponents/HeaderDate"
import HeaderTemp from "./StyledComponents/HeaderTemp"
import StyledHeader from "./StyledComponents/StyledHeader"

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const Header = () => {
  return (
    <StyledHeader>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <h1>Lambda Times</h1>
      <HeaderTemp>98°</HeaderTemp>
    </StyledHeader>
  )
}

export default Header