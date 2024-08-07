import { Link } from 'gatsby';
import React from 'react';

import type { HeadFC, PageProps } from 'gatsby';
import type { FC } from 'react';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage: FC<PageProps> = () => (
  <main style={pageStyles}>
    <h1 style={headingStyles}>Page not found</h1>
    <p style={paragraphStyles}>
      Sorry 😔, we couldn’t find what you were looking for.
      <br />
      <br />
      <Link to='/'>Go home</Link>.
    </p>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
