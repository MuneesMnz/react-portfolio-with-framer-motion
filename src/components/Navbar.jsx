import React, { useEffect, useState } from "react";
import {
  FlexContainer,
  PaddingContainer,
  Container,
  BlueText,
} from "../styles/Global.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { Theme } from "../utils/Theme";
import { Logo, MenuIcon, NavbarContainer } from "../styles/Navbar.styled";
import NavMenu from "./layouts/NavMenu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <NavbarContainer bgColor={sticky ? Theme.colors.primary : "transparent"}>
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" responsiveFlex>
            {/* left logo  */}
            <Logo>
              <BlueText>MNZ</BlueText>
            </Logo>

            {/* right menu item */}

            <MenuIcon
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>
        <AnimatePresence>
          {open && <NavMenu setOpen={setOpen} />}
        </AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
