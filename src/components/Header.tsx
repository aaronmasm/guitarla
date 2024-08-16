import {Dispatch, useMemo} from "react";
import type {CartItem} from "../types";
import {CartActions} from "../reducers/cart-reducer";

type HeaderProps = {
    cart: CartItem[];
    dispatch: Dispatch<CartActions>;
}

export default function Header({cart, dispatch}: HeaderProps) {

    // Derived state to check if the cart is empty
    const isEmpty = useMemo(() => cart.length === 0, [cart]);

    // Derived state to calculate the total price of items in the cart
    const cartTotal = useMemo(() => cart.reduce((total, item) =>
        total + (item.quantity * item.price), 0), [cart]);

    return (
        <>
            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="/index.html">
                                <img className="img-fluid" src="/img/logo.svg" alt="logo image"/>
                            </a>
                        </div>
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div className="cart">
                                <img className="img-fluid" src="/img/cart.png" alt="cart image"/>

                                <div id="cart" className="bg-white p-3">
                                    {/* Conditional rendering based on whether the cart is empty */}
                                    {isEmpty ? (
                                        <p className="text-center">The cart is empty</p>
                                    ) : (
                                        <>
                                            {/* Table to display cart items */}
                                            <table className="w-100 table">
                                                <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {cart.map(guitar => (
                                                    <tr key={guitar.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`/img/${guitar.image}.jpg`}
                                                                 alt={`Guitar ${guitar.name}`}/>
                                                        </td>
                                                        <td>{guitar.name}</td>
                                                        <td className="fw-bold">
                                                            ${guitar.price}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            {/* Button to decrease quantity of item */}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => dispatch({
                                                                    type: 'decrease-quantity',
                                                                    payload: {id: guitar.id}
                                                                })}
                                                            >
                                                                -
                                                            </button>
                                                            {guitar.quantity}
                                                            {/* Button to increase quantity of item */}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => dispatch({
                                                                    type: 'increase-quantity',
                                                                    payload: {id: guitar.id}
                                                                })}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            {/* Button to remove item from cart */}
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => dispatch({
                                                                    type: 'remove-from-cart',
                                                                    payload: {id: guitar.id}
                                                                })}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            <p className="text-end">Total to pay: <span
                                                className="fw-bold">${cartTotal}</span>
                                            </p>
                                        </>
                                    )}
                                    {/* Button to clear the cart */}
                                    <button
                                        className="btn btn-dark w-100 mt-3 p-2"
                                        onClick={() => dispatch({type: 'clear-cart'})}
                                    >Clear Cart
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
