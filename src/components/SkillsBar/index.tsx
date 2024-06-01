import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import Text from 'atoms/Text/Text';

import ComponentHeading from 'components/Heading/ComponentHeading';
import OptimizedImage from 'components/Image';
import {
  SkillCard,
  SkillsBarWrap,
  SkillsWrap,
} from 'components/SkillsBar/styles/SkillsBar.styled';

import type { DatoCmsComponentSkillsBar } from 'graphqlTypes';

const SkillsBar: FC<DatoCmsComponentSkillsBar> = ({ heading, skills }) => (
  <Container>
    <SkillsBarWrap>
      {heading && (
        <ComponentHeading headingTag='h2' headingSize='lg' heading={heading} />
      )}
      <SkillsWrap>
        {skills &&
          skills.length > 0 &&
          skills.map((skill) => (
            <SkillCard key={skill?.title} className='test' tabIndex={0}>
              <OptimizedImage image={skill?.logo?.gatsbyImageData} />
              <Text weight={700}>{skill?.title}</Text>
            </SkillCard>
          ))}
      </SkillsWrap>
    </SkillsBarWrap>
  </Container>
);

export default SkillsBar;
