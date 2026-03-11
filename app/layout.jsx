import React from "react";
import "@/assets/styles/global.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "proprety pluse - find the prefect rental",
  description: "find your dream property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
