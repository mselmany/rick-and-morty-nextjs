import { memo } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import { Responsive } from "../atoms/Layout";
import Link from "next/link";

function Navigation({ routes }) {
  const router = useRouter();
  console.log(router);
  return (
    <Container>
      <Responsive>
        {routes.map((route) => (
          <Link {...route} key={route.href} passHref>
            <NavLink
              isActive={
                (router.pathname.includes(route.href) &&
                  route.href.length > 1) ||
                route.href === router.pathname
              }
            >
              {route.title}
            </NavLink>
          </Link>
        ))}
      </Responsive>
    </Container>
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default memo(Navigation);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.BackgroundStrong};
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  position: relative;
  line-height: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.ColorPrimary};

  &:after {
    content: "";
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    background-color: red;
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.ColorPrimary};
    opacity: 0.75;
  }
`;
