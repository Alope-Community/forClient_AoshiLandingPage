type ButtonProps = {
  text: string;
  href: string;
};

export default function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      className="bg-gradient-to-r from-[#61b241] to-emerald-600 hover:bg-gradient-to-l text-white px-6 py-2 rounded-full font-semibold transition cursor-pointer"
    >
      {props.text}
    </a>
  );
}
