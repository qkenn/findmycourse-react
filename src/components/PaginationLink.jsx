import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';

export default function PaginationLink({ index }) {
  const { programmes, searchProgrammes, programmesDispatch } =
    useContext(ProgrammeContext);

  return (
    <button
      disabled={index + 1 === programmes.page}
      className={`${index + 1 === programmes.page ? 'rounded-sm bg-neutral-950 px-2 py-0.5 text-white' : 'hover:underline'}`}
      onClick={() => {
        searchProgrammes(programmesDispatch, programmes.query, index + 1);
      }}
    >
      {index + 1}
    </button>
  );
}
