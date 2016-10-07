import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import JumpForm from './../components/JumpForm';

const validate = (fields) => {
  console.log('validating: ' + fields);
}

const handleSubmit = (values) => {
  console.log(values);
}

export default reduxForm({
  form: 'jumpForm',
  handleSubmit
})(JumpForm);
