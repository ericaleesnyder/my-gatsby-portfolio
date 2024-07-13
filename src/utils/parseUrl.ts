import { Link as GatsbyLink } from 'gatsby';

import checkInternalLink from 'utils/checkInternalLink'

const parseUrl = (href: string) => {
  if (!href) {
    return {
      as: 'div' as unknown as undefined,
    } as const;
  }

  const url = checkInternalLink(href).url;
  const isInternalLink = checkInternalLink(href).isInternalLink;
  const isAnchorLink = checkInternalLink(href).isAnchorLink;
  const internalUrl = isInternalLink ? url?.href.split(url.host)[1] : undefined;

  return {
    as: isInternalLink ? (GatsbyLink as unknown as undefined) : ('a' as unknown as undefined), // as does not have proper type support
    to: isAnchorLink ? href : internalUrl,
    rel: isInternalLink || isAnchorLink ? '' : 'noreferrer noopener',
    target: isInternalLink || isAnchorLink ? '' : '_blank',
    href,
  };
};

export default parseUrl;
