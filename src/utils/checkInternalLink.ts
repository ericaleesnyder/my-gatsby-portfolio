const checkInternalLink = (href: string) => {
  let url;
  let isInternalLink;
  let isAnchorLink;

  const domain = 'ericaleesnyder.com';
  if (href[0] === '/') {
    href = `https://${domain}${href}`;
  }

  const res = href.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g,
  );

  const anchorRes = href.match(/^#/);

  if (res !== null) {
    try {
      url = new URL(href);
      isInternalLink = (url.hostname === `www.${domain}` || url.hostname === domain) && !href.includes('.pdf');
    } catch (error) {
      isInternalLink = false;
    }
  }

  if (anchorRes !== null) {
    isAnchorLink = true;
  } else {
    isAnchorLink = false;
  }

  return {
    url: url as URL,
    isInternalLink: isInternalLink as boolean,
    isAnchorLink: isAnchorLink as boolean,
  };
};

export default checkInternalLink;
