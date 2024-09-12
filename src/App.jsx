export function App() {
  return (
    <>
      <header>
        <h1>Check eligibility for a programme</h1>
        <form>
          <label>
            subject stream
            <select name="stream">
              <option value="arts">Arts</option>
              <option value="commerce">Commerce</option>
              <option value="biology">Biologycal Science</option>
              <option value="physical">Physical Science</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            <input type="text" placeholder="course" />
          </label>

          <button>Search</button>
        </form>
      </header>
    </>
  );
}
