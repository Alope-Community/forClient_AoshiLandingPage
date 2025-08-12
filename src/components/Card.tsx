type OurServiceCardProps = {
  title: string;
  desc: string;
};

export function OurServiceCard(props: OurServiceCardProps) {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl flex flex-col gap-6 border border-white/5 relative overflow-hidden">
      <div>
        <div className="size-[72px] rounded-[20px] ring-1 ring-white/10 [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.10)_0%,_rgba(255,_255,_255,_0.00)_100%)] bg-center">
          <div className="bg-gradient-to-r from-[#61b241]/40 to-emerald-600/40 rounded-[20px] h-full w-full flex items-center justify-center border border-[#61b241]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-white font-medium text-2xl/[120%]">
          {props.title}
        </h3>
        <p className="text-sm/[140%] font-sans text-white/70">{props.desc}</p>
      </div>

      {/* <div className="bg-gradient-to-tl from-[#61b241]/70 via-[#61b241]/0 to-[#61b241]/0 absolute bottom-0 right-0 size-28"></div> */}
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
    <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl flex flex-col gap-6 border-2 border-white/10 relative overflow-hidden">
      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-white font-medium text-2xl/[120%]">
          {props.title}
        </h3>
        <p className="text-sm/[140%] font-sans text-white/70">
          {props.desc}. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
        </p>
      </div>
    </div>
  );
}
