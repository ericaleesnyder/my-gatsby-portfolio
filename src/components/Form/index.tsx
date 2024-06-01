import Container from 'basics/Container.styled';
import Section from 'basics/Section.styled';
import React, { type FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Text from 'atoms/Text/Text';
import { color } from 'atoms/colors';

import Button from 'components/Button/Button';
import {
  Form,
  Input,
  NameGroup,
  TextArea,
  ThankYou,
  Wrapper,
} from 'components/Form/styles/Form.styled';
import ComponentHeading from 'components/Heading/ComponentHeading';

import type { DatoCmsComponentCallToAction } from 'graphqlTypes';

interface FormProps {}

// TODO: complete form interaction. SendGrid.

const ContactForm: FC<FormProps> = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  // const [formData, setFormData] = useState();

  const {
    // control,
    // handleSubmit,
    register,
    // formState: { isSubmitting, errors },
    // reset,
  } = useForm({
    mode: 'all',
  });

  useEffect(() => {
    console.log('submitted', submitted);
  }, [submitted]);

  return (
    <Section id='contact-me-form'>
      <Container>
        <Wrapper>
          <ComponentHeading
            heading='Contact Me'
            hTag='h2'
            desktopSize='headLg'
            subheading="Shoot me a message any time with comments, questions, offers, or just to say hi. While I'm primarily interested in full-time employment, I'm open to opportunities of any kind."
            subheadingSize='textLg'
            subheadingWeight={400}
            ctas={[
              {
                link: '#',
                label: 'My Resume',
                size: 'Small',
                isDark: false,
              } as DatoCmsComponentCallToAction,
            ]}
          />
          <Form>
            {!submitted ? (
              <>
                <NameGroup>
                  <Input {...register('firstName')} placeholder='First Name' />
                  <Input {...register('lastName')} placeholder='Last Name' />
                </NameGroup>
                <Input {...register('email')} placeholder='Email' />
                <Input {...register('subject')} placeholder='Subject' />
                <TextArea {...register('message')} placeholder='Message' />
                <Button
                  hoverColor={color.blue}
                  size='Large'
                  isDark
                  onSubmit={() => setSubmitted(true)}
                >
                  Send Message
                </Button>
              </>
            ) : (
              <ThankYou>
                <Text size='text2xl'>Thank you for your submission!</Text>
                <Button
                  hoverColor={color.blue}
                  size='Small'
                  isDark
                  onSubmit={() => setSubmitted(false)}
                >
                  Back
                </Button>
              </ThankYou>
            )}
          </Form>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default ContactForm;
