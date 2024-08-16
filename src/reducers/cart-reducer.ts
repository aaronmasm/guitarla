import {CartItem, Guitar} from "../types";
import {db} from "../data/db";

// Action types for managing the cart state in the reducer
// - 'add-to-cart': Adds a new item to the cart
// - 'remove-from-cart': Removes an item from the cart by ID
// - 'decrease-quantity': Decreases the quantity of an item in the cart by ID
// - 'increase-quantity': Increases the quantity of an item in the cart by ID
// - 'clear-cart': Clears all items from the cart
export type CartActions =
    { type: 'add-to-cart'; payload: { item: Guitar }; } |
    { type: 'remove-from-cart'; payload: { id: Guitar['id'] }; } |
    { type: 'decrease-quantity'; payload: { id: Guitar['id'] }; } |
    { type: 'increase-quantity'; payload: { id: Guitar['id'] }; } |
    { type: 'clear-cart' };

// State structure for the cart
export type CartState = {
    data: Guitar[];
    cart: CartItem[];
};

// Function to initialize the cart state from local storage
const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
};

// Initial state for the cart and data
export const initialState: CartState = {
    data: db,
    cart: initialCart()
};

// Constants for minimum and maximum item quantities
const MIN_ITEMS: number = 1;
const MAX_ITEMS: number = 5;

// Reducer function to manage the cart state
export const cartReducer = (
    state: CartState = initialState,
    actions: CartActions
) => {

    // Handle 'add-to-cart' action
    if (actions.type === 'add-to-cart') {
        // Check if the item already exists in the cart
        const itemExists = state.cart.find(guitar => guitar.id === actions.payload.item.id);

        let cart: CartItem[];
        if (itemExists) { // If it exists in the cart
            cart = state.cart.map(item => {
                if (item.id === actions.payload.item.id) {
                    if (item.quantity < MAX_ITEMS) {
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                } else {
                    return item;
                }
            });
        } else { // If it doesn't exist in the cart
            const newItem: CartItem = {...actions.payload.item, quantity: 1};
            cart = [...state.cart, newItem];
        }

        return {
            ...state,
            cart
        };
    }

    // Handle 'remove-from-cart' action
    if (actions.type === 'remove-from-cart') {
        const cart = state.cart.filter(item => item.id !== actions.payload.id);

        return {
            ...state,
            cart
        };
    }

    // Handle 'decrease-quantity' action
    if (actions.type === 'decrease-quantity') {
        const cart = state.cart.map(item => {
            if (item.id === actions.payload.id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });

        return {
            ...state,
            cart
        };
    }

    // Handle 'increase-quantity' action
    if (actions.type === 'increase-quantity') {
        const cart = state.cart.map(item => {
            if (item.id === actions.payload.id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });

        return {
            ...state,
            cart
        };
    }

    // Handle 'clear-cart' action
    if (actions.type === 'clear-cart') {
        return {
            ...state,
            cart: []
        };
    }

    // Return current state if an action type is not recognized
    return state;
}
