import Container from 'basics/Container.styled';
import { motion } from 'framer-motion';
import React, { type FC } from 'react';

import Text from 'atoms/Text/Text';

import ComponentHeading from 'components/Heading/ComponentHeading';
import OptimizedImage from 'components/Image';
import {
  SkillCard,
  SkillsBarWrap,
  SkillsWrap,
  TextWrap,
} from 'components/SkillsBar/styles/SkillsBar.styled';

import type { DatoCmsComponentSkillsBar } from 'graphqlTypes';

const SkillsBar: FC<DatoCmsComponentSkillsBar> = ({ heading, skills }) => {
  const oddMotion = {
    rest: { rotate: 0 },
    hover: { rotate: 3, duration: 5 },
  };

  const evenMotion = {
    rest: { rotate: 0 },
    hover: { rotate: -3, duration: 5 },
  };

  return (
    <Container>
      <SkillsBarWrap>
        {heading && (
          <ComponentHeading
            headingTag='h2'
            headingSize='lg'
            heading={heading}
          />
        )}
        <SkillsWrap>
          {skills &&
            skills.length > 0 &&
            skills.map((skill, idx) => (
              <SkillCard
                key={skill?.title}
                className='test'
                tabIndex={0}
                as={motion.div}
                initial='rest'
                whileHover='hover'
                whileTap='hover'
                whileFocus='hover'
                animate='rest'
              >
                <OptimizedImage image={skill?.logo?.gatsbyImageData} />
                <TextWrap
                  variants={idx % 2 === 0 ? evenMotion : oddMotion}
                  className='textWrap'
                >
                  <Text weight={700}>{skill?.title}</Text>
                </TextWrap>
              </SkillCard>
            ))}
        </SkillsWrap>
      </SkillsBarWrap>
    </Container>
  );
};

export default SkillsBar;
