import React, { type FC } from 'react';

import Card from 'components/Card';
import ComponentHeading from 'components/Heading/ComponentHeading';

import type { DatoCmsComponentFeaturedProjectGrid } from 'graphqlTypes';

const CardDeck: FC<DatoCmsComponentFeaturedProjectGrid> = ({
  heading,
  projects,
}) => {
  console.log(heading, projects);

  return (
    <>
      {heading && (
        <ComponentHeading
          heading={heading}
          hTag='h2'
          desktopSize='headLg'
          alignment='center'
        />
      )}
      <div>
        {projects &&
          projects.map((project) => <Card key={Math.random()} {...project} />)}
      </div>
    </>
  );
};

export default CardDeck;
