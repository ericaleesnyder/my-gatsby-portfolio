import { motion } from 'framer-motion';
import React, { type FC, useState } from 'react';

import Text from 'atoms/Text/Text';

import OptimizedImage from 'components/Image';
import {
  SkillCard,
  TextWrap,
} from 'components/SkillsBar/styles/SkillsBar.styled';

import type { DatoCmsEntitySkill } from 'graphqlTypes';

interface SkillsCardProps {
  skill: DatoCmsEntitySkill;
  idx: number;
}

const SkillsCard: FC<SkillsCardProps> = ({ skill, idx }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const oddMotion = {
    rest: { rotate: 0 },
    hover: { rotate: 3 },
  };

  const evenMotion = {
    rest: { rotate: 0 },
    hover: { rotate: -3 },
  };

  return (
    <>
      {skill?.logo && skill?.title && (
        <SkillCard
          key={skill.title}
          className='test'
          tabIndex={0}
          as={motion.div}
          initial='rest'
          whileHover='hover'
          whileFocus='hover'
          whileTap='hover'
          animate='rest'
          onMouseOver={() => setHover(true)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onMouseLeave={() => setHover(false)}
          aria-label={skill.title}
        >
          <OptimizedImage
            image={skill.logo?.gatsbyImageData}
            src={skill.logo?.url}
            alt={skill.logo?.alt ?? skill.title}
          />
          {skill?.title && (
            <TextWrap
              variants={idx % 2 === 0 ? evenMotion : oddMotion}
              className='textWrap'
              aria-hidden={!(hover || focus)}
            >
              <Text weight={700}>{skill.title}</Text>
            </TextWrap>
          )}
        </SkillCard>
      )}
    </>
  );
};

export default SkillsCard;
