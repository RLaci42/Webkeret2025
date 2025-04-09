export interface User {
    name: {
        lastName: string | null;
        firstName: string | null;
    };
    email: string;
    password: string;
    phone: number | null;
    address: {
        postalCode: number | null;
        city: string | null;
        street: string | null;
        number: number | null;
    }
}