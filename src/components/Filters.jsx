import { useRef } from 'react';

export function Filters({ filterByUniversity }) {
  const universityFilterRef = useRef(null);

  return (
    <div className="col-span-4 col-start-1 bg-red-100 p-3">
      <h3 className="font-semibold">Filter</h3>

      <div>
        <h4>University and Subject</h4>
        <select
          name="university"
          ref={universityFilterRef}
          onChange={(e) => filterByUniversity(e.target.value)}
        >
          <option value="all">All Universities</option>
          <option value="Moratuwa">Moratuwa University</option>
          <option value="Kelaniya">Kelaniya University</option>
        </select>
      </div>
    </div>
  );
}
