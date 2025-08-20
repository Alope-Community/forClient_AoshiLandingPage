import type { ReactNode } from "react";

type OurServiceCardProps = {
  title: string;
  desc: string;
  customClass?: string;
  icon: ReactNode;
};

export function OurServiceCard(props: OurServiceCardProps) {
  return (
    <div
      className={`p-6 bg-white/5 backdrop-blur-xl rounded-3xl flex flex-col gap-6 border border-white/5 relative overflow-hidden ${props.customClass}`}
    >
      <div>
        <div className="size-[72px] rounded-[20px] ring-1 ring-white/10 [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.10)_0%,_rgba(255,_255,_255,_0.00)_100%)] bg-center">
          <div className="bg-gradient-to-r from-[#61b241]/40 to-emerald-600/40 rounded-[20px] h-full w-full flex items-center justify-center border border-[#61b241]">
            {props.icon}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-white font-medium text-2xl/[120%]">
          {props.title}
        </h3>
        <p className="text-sm/[140%] font-sans text-white/70">{props.desc}</p>
      </div>

      <div className="border-t border-r border-[#61b241]/70 rounded-tr-3xl absolute top-0 right-0 size-7"></div>
      <div className="border-t border-l border-[#61b241]/70 rounded-tl-3xl absolute top-0 left-0 size-7"></div>
      <div className="border-b border-l border-[#61b241]/70 rounded-bl-3xl absolute bottom-0 left-0 size-7"></div>
      <div className="border-b border-r border-[#61b241]/70 rounded-br-3xl absolute bottom-0 right-0 size-7"></div>
    </div>
  );
}

type WhyChooseCardCardProps = {
  title: string;
  desc: string;
};

export function WhyChooseCard(props: WhyChooseCardCardProps) {
  return (
    <div className="text-left p-6 bg-white/5 backdrop-blur-xl rounded-3xl flex flex-col gap-6 border-2 border-white/10 relative overflow-hidden">
      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-white font-medium text-2xl/[120%]">
          {props.title}
        </h3>
        <p className="text-sm/[140%] font-sans text-white/70">{props.desc}.</p>
      </div>
    </div>
  );
}
