import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
