import local from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MainStateSearchBar from "@/components/MainStateSearchBar/MainStateSearchBar";
import Watermark from "@/components/Watermark";

const airCereal = local({
  src: [
    { path: "./fonts/AirbnbCerealApp-Black.woff2", weight: "900" },
    { path: "./fonts/AirbnbCerealApp-ExtraBold.woff2", weight: "800" },
    { path: "./fonts/AirbnbCerealApp-Bold.woff2", weight: "700" },
    { path: "./fonts/hokrexMedium.woff2", weight: "500" },
    { path: "./fonts/AirbnbCerealWBk.woff2", weight: "400" },
  ],
});

const Ocrb = local({
  src: [{ path: "./fonts/OCRB.woff2" }],
  variable: "--font-ocrb",
});

export const metadata = {
  title: "Bookany.pk - Book Flights Easily",
  description:
    "Bookany.pk is your go-to platform for finding and booking flights to your desired destinations in Pakistan and beyond. Get the best deals, compare prices, and enjoy a hassle-free booking experience.",
  keywords: "flights, booking, Pakistan, travel, airfare, cheap flights",
  author: "Bookany.pk Team",
  openGraph: {
    title: "Bookany.pk - Book Flights Easily",
    description:
      "Find the best flight deals with Bookany.pk, the leading platform for booking flights in Pakistan.",
    url: "https://www.bookany.pk",
    type: "website",
  },
};

export default function RootLayout({ children, params }) {
  const { slug } = params;

  return (
    <html lang="en">
      <body className={airCereal.className + " " + Ocrb.variable}>
        <MainStateSearchBar>
          <Navbar slug={slug} />
          {children}
        </MainStateSearchBar>
        <Watermark />
      </body>
    </html>
  );
}
