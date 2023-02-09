import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import firebase from "firebase";
import { initializeFirebaseApp } from "@/lib/firebase/firebase";
import { AuthProvider } from "@/feature/auth/provider/AuthProvider";
import { Header } from "@/components/header";

initializeFirebaseApp();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
