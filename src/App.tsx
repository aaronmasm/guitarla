import {useEffect, useReducer} from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import {cartReducer, initialState} from "./reducers/cart-reducer";

function App() {
    // Initialize state using useReducer hook with cartReducer and initialState
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Sync cart state with localStorage whenever state.cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <>
            {/* Header component with "cart" prop containing the cart items */}
            <Header
                cart={state.cart}
                dispatch={dispatch}
            />

            {/* Main container */}
            <main className="container-xl mt-5">
                <h2 className="text-center">Our Collection</h2>

                {/* Guitar items container */}
                <div className="row mt-5">
                    {/* Map over data and render the Guitar component for each item */}
                    {state.data.map((guitar) => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            dispatch={dispatch} // Dispatch action to add item to cart
                        />
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - All rights reserved</p>
                </div>
            </footer>
        </>
    );
}

export default App;
