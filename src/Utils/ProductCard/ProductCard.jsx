// src/Utils/ProductCard/ProductCard.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Utils/Redux/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);

  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
      toast.success('Added To Cart');
    } else {
      navigate('/cart');
    }
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="box">
        <div className="img-box">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-box">
          <h5>{product.name}</h5>
          <h5>${product.price}</h5>
        </div>
        <div className="detail-box">
          <h6>size: {product.size}</h6>
          <h6>color: {product.color}</h6>
        </div>
        <div className="mt-3" style={{ width: '100%', padding: '0 15px' }}>
          <Button
            variant="danger"
            style={{ width: '100%', backgroundColor: '#F7444E', borderColor: '#F7444E' }}
            onClick={handleAddToCart}
          >
            {isInCart ? 'Already Added' : 'Add To Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
