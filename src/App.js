import React from "react";

import Header from "./components/features/Layout/Header";
import Footer from "./components/features/Layout/Footer";
import SubscribeEmail from "./components/features/SubscribeEmail";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <div className="max-w-5xl mx-auto mb-[72px]">
        <SubscribeEmail />
      </div>
      <Footer />
    </div>
  );
};

export default App;
