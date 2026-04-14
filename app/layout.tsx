import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdminLayout from "@/components/AdminLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EarnX Admin Dashboard",
  description: "Secure Admin Panel for EarnX PTC App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
