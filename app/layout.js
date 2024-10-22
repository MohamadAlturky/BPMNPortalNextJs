import "./globals.css";
import Header from "@/components/nav/Header";
import Links from "@/components/nav/Links";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html>
      <body>
        <Header></Header>
        <Links></Links>


        {children}

      </body>
    </html>
  );
}
