import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";




export const options: NextAuthOptions = ({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                try {
                    const res = await fetch("https://a2sv-backend.onrender.com/api/auth/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    });

                    const user = await res.json();

                    if (user) {
                     
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error("Error during authentication:", error);
                    return null;
                }
            },
        }),
       
    ],
    callbacks:{
        async jwt({token, user}){
            return { ...token,...user}
        },
        async session({session, token}){
            session.user = token as any
            return session
        }
    },
   
    pages: {
        signIn: "/auth/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
      },
});

export default NextAuth(options);
