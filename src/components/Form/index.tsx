/* eslint-disable arrow-body-style */
import Container from 'basics/Container.styled';
import Section from 'basics/Section.styled';
import React, {
  type FC,
  // useEffect,
  // useState
} from 'react';
// import { useForm } from 'react-hook-form';

// import Text from 'atoms/Text/Text';
// import { color } from 'atoms/colors';

// import Button from 'components/Button/Button';
import {
  // Form,
  // Input,
  // NameGroup,
  // TextArea,
  // ThankYou,
  Wrapper,
} from 'components/Form/styles/Form.styled';
import ComponentHeading from 'components/Heading/ComponentHeading';

import type { DatoCmsComponentCallToAction } from 'graphqlTypes';

interface FormProps {}

// TODO: complete form interaction. SendGrid.

const ContactForm: FC<FormProps> = () => {
  // const [submitted, setSubmitted] = useState<boolean>(false);
  // const [formData, setFormData] = useState();

  // const {
  //   // control,
  //   // handleSubmit,
  //   // register,
  //   // formState: { isSubmitting, errors },
  //   // reset,
  // } = useForm({
  //   mode: 'all',
  // });

  // useEffect(() => {
  //   console.log('submitted', submitted);
  // }, [submitted]);

  return (
    <Section id='contact-me-form'>
      <Container>
        <Wrapper>
          <ComponentHeading
            heading='Contact Me'
            hTag='h2'
            desktopSize='headLg'
            subheading='Feel free to send me a message with comments or questions. Or just to say hi!'
            subheadingSize='textLg'
            subheadingWeight={400}
            alignment='center'
            ctas={[
              {
                link: 'https://www.linkedin.com/in/ericaleesnyder/',
                buttonType: 'Icon',
                icon: 'linkedIn',
              } as unknown as DatoCmsComponentCallToAction,
              {
                link: 'mailto:ericaleesnyder@gmail.com',
                label: 'My Email',
                size: 'Large',
                isDark: false,
              } as DatoCmsComponentCallToAction,
              {
                link: '#',
                label: 'My Resume',
                size: 'Large',
                isDark: false,
              } as DatoCmsComponentCallToAction,
              {
                link: 'https://github.com/ericaleesnyder',
                buttonType: 'Icon',
                icon: 'github',
              } as unknown as DatoCmsComponentCallToAction,
            ]}
          />
          {/* <Form>
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
                  fullWidth
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
          </Form> */}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default ContactForm;
