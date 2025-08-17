export default function Badge({ text }: { text: string }) {
  return (
    <span className="bg-gradient-to-r from-[#61b241]/30 to-emerald-600/30 px-3 py-2 rounded-full border border-[#61b241] text-sm font-semibold">
      {text}
    </span>
  );
}
