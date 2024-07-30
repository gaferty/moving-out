'use client'
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import NavButtons from "./navButtons";
import { Image } from "@nextui-org/react";
import { useState } from "react";

export const CompNavbar = () => {
  const links = [
    { text: "Items", link: "/items" },
    { text: "Basket", link: "/basket" },
  ];
  const authentication = {
    authenticated:{
      text:"Account",
      link:"/account"
    },
    unauthenticated:{
      text:"Log in",
      link:"/login"
    }
  };

  const [enabled, setEnabled] = useState(false);

  return (
    <Navbar className="sm:flex gap-4 bg-gray-100">
      <NavbarBrand>
        <Link className="max-sm:hidden flex-none font-bold text-black" href='/'>
        MOVING AWAY
      </Link>
      </NavbarBrand>
      <NavbarContent className="grow flex gap-4 w-full" justify="center">
        {links.map((link, index) =>{
          return (<NavButtons text={link.text} link={link.link} key={index} />);
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
