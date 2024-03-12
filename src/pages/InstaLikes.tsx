import { FunctionComponent } from "react";
import FollowRequestGroup from "../components/FollowRequestGroup";
import ReelsIconsFrame from "../components/ReelsIconsFrame";
import EmptySlot from "../components/EmptySlot";

const InstaLikes: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[6px_0px] tracking-[normal]">
      <header className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5.199999999999818px] box-border max-w-full text-center text-mini text-gray-100 font-sf-pro-text">
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-between pt-3.5 pb-3 pr-[14.5px] pl-[21.800000000000185px] box-border max-w-full gap-[20px]">
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
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start gap-[17px_0px] max-w-full shrink-0 text-center text-base text-black font-segoe-ui">
          <div className="w-[87.7px] h-[12.2px] flex flex-row items-start justify-start relative">
            <img
              className="h-[45px] w-[46px] absolute !m-[0] top-[-17px] left-[-57.6px] z-[2]"
              loading="lazy"
              alt=""
              src="/frame-72.svg"
            />
            <div className="w-[124px] flex flex-row items-start justify-start pt-0 pb-[11px] pr-0 pl-[34px] box-border">
              <div className="flex-1 relative tracking-[-0.3px] font-semibold">
                Notifications
              </div>
            </div>
          </div>
          <FollowRequestGroup />
          <ReelsIconsFrame />
        </section>
      </main>
      <EmptySlot />
    </div>
  );
};

export default InstaLikes;
