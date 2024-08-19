import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clip-Book",
  description: "Create Connection with Wordpress CMS",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className=" ">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
