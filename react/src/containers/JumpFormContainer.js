import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import JumpForm from './../components/JumpForm';

const onSubmit = (values) => {
  let body = JSON.stringify({
    jump: {
      location: values.location
    }
  });
  return fetch(`http://localhost:3000/api/v1/jumps`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  })
  .then(response => {
    console.log(response.status);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
}

export default reduxForm({
  form: 'jumpForm',
  onSubmit
})(JumpForm);
