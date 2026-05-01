
import AppInitializer from "@/components/common/AppInitializer";
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
        <AppInitializer />
        <Providers>{children}</Providers>
        {/* <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#1e293b",
                color: "#fff",
                border: "1px solid #334155",
              },
            }}
          /> */}

      </body>
    </html>
  );
}
