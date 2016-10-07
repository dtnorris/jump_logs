import React, { Component } from 'react';
import { Field } from 'redux-form';

const JumpForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Location</label>
      <div>
        <Field name="location" component="input" type="text" placeholder="Location" />
      </div>

      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default JumpForm;
