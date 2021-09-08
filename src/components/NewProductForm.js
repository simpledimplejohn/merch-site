import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function newProductForm(props) {
  function handleNewProductSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      names: event.target.names.value,
      description: event.target.location.value,
      quantity: event.target.location.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <form onSubmit={handleNewProductSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Product Name' />
        <textarea
          name='description'
          placeholder='Product Description' />
        <button types='submit'>Enter Product</button>
      </form>
    </React.Fragment>
  );
}

newProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default newProductForm;
