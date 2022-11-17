import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const body = JSON.stringify(credentials);
        console.log("body", body);
        const res = await axios.post("http://localhost:3000/api/auth/signin", {
          email,
          password,
        });
        console.log(res.data);
        if (res) {
          return res.data;
        } else console.log(res);
      },
    }),
  ],
  pages: {
    newUser: "/auth/admin-loggin",
  },
  callbacks: {
    jwt(params) {
      return params.token;
    },
  },
  debug: false,
};
export default NextAuth(authOptions);
