import React from "react";
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from "../styles/Global.styled";
import { SkillCard, SkillsCardContainer } from "../styles/MySkills.styled";
import { Skills } from "../utils/Data";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveREight="1rem"
    >
      <FlexContainer
        responsiveFlex
        responsiveDirection="column-reverse"
        fullWidthChild
      >
        {/* left container  */}
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {Skills.map((skill, ind) => (
            <SkillCard key={ind}>
              <IconContainer size="5rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillCard>
          ))}
        </SkillsCardContainer>

        {/* right container  */}

        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView={"visible"}
        >
          <Heading as={"h4"} size="h4">
            MY SKILLS
          </Heading>
          <Heading as={"h2"} size="h2">
            What <BlueText>I can do</BlueText>
          </Heading>
          <ParaText top="2rem" bottom="1.5rem">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            accusantium ratione blanditiis rerum corrupti commodi, incidunt,
            nulla eligendi nemo animi reiciendis! Vero adipisci rerum
            repellendus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempora, obcaecati? Voluptatibus consequatur inventore sit
            officiis, unde corporis error accusantium vel?
          </ParaText>
          <ParaText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            magni deserunt delectus consequatur quibusdam ad ducimus numquam
            vitae molestiae, laudantium eveniet maxime molestias. Quas, nihil?
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
