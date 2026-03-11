import React from "react";
import "@/assets/styles/global.css";

export const metadata = {
  title: "proprety pluse - find the prefect rental",
  description: "find your dream property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
