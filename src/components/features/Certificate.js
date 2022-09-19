import React from "react";
import CertificateIcon from "../../assets/certificate.png";
import Shadow from "../../assets/shadows/4.png";
import Misc from "../../assets/misc/3.svg";

const Certificate = () => {
  return (
    <div className="relative mb-[150px]">
      <div className="max-w-container mx-auto flex relative z-10">
        <div className="flex flex-col justify-between flex-shrink-0 pr-16">
          <div>
            <p className="uppercase font-semibold text-sm text-warning mb-8">
              Certificates
            </p>
            <p className="font-semibold text-[40px] leading-tight text-dark">
              Prizes
            </p>
          </div>
          <img src={CertificateIcon} className="-ml-10" alt=":( Not Found" />
        </div>
        <div className="flex flex-col relative">
          <img
            src={Misc}
            className="absolute -translate-x-full -translate-y-full"
            alt=":( Not Found"
          />
          <p className="w-full max-w-[712px] font-semibold text-5xl text-dark uppercase mb-12">
            The winning teams will{" "}
            <span className="text-warning">present their work</span> at the UN
            World Data Forum in Hangzhou, China in 2023 and receive{" "}
            <span className="text-warning">certificates and rewards</span>.
          </p>
          <div className="relative bg-white rounded-3xl text-xl text-dark leading-normal px-11 py-8">
            <span className="absolute left-8">*</span>
            <p className="mb-[18px]">
              Certificates will be provided for all participants in both tracks
              and special mentions will be made for teams based on different
              categories.
            </p>
            <p>Other exciting prizes to be announced soon.</p>
          </div>
        </div>
      </div>
      <img src={Shadow} className="absolute top-1/2 right-0 -translate-y-1/2" alt=":( Not Found" />
    </div>
  );
};

export default Certificate;
