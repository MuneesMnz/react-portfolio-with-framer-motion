import React from "react";

import { PaddingContainer, Heading, BlueText } from "../styles/Global.styled";
import { ProjectDetailes } from "../utils/Data";
import Project from "./layouts/Project";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";

const MYProjects = () => {
  return (
    <PaddingContainer
      id="Project"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1remF"
    >
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
      >
        MY PROJECTS
      </Heading>
      <Heading
        size="h2"
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        What <BlueText>I have build</BlueText>
      </Heading>
      {ProjectDetailes.map((project, ind) => (
        <PaddingContainer top="5rem" bottom="5rem" key={ind}>
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MYProjects;
