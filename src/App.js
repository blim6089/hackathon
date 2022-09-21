import React from "react";

import Header from "./components/features/Layout/Header";
import Footer from "./components/features/Layout/Footer";
import Register from "./components/features/Register";
import About from "./components/features/About";
import Timeline from "./components/features/Timeline";
import SubscribeEmail from "./components/features/SubscribeEmail";
import Sponsors from "./components/features/Sponsors";
import Certificate from "./components/features/Certificate";
import Technologies from "./components/features/Technologies";
import UsefulResources from "./components/features/UsefulResources";
import Faqs from "./components/features/Faqs";
import Competition from "./components/features/Competition";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <Register />
      <About />
      <Competition />
      <Certificate />
      <Timeline />
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
