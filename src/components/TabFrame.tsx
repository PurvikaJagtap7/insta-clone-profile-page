import { FunctionComponent } from "react";

const TabFrame: FunctionComponent = () => {
  return (
    <footer className="self-stretch h-[68px] relative max-w-full">
      <div className="absolute top-[34px] left-[0px] w-[390px] overflow-hidden flex flex-row items-start justify-center pt-5 px-5 pb-[9px] box-border max-w-full">
        <div className="h-[34px] w-[390px] relative hidden max-w-full" />
        <div className="h-[5px] w-[134px] relative rounded-81xl bg-gray-200 z-[1]" />
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white box-border w-[389.9px] overflow-hidden flex flex-col items-start justify-start pt-1.5 px-[25px] pb-1 z-[2] border-t-[0.5px] border-solid border-gray-300">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-row items-start justify-start gap-[0px_57px]">
            <img
              className="h-[22.7px] w-[22px] relative"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
            <img
              className="h-[23.4px] w-[23.4px] relative min-h-[23px]"
              loading="lazy"
              alt=""
              src="/shape.svg"
            />
            <img
              className="h-[23.5px] w-[23.5px] relative object-cover min-h-[24px]"
              loading="lazy"
              alt=""
              src="/tab-3@2x.png"
            />
          </div>
          <div className="w-24 flex flex-row items-center justify-start gap-[0px_46px]">
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/iconsreels-1.svg"
            />
            <img
              className="h-7 w-7 relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/ellipse-17@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TabFrame;
