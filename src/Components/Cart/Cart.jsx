// src/Components/Cart/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../Utils/Redux/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/product');
  };

  if (cart.length === 0) {
    return (
      <section className="empty-cart-section">
        <div className="container">
          <div className="empty-cart-content">
            <h3>Cart is empty</h3>
            <button
              className="btn btn-danger"
              onClick={handleStartShopping}
            >
              Start Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Shopping Cart</h3>
            </div>

            {cart.map((product, index) => (
              <div className="card rounded-3 mb-4" key={index}>
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={product.image}
                        className="img-fluid rounded-3"
                        alt={product.name}
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">{product.name}</p>
                      <p>
                        <span className="text-muted">Size: </span>{product.size}{" "}
                        <span className="text-muted">Color: </span>{product.color}
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value={product.quantity}
                        type="number"
                        className="form-control form-control-sm"
                        readOnly
                      />

                      <button
                        className="btn btn-link px-2"
                        onClick={() => dispatch(incrementQuantity(product.id))}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 text-end">
                      <h5 className="mb-0">${product.price * product.quantity}.00</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger" onClick={() => dispatch(removeFromCart(product.id))}>
                        <FontAwesomeIcon icon={faTrash} className="fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-column flex-md-row">
                <div className="form-outline flex-fill mb-3 mb-md-0">
                  <input
                    type="text"
                    id="form1"
                    className="form-control form-control-lg"
                    placeholder="Discount Coupon"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg ms-md-3 ml-3"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-warning btn-block btn-lg"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
