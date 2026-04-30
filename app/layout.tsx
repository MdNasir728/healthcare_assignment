
import "./globals.css";
import Providers from "@/store/providers";
import { ReactNode } from "react";

export const metadata = {
  title: "Healthcare Dashboard",
  description: "B2B Healthcare SaaS Platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
