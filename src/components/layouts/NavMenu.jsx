import React from "react";
import { PaddingContainer, FlexContainer } from "../../styles/Global.styled";

import { AiOutlineClose } from "react-icons/ai";
import {
  MenuIcon,
  MenuItem,
  NavMenuContainer,
} from "../../styles/Navbar.styled";
import { navLinks } from "../../utils/Data";
import { motion } from "framer-motion";
import { slideInLeft } from "../../utils/Variants";

const NavMenu = ({ setOpen }) => {
  return (
    <NavMenuContainer
      as={motion.div}
      variants={slideInLeft}
      initial={"hidden"}
      animate="visible"
      exit="exit"
    >
      <PaddingContainer left="5%" right="5%" top="2rem">
        <FlexContainer justify="flex-end" responsiveFlex>
          <MenuIcon
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      {/* menu Item  */}
      <PaddingContainer top="8%">
        <FlexContainer direction="column" align="center" responsiveFlex>
          {navLinks.map((nav) => (
            <MenuItem
              as={motion.a}
              whileHover={{ scale: 1.3 }}
              href={`#${nav.href}`}
              onClick={() => setOpen(false)}
              key={nav.id}
            >
              {nav.name}
            </MenuItem>
          ))}
        </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  );
};

export default NavMenu;
