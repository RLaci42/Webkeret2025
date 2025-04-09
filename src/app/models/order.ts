import { CartItem } from "./cart-item";

export interface Order {
    orderNumber: string,
    placedByUser: string,
    cartItems: CartItem[];
    shippingDetails: {
        name: {
            lastName: string;
            firstName: string;
        },
        email: string;
        phone: number;
        address: {
            postalCode: number,
            city: string,
            street: string,
            number: number
        }
    }
}