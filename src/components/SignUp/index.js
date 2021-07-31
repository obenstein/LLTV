import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SignupElements';

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>lltv</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Contact Us</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Contact Number</FormLabel>
              <FormInput type='number' required />
              <FormLabel htmlFor='for'>Info</FormLabel>
              <FormInput type='text' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
