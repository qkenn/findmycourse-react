export default function InfoCard({ title, text, pending = false }) {
  return (
    <div className="flex-1 rounded-sm bg-white px-8 py-6">
      <h3 className="text-center text-2xl font-semibold">{title}</h3>
      {pending && (
        <div className="text-center text-neutral-700">(pending feature)</div>
      )}
      <p className="mt-3 text-neutral-700">{text}</p>
    </div>
  );
}
