import { Link } from "react-router-dom";

export const Notes = () => {
  return (
    <div>
      <h1>Notes</h1>
      <Link to="/lp">
        <button>Ir para Landing Page</button>
      </Link>
    </div>
  );
};
