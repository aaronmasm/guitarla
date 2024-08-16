import {Dispatch} from "react";
import type {Guitar} from '../types';
import {CartActions} from "../reducers/cart-reducer";

export type GuitarProps = {
    guitar: Guitar;
    dispatch: Dispatch<CartActions>
};

// Functional component Guitar
export default function Guitar({guitar, dispatch}: GuitarProps) {
    // Destructuring guitar properties
    const {name, image, description, price} = guitar;

    return (
        // Guitar container
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            {/* Column for the image */}
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="guitar image"/>
            </div>
            {/* Column for the guitar information */}
            <div className="col-8">
                {/* Guitar name */}
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                {/* Guitar description */}
                <p>{description}</p>
                {/* Guitar price */}
                <p className="fw-black text-primary fs-3">${price}</p>
                {/* Button to add to cart */}
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => dispatch({
                        type: 'add-to-cart',
                        payload: {item: guitar}
                    })} // onClick event handler to add to cart
                >Add to Cart
                </button>
            </div>
        </div>
    );
}
