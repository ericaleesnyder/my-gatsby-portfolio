import React, { type FC } from 'react';

import type { DatoCmsEntityPerson } from 'graphqlTypes';

const Author: FC<DatoCmsEntityPerson> = ({
  name,
  headshot,
  positionTitle,
  company,
}) => {
  console.log(headshot);

  return (
    <div>
      {name && <div>{name}</div>}
      {positionTitle && company && (
        <div>
          {positionTitle} @ {company}
        </div>
      )}
    </div>
  );
};

export default Author;
