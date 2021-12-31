import React, { useState } from 'react';

import 'App.css';

import Button from 'components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App(): JSX.Element {
  const [productQuantity, setProductQuantity] = useState(0);
  const handleAddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setProductQuantity(productQuantity + 1)
  };
  const handleRemoveItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setProductQuantity(productQuantity - 1);
  }

  return (
    <div className="layout">
      <Header />
      <div className="content">
        <div className="product-page">
          <div className="product-page__picture">
            <img
              src="/assets/images/image-product-1.jpg"
              alt="product front"
            />
          </div>
          <div className="product-page__content">
            <div className="product-page__details">
              <div className="product-page__subtitle">
                Sneaker Company
              </div>
              <div className="product-page__title">
                Fall Limited Edition Sneakers
              </div>
              <p className="product-page__description">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the
                weather can offer.
              </p>
              <div className="product-page__price-section">
                <div className="product-page__current-price">
                  <div className="product-page__price">
                    $125.00
                  </div>
                  <div className="tag tag--primary">50%</div>
                </div>
                <div className="product-page__previous-price">
                  $250.00
                </div>
              </div>
            </div>
            <div className="product-page__actions">
              <form className="form form--vertical">
                <div className="input-group">
                  <Button
                    disabled={!productQuantity}
                    ghost
                    icon
                    onClick={handleRemoveItem}
                    primary
                  >
                    <span className="text--big">-</span>
                  </Button>
                  <input
                    className="input input--text-center input--compact input--bg-transparent input--text-big text--bold"
                    name="quantity"
                    value={productQuantity}
                  />
                  <Button ghost icon onClick={handleAddItem} primary>
                    <span className="text--big">+</span>
                  </Button>
                </div>
                <Button
                  disabled={!productQuantity}
                  primary
                  shadow
                  type="submit"
                >
                  Add to cart
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
     <Footer />
    </div>
  );
}

export default App;
