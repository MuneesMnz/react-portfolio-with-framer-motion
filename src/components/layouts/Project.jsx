import React from "react";
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";
import { FaGithub } from "react-icons/fa";
import {
  TechStackCard,
  ProjectImageContainer,
  ProjectImage,
} from "../../styles/MyProjacts.styled";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";
import { motion } from "framer-motion";

const Project = ({ data }) => {
  return (
    <FlexContainer
      direction={data.reverse ? "row-reverse" : false}
      fullWidthChild
    >
      {/* left Section  */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3">
            {data.project_name}
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>
        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tect_stack.map((stack, ind) => (
              <TechStackCard key={ind}>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>
        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>
        <Button href={data.project_url}>Visit Website</Button>
      </motion.div>
      {/* right section  */}
      <ProjectImageContainer
        justify={data.reverse ? "flex-start" : "flex-end"}
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImage src={data.project_img} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
