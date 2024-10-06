export default function HamMenu({ hamSelected, toggleHamMenu }) {
  return (
    <button
      className="w-[25px flex h-[25px] items-center justify-center sm:hidden"
      onClick={toggleHamMenu}
    >
      <div
        className={`relative h-[2px] w-[25px] transition-all before:absolute before:bottom-[7px] before:left-0 before:h-full before:w-full before:bg-white before:opacity-100 before:transition-all after:absolute after:left-0 after:top-[7px] after:h-full after:w-full after:bg-white after:opacity-100 after:transition-all sm:hidden ${hamSelected ? 'bg-transparent before:translate-y-[7px] before:rotate-45 after:-translate-y-[7px] after:-rotate-45' : null}`}
        type="button"
        aria-label="Toggle menu"
      ></div>
    </button>
  );
}
