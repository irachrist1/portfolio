import "../global.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Christian Tonny - Software Engineer & Writer",
    template: "%s | Christian Tonny",
  },
  description: "Software engineer writing about AI, technology trends, and building products. Working on IT infrastructure and AI implementation at Andersen Rwanda. Based in Kigali.",
  metadataBase: new URL("https://christiantonny.dev"),
  openGraph: {
    title: "Christian Tonny - Software Engineer & Writer",
    description: "Software engineer writing about AI, technology trends, and building products that transform how we interact with information.",
    url: "https://christiantonny.dev",
    siteName: "Christian Tonny",
    images: [
      {
        url: "/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Christian Tonny - Software Engineer & Writer",
    card: "summary_large_image",
    images: ["/og.png"],
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[inter.variable, calSans.variable].join(" ")}
      suppressHydrationWarning
    >
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
