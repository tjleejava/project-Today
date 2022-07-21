import styled from 'styled-components';
import { NavLink as MypageLink } from 'react-router-dom';

export const MypageNavLink = styled(MypageLink) `
  color: #844F15;
  cursor: pointer;

  &.active {
    border: solid;
    border-color: #844F15;
    border-width: 0px 0px 1px 0px;
  }
`

