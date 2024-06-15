import React, { type FC } from 'react';

import Text from 'atoms/Text/Text';

import OptimizedImage from 'components/Image';
import {
  AuthorWrapper,
  Headshot,
  TextWrap,
} from 'components/Testimonials/styles/Author.styled';

import type { DatoCmsEntityPerson } from 'graphqlTypes';

const Author: FC<DatoCmsEntityPerson> = ({
  name,
  headshot,
  positionTitle,
  company,
}) => (
  <AuthorWrapper>
    {headshot && (
      <Headshot>
        <OptimizedImage image={headshot.gatsbyImageData} src={headshot.url} />
      </Headshot>
    )}
    <TextWrap>
      {name && (
        <Text size='textLg' weight={700}>
          {name}
        </Text>
      )}
      {positionTitle && company && (
        <Text size='textSm'>
          {positionTitle} @ {company}
        </Text>
      )}
    </TextWrap>
  </AuthorWrapper>
);

export default Author;
