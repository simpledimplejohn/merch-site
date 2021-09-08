import React from 'react';
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}

Product.proTypes = {
  names: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}
