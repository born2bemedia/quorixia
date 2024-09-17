import { Urbanist } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/global_components/Header";
import Footer from "@/global_components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { PopupsProvider } from "@/context/PopupsContext";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Quorixia",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <AuthProvider>
          <CartProvider>
            <PopupsProvider>
              <Header />
              <main className="site">{children}</main>
              <Footer />
            </PopupsProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
