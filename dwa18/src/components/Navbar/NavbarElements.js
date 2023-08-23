// import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #ffb3ff;
  // height: 85px;
  // display: flex;
  // justify-content: center;
  //padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  // box-shadow
  height: 70px;
  display: flex;
  position: fixed;
  bottom: 0;
  padding: 20px 36px;
  box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.6);
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 8rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #3838f1;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  
`;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  //margin-right: -30px;
  margin:-30px
  //Second Nav
  //margin-right: 24px;
  //Third Nav
  //width: 100vw;
  //white-space: nowrap; */
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;
