import React from 'react';
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.quantity}</h3>
      <p><em>{props.quantity}</em></p>
      <hr/>
    </React.Fragment>
  )
}

Product.proTypes = {
  names: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}
