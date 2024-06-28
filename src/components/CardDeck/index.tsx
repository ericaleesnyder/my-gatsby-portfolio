import React, { type FC } from 'react';

import Card from 'components/Card';
import { CardDeckWrap, Deck } from 'components/CardDeck/styles/CardDeck.styled';
import ComponentHeading from 'components/Heading/ComponentHeading';

import type { DatoCmsComponentFeaturedProjectGrid } from 'graphqlTypes';

const CardDeck: FC<DatoCmsComponentFeaturedProjectGrid> = ({
  heading,
  projects,
}) => (
  <CardDeckWrap>
    {heading && (
      <ComponentHeading
        heading={heading}
        hTag='h2'
        desktopSize='headLg'
        alignment='center'
      />
    )}
    <Deck>
      {projects &&
        projects.map((project) => <Card key={Math.random()} {...project} />)}
    </Deck>
  </CardDeckWrap>
);

export default CardDeck;
