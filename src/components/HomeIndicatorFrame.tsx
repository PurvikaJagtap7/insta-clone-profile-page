import { FunctionComponent } from "react";

const HomeIndicatorFrame: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 pb-[12.400000000000093px] pr-0 pl-[62px] box-border gap-[15.5px_0px] max-w-full">
      <div className="w-[281.5px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px]">
        <img
          className="h-[22.5px] w-[22.5px] relative object-cover min-h-[23px]"
          loading="lazy"
          alt=""
          src="/grid-icon@2x.png"
        />
        <img
          className="h-[22.5px] w-[22.5px] relative overflow-hidden shrink-0 min-h-[23px]"
          loading="lazy"
          alt=""
          src="/iconsreels.svg"
        />
        <img
          className="h-[22.5px] w-[22.5px] relative object-cover min-h-[23px]"
          loading="lazy"
          alt=""
          src="/tags-icon@2x.png"
        />
      </div>
      <div className="ml-[-64px] w-[392px] flex flex-col items-end justify-start gap-[3px_0px] max-w-[120%] shrink-0">
        <img
          className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
        />
        <div className="self-stretch h-[259px] flex flex-row flex-wrap items-start justify-start relative gap-[3px_1px]">
          <div className="w-32 !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-end pt-[5px] px-[5px] pb-[103px] box-border gap-[0px_10px] bg-[url('/public/rectangle-2@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-32 w-32 relative object-cover hidden"
              alt=""
              src="/rectangle-2@2x.png"
            />
            <input
              className="m-0 h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
              type="checkbox"
            />
          </div>
          <div className="w-32 !m-[0] absolute top-[0px] left-[131px] flex flex-row items-start justify-end pt-1 px-[3px] pb-[104px] box-border gap-[0px_10px] bg-[url('/public/rectangle-3@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-32 w-32 relative object-cover hidden"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <input
              className="m-0 h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
              type="checkbox"
            />
          </div>
          <div className="w-32 !m-[0] absolute top-[0px] left-[262px] flex flex-row items-start justify-end pt-1 px-[3px] pb-[104px] box-border gap-[0px_10px] bg-[url('/public/rectangle-4@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-32 w-32 relative object-cover hidden"
              alt=""
              src="/rectangle-4@2x.png"
            />
            <input
              className="m-0 h-5 w-5 relative overflow-hidden shrink-0 z-[1]"
              type="checkbox"
            />
          </div>
          <img
            className="h-32 w-32 absolute !m-[0] top-[131px] left-[0px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-5@2x.png"
          />
          <img
            className="h-32 w-32 absolute !m-[0] top-[131px] left-[131px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <div className="h-32 w-32 !m-[0] absolute top-[131px] left-[262px] flex flex-row items-start justify-start gap-[0px_10px] bg-[url('/public/rectangle-7@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-32 w-32 relative object-cover hidden z-[0]"
              alt=""
              src="/rectangle-7@2x.png"
            />
            <img
              className="h-5 w-5 absolute !m-[0] top-[7px] left-[105px] overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/iconscarousel-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIndicatorFrame;
