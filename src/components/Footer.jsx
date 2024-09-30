export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-5 py-2 text-center text-white">
      <div>{new Date().getFullYear() || '2025'} uncopyrighted</div>
    </footer>
  );
}
