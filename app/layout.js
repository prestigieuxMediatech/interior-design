import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";



export const metadata = {
  title: "Amar Interior",
  description: "Interrior Company in Kharghar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full `}
    >

   
      
      <body className=" h-screen ">
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
