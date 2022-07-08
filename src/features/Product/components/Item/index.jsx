import React from 'react'
import Rating from '~/components/Rating';
const Item = ({data}) => {
  return (
    <div className="item">
      <div className="item-list">
        {data.map((product) => (
          <div key={product._id} className="item-content">
            <div className="item-thumb">
              <img src={product.image} alt="product" />
            </div>
            <div className="item-info">
              <h3 className="product-title">{product.name}</h3>
              <div>
                <Rating value={product.rating} />
              </div>
              <div className="item-price">
                <p className="item-discount">
                  {product.discount ? <span>-{product.discount}% </span> : ""}{" "}
                </p>
                <p>
                  <span className="item-saleprice">
                    <sup className="item-symbol">{product.sympol}</sup>
                    {product.salePrice}
                    <sup className="item-subprice">{product.subPrice}</sup>
                  </span>
                </p>
                <p>
                  {product.originalPrice ? (
                    <span className="item-original">
                      {product.sympol}
                      {product.originalPrice}.{product.subPrice}
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item