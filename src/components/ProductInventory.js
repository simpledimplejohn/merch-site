import React from 'react';
import Product from "./Ticket";
import PropTypes from "prop-types";

function ProductList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.productList.map((product, index) =>
        <Product names={product.names}
          description={product.description}
          quantity={product.quantity}
          key={index}/>
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array
};

export default ProductList;