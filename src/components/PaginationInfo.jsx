import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';

export default function PaginationInfo() {
  const { programmes } = useContext(ProgrammeContext);

  return (
    <div>
      {`Showing ${(programmes.page - 1) * programmes.pageSize + 1} - ${(programmes.page - 1) * programmes.pageSize + programmes.results.length} of ${programmes.count} results.`}
    </div>
  );
}
