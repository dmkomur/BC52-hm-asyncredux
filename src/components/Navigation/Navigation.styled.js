import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
 text-decoration: none;
  margin-right: 10px;

  &.active {
    color: green;
    text-decoration: none;
    margin-right: 10px;

    &.visited {
      color: inherit;
    }
  }

`