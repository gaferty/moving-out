"use client";
import { useState } from "react";
import { Navbar, NavbarContent, NavbarBrand } from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";

import NavButtons from "./navButtons";

export const CompNavbar = () => {
  const links = [
    { text: "Items", link: "/items" },
    { text: "Basket", link: "/basket" },
  ];
  const authentication = {
    authenticated: {
      text: "Account",
      link: "/account",
    },
    unauthenticated: {
      text: "Log in",
      link: "/login",
    },
  };

  const [enabled, setEnabled] = useState(false);

  return (
    <Navbar className="sm:flex gap-4 bg-gray-100">
      <NavbarBrand>
        <Link className="max-sm:hidden flex-none font-bold text-black" href="/">
          MOVING AWAY
        </Link>
      </NavbarBrand>
      <NavbarContent className="grow flex gap-4 w-full" justify="center">
        {links.map((link, index) => {
          return <NavButtons key={index} link={link.link} text={link.text} />;
        })}
        {enabled ? (
          <NavButtons
            key={-1}
            link={authentication.authenticated.link}
            text={authentication.authenticated.text}
          />
        ) : (
          <NavButtons
            key={-1}
            link={authentication.unauthenticated.link}
            text={authentication.unauthenticated.text}
          />
        )}
      </NavbarContent>
    </Navbar>
  );
};
