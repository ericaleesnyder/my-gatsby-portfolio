import type { Scalars } from 'graphqlTypes';

export interface StructuredTextBlock {
  id: string;
  originalId: string;
  __typename: string;
  alt?: string;
  asset?: {
    gatsbyImageData?: Scalars['JSON'];
    title?: string;
    url?: string;
  };
};
