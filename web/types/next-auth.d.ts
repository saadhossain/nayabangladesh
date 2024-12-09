import 'next-auth';

declare module 'next-auth' {
    interface User {
        _id?: string;
        email?: string;
        name?: string;
        password?: string;
        image?: string;
        role?: string;
        location?: string
    }
    interface Session {
        user: {
            _id?: string | any;
            email?: string | any;
            name?: string | any;
            password?: string | any;
            image?: string | any;
            role?: string | any;
            location?: string
        }
    } DefaultSession['user']
}