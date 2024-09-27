import { useContext } from 'react';
import { FilterContext } from './FilterSelectBtn';

export default function OverlayCloseBtn() {
  const { closeOverlay } = useContext(FilterContext);

  return (
    <button
      onClick={closeOverlay}
      className="flex items-center justify-center rounded-sm bg-neutral-950 p-1"
    >
      <svg width="25" height="25" fill="#fff">
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
      </svg>
    </button>
  );
}
