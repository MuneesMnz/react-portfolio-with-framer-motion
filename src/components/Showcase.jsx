import React from "react";
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import {
  Particles,
  ShowcaseImageCard,
  ShowcaseParticleContainer,
} from "../styles/Showcase.styled";

import ShowcaseImage from "../assets/showcase-img.png";
import BackgroundImage from "../assets/particle.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      rigth="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer>
        {/* left Content  */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            hello
          </Heading>
          <Heading as="h2" size="h2">
            I'm <BlueText>Muhammed Munees</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            I'm <BlueText>Front-End Devoloper</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quos veritatis perspiciatis facere hic minima et in commodi,
            voluptatibus reprehenderit temporibus provident voluptates
            reiciendis mollitia?
          </ParaText>

          {/* --social Icons-- */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsTwitter />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsYoutube />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsInstagram />
            </IconContainer>
          </FlexContainer>
        </motion.div>

        {/* Right Content  */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImage} alt="showcase" />
            </ShowcaseImageCard>
            <Particles
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particles"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particles
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particles"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particles
              as={motion.img}
              animate={{
                y: [0, 75, 0],
                rotate: 360,
                scale: [1, 0.6, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particles"
              bottom="0px"
              left="-70px"
              rotate="900deg"
            />
            {/* <Particles
              src={BackgroundImage}
              alt="particles"
              top="-80px"
              left="20px"
              rotate="60deg"
            /> */}
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
