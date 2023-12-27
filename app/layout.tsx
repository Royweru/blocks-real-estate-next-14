import type { Metadata } from "next";
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/main-navbar";
import ModalProvider from "@/components/providers/modal-provider";
import { CreateListingModal } from "@/components/modals/create-listing-modal";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blocks",
  description: "Get a place you can call your home",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const user = await currentUser()
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
         <ModalProvider />
          <Navbar user={user} />
          <div className=" w-full h-full">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
