import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';


class RegisterFormContainer extends Component {
  onSubmit = values => {
    console.log('values', values);
  };

  getInitialValues = () => {
    return {
      name: 'first name',
      preference: 'spaces',
      newsletter: true,
    }
  };

  render() {
    return (
      <RegisterForm onSubmit={this.onSubmit}
        initialValues={this.getInitialValues()}
      />
    );
  }
}

export default RegisterFormContainer;
