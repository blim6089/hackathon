import React from "react";

import Header from "./components/features/Layout/Header";
import Footer from "./components/features/Layout/Footer";
import SubscribeEmail from "./components/features/SubscribeEmail";
import Sponsors from "./components/features/Sponsors";
import Faqs from "./components/features/Faqs";

const App = () => {
  const faqs = [
    {
      title:
        "What are the differences between Youth and Big Data Expert tracks?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title: "Can a youth team participate in the Big Data Expert track?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title: "What about in-person and virtual participants?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title: "Do you cover expenses for in-person participation?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title:
        "Can we use our data tools? Can we use other open source datasets?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
    {
      title: "Do you have other communication channels, such as Slack?",
      content:
        "Besides the age group, the Big Data Expert track will be granted access to the UN Global Platform containing AIS (ships tracking movement), Ships register, and Comtrade datasets (please note that some other datasets may be added). To demonstrate their data skills, the big data teams must utilise those datasets in their projects/solutions. Further, the big data tracks are more competitive because the number of selected teams in the Big Data Expert track will be limited to around twenty.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <Faqs data={faqs} />
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
