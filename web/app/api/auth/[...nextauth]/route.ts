import { getUserByEmail, getUserByID } from '@/app/utils/apis';
import { compare } from 'bcrypt';
import NextAuth, { Session, TokenSet, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


//Initiate the authOptions
const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login',
        newUser: '/register',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                try {
                    if (!credentials?.email || !credentials.password) {
                        throw new Error('Credentials not found');
                    }
                    // Find the user from the Database
                    const user = await getUserByEmail(credentials?.email);
                    if (!user) {
                        throw new Error('You are not registered. Please Signup')
                    }

                    // Compare the password to verify
                    const isPasswordValid = await compare(credentials?.password as any, user.password);
                    //If the password isn't valid then return the error
                    if (!isPasswordValid) {
                        throw new Error('Wrong email or password entered.')
                    }
                    //If password valid the return the user data.
                    if (isPasswordValid) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    throw error;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: TokenSet, user: User }) {
            if (user) {
                token._id = user._id?.toString();
                token.email = user.email;
                token.name = user.name;
                token.password = user.password;
                token.image = user.image;
                token.role = user.role;
                token.location = user.location
            }
            return token;
        },
        async session({ session, token }: { session: Session, token: TokenSet }) {
            //Get user from server by ID
            const user = await getUserByID(token?._id);
            if (user) {
                session.user = {
                    _id: user._id?.toString(),
                    email: user.email,
                    name: user.name,
                    password: user.password,
                    image: user.image,
                    role: user.role,
                    location: user.location
                };
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };

