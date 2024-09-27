export default function SearchInput({ searchInputRef }) {
  return (
    <div className="relative">
      <input
        autoFocus
        type="text"
        name="q"
        placeholder="Keywords e.g subject/programme name/location"
        className="mt-1 block w-full rounded-sm border-[1px] border-neutral-600/50 px-5 py-2 pl-12 placeholder:text-neutral-400 sm:w-[32rem]"
        ref={searchInputRef}
      />

      <img
        src="/search-icon.svg"
        className="absolute left-4 top-[1.3rem] -translate-y-1/2 transform"
      />
    </div>
  );
}
