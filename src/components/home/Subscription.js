import React, { Component } from 'react';
import styled from 'styled-components';
import { SubHeading } from 'shared/styled';
import tw from 'tailwind.macro';
import { sm } from 'shared/responsive';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';

const Container = styled.section`
  ${tw`pt-20`};
  ${sm`padding-bottom: 200px;`};
  padding-bottom: 120px;
`;

const Wrapper = styled.div`
  max-width: 456px;
  margin: auto;
  text-align: center;
`;

const Button = styled.button`
  padding: 12px 40px;
  display: inline-block;
  ${tw`mt-10`};
  ${props => `
    background-color: ${props.theme.button.primary.background};
    color: ${props.theme.button.primary.foreground};
  `}
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  margin-bottom: 18px;
  ${props => `
  background-color: ${props.theme.main.background};
  border: 1px solid ${props.theme.main.border};
  outline:none;
  &:focus{
    border-color: ${props.theme.main.primary};
  }
  `}
`;

const ErrorMessage = styled.p`
  ${tw`text-sm`};
  text-align: left;
  margin-bottom: 18px;
  margin-top: -10px;
  color: ${props => props.theme.error.foreground};
`;

class Subscription extends Component {
  state = {
    email: '',
    github: '',
    errors: {
      email: '',
      github: ''
    }
  };

  validate(state) {
    let errors = {};

    if (!state.email) {
      errors.email = 'Required';
    } else if (!isEmail(state.email)) {
      errors.email = 'Invalid email format';
    }

    if (state.github && !isURL(state.github)) {
      errors.github = 'Invalid link';
    }
    return errors;
  }

  hasError = errors => {
    const keys = Object.keys(errors);

    for (let k of keys) {
      if (errors[k] !== '') {
        return true;
      }
    }

    return false;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ errors: {} });
    const errors = this.validate(this.state);
    if (this.hasError(errors)) {
      this.setState({ errors });
      return;
    }
  };

  handleChange = e => {
    const name = e.target.getAttribute('name');
    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <Container id="subscription">
        <div className="container px-gutter mx-auto">
          <Wrapper>
            <div className="mb-16 text-center">
              <SubHeading>
                Để đăng kí nhận thông tin tuyển dụng và sự kiện.
              </SubHeading>
            </div>

            <form onSubmit={this.handleSubmit}>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={this.handleChange}
              />
              {this.state.errors.email && (
                <ErrorMessage>{this.state.errors.email}</ErrorMessage>
              )}
              <Input
                onChange={this.handleChange}
                name="github"
                type="text"
                placeholder="Enter your Github URL"
              />
              {this.state.errors.github && (
                <ErrorMessage>{this.state.errors.github}</ErrorMessage>
              )}
              <Button type="submit">Submit</Button>
            </form>
          </Wrapper>

          <div className="flex flex-wrap -mx-gutter" />
        </div>
      </Container>
    );
  }
}

export default Subscription;
