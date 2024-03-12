import { FunctionComponent } from "react";

const FollowRequestGroup: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[17px_0px] max-w-full text-center text-sm text-black font-segoe-ui">
      <div className="w-[51px] relative tracking-[-0.3px] inline-block">
        New
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[0px_12px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[174px]">
            <div className="w-[245px] flex flex-row items-start justify-start">
              <div className="w-[53px] flex flex-col items-start justify-start gap-[17px_0px]">
                <img
                  className="w-[50px] h-[50px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/ellipse-22@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                  <div className="flex-1 relative tracking-[-0.3px]">Today</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[19.09999999999991px] px-0 pb-0 ml-[-3px] text-xs">
                <div className="self-stretch relative tracking-[-0.3px]">
                  <span>
                    <span className="font-semibold font-segoe-ui">
                      shreeya_08
                    </span>
                    <span className="text-darkgray-100">{` liked your photo. `}</span>
                  </span>
                  <span className="text-darkgray-100">
                    <span>1hr</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px_0px] text-left text-xs">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0px_7px]">
                <img
                  className="h-[61px] w-[58px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/group-1@2x.png"
                />
                <div className="h-[50px] flex-1 relative tracking-[-0.3px] flex items-center">
                  <span>
                    <span>
                      <span className="font-semibold font-segoe-ui">
                        diksha_02
                      </span>
                      <span className="font-segoe-ui">,</span>
                      <span className="font-semibold font-segoe-ui">
                        aaditi_01
                      </span>
                      <span className="font-segoe-ui">{` and `}</span>
                      <span className="font-semibold font-segoe-ui">{`55 others `}</span>
                      <span className="whitespace-pre-wrap text-darkgray-100">{`    liked your photo. `}</span>
                    </span>
                    <span className="whitespace-pre-wrap text-darkgray-100">
                      <span>2hr</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-[100px] flex flex-row items-start justify-start py-0 px-[5px] box-border text-center text-sm">
                <div className="flex-1 relative tracking-[-0.3px]">
                  Last 7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[52px_0px]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
              <img
                className="h-[50px] w-12 relative rounded-3xs object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-8@2x.png"
              />
            </div>
            <img
              className="w-12 h-[50px] relative rounded-3xs object-cover"
              alt=""
              src="/rectangle-8@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowRequestGroup;
