import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIOR MAISON — L'Art de Vivre",
  description:
    "The house's ateliers turn from silhouette to seat, from hemline to hearth. Furniture, dressed by Dior.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bone text-ebony">
        {children}
      </body>
    </html>
  );
}
