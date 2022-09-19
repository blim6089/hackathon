import React from "react";

import Header from "./components/features/Layout/Header";
import Footer from "./components/features/Layout/Footer";
import SubscribeEmail from "./components/features/SubscribeEmail";
import Sponsors from "./components/features/Sponsors";
import Faqs from "./components/features/Faqs";
import UsefulResources from "./components/features/UsefulResources";
import Technologies from "./components/features/Technologies";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <Technologies />
      <UsefulResources />
      <Faqs />
      <div className="max-w-5xl mx-auto my-[150px]">
        <Sponsors />
      </div>
      <div className="max-w-5xl mx-auto mb-[72px]">
        <SubscribeEmail />
      </div>
      <Footer />
    </div>
  );
};

export default App;
