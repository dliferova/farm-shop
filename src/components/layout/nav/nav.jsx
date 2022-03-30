import React from "react";
import Button from "/src/components/ui/button/button";
import { Ul, Li } from "/src/components/styled";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styles";

const links = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
  },
  {
    to: AppRoute.CATALOG,
    item: <Button link={AppRoute.CATALOG}>Купить</Button> }
];

function Nav({ pageUrl }) {
  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
