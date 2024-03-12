import { FunctionComponent } from "react";
import ThreadsLogoFrame from "../components/ThreadsLogoFrame";
import HomeIndicatorFrame from "../components/HomeIndicatorFrame";
import TabFrame from "../components/TabFrame";

const InstaProfilePage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[40.6px_0px] tracking-[normal]">
      <div className="w-[188px] h-[84px] relative hidden z-[0]" />
      <section className="self-stretch flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
        <header className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-3.5 pb-3 pr-[14.5px] pl-[21.800000000000185px] box-border max-w-full gap-[20px] z-[1] text-center text-mini text-gray-100 font-sf-pro-text">
          <div className="h-11 w-[390px] relative hidden max-w-full" />
          <div className="w-14 relative tracking-[-0.3px] font-semibold inline-block shrink-0 z-[1]">
            9:41
          </div>
          <div className="w-[70.1px] flex flex-col items-start justify-start pt-[3.300000000000182px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[0px_6px]">
              <img
                className="h-[10.7px] w-[17.7px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/mobile-signal.svg"
              />
              <img
                className="h-[11px] w-[15.9px] relative min-h-[11px] z-[1]"
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
              <img
                className="h-[10.5px] w-[24.5px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/battery@2x.png"
              />
            </div>
          </div>
        </header>
        <ThreadsLogoFrame />
      </section>
      <img
        className="w-[130.6px] h-[0.3px] absolute !m-[0] bottom-[383.7px] left-[-2px] object-contain z-[1]"
        alt=""
      />
      <HomeIndicatorFrame />
      <TabFrame />
    </div>
  );
};

export default InstaProfilePage;
