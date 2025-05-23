import { Urbanist } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/global_components/Header";
import Footer from "@/global_components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { PopupsProvider } from "@/context/PopupsContext";
import Preloader from "@/global_components/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import CookiePopup from "@/global_components/CookiePopup/CookiePopup";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Personalized HR & Employment Services | Quorixia",
    template: "%s",
  },
  description:
    "Quorixia offers tailored HR and employment solutions designed to support your career growth. Explore our comprehensive services for personalised career guidance.",
  openGraph: {
    title: {
      default: "Personalized HR & Employment Services | Quorixia",
      template: "%s | Spectrum Consults",
    },
    description:
      "Quorixia offers tailored HR and employment solutions designed to support your career growth. Explore our comprehensive services for personalised career guidance.",
    images: "https://quorixia.com/images/meta.png",
  },
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang="en">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={urbanist.className}>
          <GoogleAnalytics gaId="G-7HK6J8ENSS" />
          <AuthProvider>
            <CartProvider>
              <PopupsProvider>
                <Preloader />
                <Header />
                <main className="site">{children}</main>
                <Footer />
              </PopupsProvider>
            </CartProvider>
          </AuthProvider>
          <CookiePopup />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
