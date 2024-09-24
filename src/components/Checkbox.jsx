export default function Checkbox({ checked }) {
  if (checked) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
        <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
      </svg>
    );
  } else {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
        <path d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"></path>
      </svg>
    );
  }
}
