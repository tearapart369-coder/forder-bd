import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const users = [
  {
    id: "1",
    username: "demo",
    email: "demo@forderbd.com",
    password: bcrypt.hashSync("demo123", 10),
    name: "Demo Seller",
  },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        const user = users.find((u) => u.username === credentials.username);
        if (!user) return null;
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.username = (user as any).username;
      return token;
    },
    async session({ session, token }) {
      if (session.user) (session.user as any).username = token.username;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "forder-bd-dev-secret-change-me",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
