import "./globals.css";
import type { Metadata } from "next";
import { WalletProviderWrapper } from "@/components/WalletProviderWrapper";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Solana Borrow Lending Protocol",
  description: "A high-performance UI for Solana Borrow Lending Protocol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-text-primary font-sans">
        <WalletProviderWrapper>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-6 pb-12">{children}</main>
            <footer className="bg-surface py-6 border-t border-border">
              <div className="container mx-auto px-4 text-center text-text-secondary">
                <p>
                  © 2025 Solana Borrow Lending Protocol. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </WalletProviderWrapper>
      </body>
    </html>
  );
}
