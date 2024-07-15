import React, { type FC } from 'react';

import useSiteMetadata from 'utils/hooks/useSiteMetaData';

interface ISEO {
  title?: string | null;
  description?: string | null;
  indexable: boolean;
  image?: string | null;
  location: {
    pathname: string;
  };
}

const SEO: FC<ISEO> = ({ title, indexable, description, image, location }) => {
  const { siteName: defaultTitle, fallbackSeo } = useSiteMetadata();
  const { description: defaultDescription, image: defaultImage } = fallbackSeo;

  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage.url;

  return (
    <>
      <title>{metaTitle}</title>
      {metaTitle && <meta id='title' name='title' content={metaTitle} />}
      {metaDescription && (
        <meta id='description' name='description' content={metaDescription} />
      )}
      <meta
        id='robots'
        name='robots'
        content={indexable ? 'index' : 'noindex'}
      />
      {location?.pathname && (
        <link
          id='canonical'
          rel='canonical'
          href={`https://ericaleesnyder.com${location?.pathname}`}
        />
      )}
      <meta id='og:type' property='og:type' content='website' />
      {location?.pathname && (
        <meta
          id='og:url'
          property='og:url'
          content={`https://ericaleesnyder.com${location?.pathname}`}
        />
      )}
      <meta id='og:title' property='og:title' content={metaTitle} />
      <meta
        id='og:description'
        property='og:description'
        content={metaDescription}
      />
      {metaImage && (
        <meta id='og:image' property='og:image' content={metaImage} />
      )}
      <meta
        id='og:image:alt'
        property='og:image:alt'
        content={metaDescription}
      />
      <meta id='twitter:title' name='twitter:title' content={metaTitle} />
      <meta id='twitter:card' name='twitter:card' content='summary' />
      <meta
        id='twitter:description'
        name='twitter:description'
        content={metaDescription}
      />
      {metaImage && (
        <meta id='twitter:image' name='twitter:image' content={metaImage} />
      )}
      <meta
        id='twitter:image:alt'
        name='twitter:image:alt'
        content={metaDescription}
      />
    </>
  );
};

export default SEO;
