import { GatsbyImage } from 'gatsby-plugin-image';
import React, { type FC } from 'react';

import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface ImageProps {
  src?: string | null;
  image?: Omit<IGatsbyImageData, 'images'>;
  alt?: string;
  loading?: 'eager' | 'lazy';
  className?: string;
}

const OptimizedImage: FC<ImageProps> = ({
  src,
  image,
  alt,
  loading,
  className,
}) => {
  if (image) {
    return (
      <GatsbyImage
        placeholder='blurred'
        className={className}
        alt={alt ?? ''}
        loading={loading || 'lazy'}
        image={image}
      />
    );
  }

  return (
    <>
      {src && (
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading || 'lazy'}
        />
      )}
    </>
  );
};

export default OptimizedImage;
