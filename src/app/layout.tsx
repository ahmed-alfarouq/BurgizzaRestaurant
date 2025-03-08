import "./globals.css";
import Head from "next/head";

import StoreProvider from "@/providers/StoreProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: {
    default: "Burgizza",
    template: "Burgizza | %s",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body>
        <StoreProvider>
          <SessionProvider>
            <Navbar loggedIn={!!session?.user} />
            {children}
            <Footer />
          </SessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
