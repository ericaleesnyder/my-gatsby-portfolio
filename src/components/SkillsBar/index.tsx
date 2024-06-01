import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import ComponentHeading from 'components/Heading/ComponentHeading';
import SkillsCard from 'components/SkillsBar/components/SkillCard';
import {
  SkillsBarWrap,
  SkillsWrap,
} from 'components/SkillsBar/styles/SkillsBar.styled';

import type {
  DatoCmsComponentSkillsBar,
  DatoCmsEntitySkill,
} from 'graphqlTypes';

const SkillsBar: FC<DatoCmsComponentSkillsBar> = ({ heading, skills }) => (
  <Container>
    <SkillsBarWrap>
      {heading && (
        <ComponentHeading hTag='h2' desktopSize='headLg' heading={heading} />
      )}
      <SkillsWrap>
        {skills &&
          skills.length > 0 &&
          skills.map((skill, idx) => (
            <SkillsCard
              key={skill?.title}
              skill={skill as DatoCmsEntitySkill}
              idx={idx}
            />
          ))}
      </SkillsWrap>
    </SkillsBarWrap>
  </Container>
);

export default SkillsBar;
