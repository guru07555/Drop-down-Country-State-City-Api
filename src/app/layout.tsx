import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CursorFollower from "@/components/ui/CursorFollower";

const display = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yello Early Learning — Where Little Minds Bloom",
  description:
    "A play-first preschool and day-care for children aged 1.5–6 years. Six campuses, Montessori-inspired learning hubs and a 98% parent happiness score.",
  keywords: ["preschool", "day-care", "early learning", "playgroup", "nursery", "kindergarten"],
  openGraph: {
    title: "Yello Early Learning — Where Little Minds Bloom",
    description:
      "A play-first preschool and day-care for children aged 1.5–6 years.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFC907",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScrollProvider>
          <CursorFollower />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
