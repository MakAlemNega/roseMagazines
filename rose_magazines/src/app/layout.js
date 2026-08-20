import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Rose Magazines | Where Memories Blossom into Stories",
  description:
    "Rose Magazines creates beautifully designed custom magazines and keepsakes for life's most meaningful moments. We have custom magazines and keepsakes that turn your most precious moments into lasting treasures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
