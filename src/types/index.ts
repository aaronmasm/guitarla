// Type definition for a Guitar
export type Guitar = {
    id: number;             // Unique identifier for the guitar
    name: string;           // Name of the guitar
    image: string;          // URL of the guitar image
    description: string;    // Description of the guitar
    price: number;          // Price of the guitar
};

// Type definition for a CartItem, which extends the Guitar type
export type CartItem = Guitar & {
    quantity: number;       // Quantity of this item in the cart
};
