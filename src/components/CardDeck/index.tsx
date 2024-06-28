import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import Card from 'components/Card';
import { CardDeckWrap, Deck } from 'components/CardDeck/styles/CardDeck.styled';
import ComponentHeading from 'components/Heading/ComponentHeading';

import type { DatoCmsComponentFeaturedProjectGrid } from 'graphqlTypes';

const CardDeck: FC<DatoCmsComponentFeaturedProjectGrid> = ({
  heading,
  subheading,
  cta,
  projects,
}) => {
  const projectLength = projects && projects.length;
  const variant = projectLength === 5 ? 'homepage' : 'detail';
  const cards = variant === 'homepage' ? projects : projects?.slice(0, 3);

  return (
    <Container>
      <CardDeckWrap>
        {(heading || subheading || cta) && (
          <ComponentHeading
            heading={heading}
            subheading={subheading}
            ctas={cta ? [cta] : null}
            hTag='h2'
            desktopSize='headLg'
            alignment='center'
          />
        )}
        <Deck variant={variant}>
          {cards &&
            cards.map((project, index) => (
              <Card
                className={`card card${index}`}
                key={Math.random()}
                slug={`/projects/${project?.slug}`}
                featuredImage={project?.featuredImage}
                title={project?.title}
                blurb={project?.blurb}
                hoverColor={project?.hoverColor}
              />
            ))}
        </Deck>
      </CardDeckWrap>
    </Container>
  );
};

export default CardDeck;
