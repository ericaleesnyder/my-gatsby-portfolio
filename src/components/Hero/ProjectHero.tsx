import Container from 'basics/Container.styled';
import Section from 'basics/Section.styled';
import React, { type FC } from 'react';

import Heading from 'atoms/Text/Heading';
import Text from 'atoms/Text/Text';

import Button from 'components/Button/Button';
import {
  ContentWrap,
  FrameworkWrap,
  Group,
  Icon,
  ImageWrap,
  LinkGroup,
  Right,
  Wrap,
} from 'components/Hero/styles/ProjectHeroStyled';
import OptimizedImage from 'components/Image';

import type { DatoCmsComponentImage } from 'graphqlTypes';

interface ProjectHeroProps {
  title?: string | null;
  featuredImage?: DatoCmsComponentImage | null;
  blurb?: string | null;
  framework?: string | null;
  year?: string | null;
  role?: string | null;
  cms?: string | null;
  link?: string | null;
  github?: string | null;
}

const ProjectHero: FC<ProjectHeroProps> = ({
  title,
  featuredImage,
  blurb,
  framework,
  year,
  role,
  cms,
  link,
  github,
}) => {
  const fetchFramework = () => {
    switch (framework) {
      case 'Gatsby':
        return (
          <svg aria-label='Gatsby'>
            <use href='/icons/sprites.svg#gatsby' />
          </svg>
        );
      case 'Next.js':
        return (
          <svg aria-label='Next.js'>
            <use href='/icons/sprites.svg#next' />
          </svg>
        );
      default:
        return null;
    }
  };

  const fetchCms = () => {
    switch (cms) {
      case 'DatoCMS':
        return (
          <svg aria-label='Dato CMS'>
            <use href='/icons/sprites.svg#dato' />
          </svg>
        );
      case 'Contentful':
        return (
          <svg aria-label='Contentful'>
            <use href='/icons/sprites.svg#contentful' />
          </svg>
        );
      case 'Builder.io':
        return <img src='/images/builder.png' alt='Builder.io' />;
      default:
        return null;
    }
  };

  return (
    <Section
      desktopBottomPadding='16'
      tabletBottomPadding='16'
      mobileBottomPadding='16'
    >
      <Container>
        <Wrap>
          <ImageWrap>
            <OptimizedImage
              image={featuredImage?.desktopImage?.gatsbyImageData}
              src={featuredImage?.desktopImage?.url}
              alt={featuredImage?.alt ?? ''}
              loading='eager'
            />
          </ImageWrap>
          <ContentWrap>
            <Group>
              {title && <Heading hTag='h1'>{title}</Heading>}
              {blurb && <Text>{blurb}</Text>}
              <LinkGroup>
                {github && (
                  <Button to={github} buttonType='Icon'>
                    <svg>
                      <use href='/icons/sprites.svg#github' />
                    </svg>
                  </Button>
                )}
                {link && (
                  <Button to={link} buttonType='Text'>
                    View Site
                  </Button>
                )}
              </LinkGroup>
            </Group>
            <Right>
              {role && (
                <Group>
                  <Text size='textXl' weight={800}>
                    Role
                  </Text>
                  <Text size='textLg'>{role}</Text>
                </Group>
              )}
              {year && (
                <Group>
                  <Text size='textXl' weight={800}>
                    Year
                  </Text>
                  <Text size='textLg'>{year}</Text>
                </Group>
              )}
              {(framework || cms) && (
                <Group>
                  <Text size='textXl' weight={800}>
                    Tech Stack
                  </Text>
                  <FrameworkWrap>
                    {framework && fetchFramework()}
                    {cms && fetchCms()}
                  </FrameworkWrap>
                </Group>
              )}
            </Right>
          </ContentWrap>
        </Wrap>
      </Container>
      <Container flex>
        <Icon>
          <use href='/icons/sprites.svg#filler' />
        </Icon>
      </Container>
    </Section>
  );
};

export default ProjectHero;
