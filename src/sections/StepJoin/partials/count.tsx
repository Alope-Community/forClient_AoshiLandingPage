type StepCountProps = {
  text: string;
  customClass: string;
};

export default function StepCount(props: StepCountProps) {
  return (
    <div
      className={`absolute hidden top-0 border border-white/20 p-1.5 bg-white/10 rounded-full xl:flex items-center justify-center z-20 ${props.customClass}`}
    >
      <div className="h-14 w-14 flex items-center justify-center bg-[#61b241] rounded-full">
        {props.text}
      </div>
    </div>
  );
}
