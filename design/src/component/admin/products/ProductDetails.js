import React, { Fragment, useEffect, useState } from "react";
//import Carousel from "react-material-ui-carousel";
//import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
} from "../../actions/productAction";
// ReviewCard from "./ReviewCard.js";
import Loader from "../../layout/Loader";
import { useAlert } from "react-alert";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

import Slidebar from '../../Slidebar/Slidebar';

const ProductDetails = ({ match }) => {


    const dispatch = useDispatch();
    const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  
  

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);
  return (
  
      
      <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
        
          <div className="ProductDetails">
            <div>
            
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
             
            </div>

            <div>
             
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
             
             
              
            
                <h1>{`৳ ${product.price}`}</h1>
               
               
                  
                
             
                Description : <p>{product.description}</p>
              </div>

              
         </div>
          
         
        </Fragment>
      )}
    </Fragment>
  )
}

export default ProductDetails;
