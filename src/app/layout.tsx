import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rodin = localFont({
  src: "../../public/fonts/RodinBokutoh.otf",
  variable: "--font-rodin",
});

const seurat = localFont({
  src: "../../public/fonts/Seurat.otf",
  variable: "--font-seurat",
});


import { PortalProvider } from "@/components/portal/PortalContext";
import { PortalContainer } from "@/components/portal/PortalContainer";

export const metadata: Metadata = {
  title: "Alex | Developer & Designer",
  description: "Personal portfolio of Alex, a developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rodin.variable} ${seurat.variable} antialiased`}
      >
        <PortalProvider>
          <PortalContainer>
            {children}
          </PortalContainer>
        </PortalProvider>
      </body>
    </html>
  );
}
