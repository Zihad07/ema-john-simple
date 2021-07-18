import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
	const { name, img, seller, price, stock, key } = props.product;
	const { handleAddProduct, showAddCart } = props;
	return (
		<div className="product">
			<div className="product-img">
				<img src={img} alt="" />
			</div>
			<div className="product-description">
				<h3 className="product-name">
					<Link to={"/product/" + key}>{name}</Link>
				</h3>
				<br />
				<p>
					<small>by: {seller}</small>
				</p>
				<p>${price}</p>
				<p>
					<small>Only {stock} left in stack -Order soon.</small>
				</p>

				{showAddCart && (
					<button
						className="main-btn"
						onClick={() => handleAddProduct(props.product)}
					>
						<FontAwesomeIcon icon={faShoppingCart} size="lg" /> add to cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Product;
