import { Link, useNavigate } from "react-router-dom";

export const Notes = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/lp");
  };

  return (
    <div>
      <h1>Notes</h1>

      <Link to="/lp">
        <button>Ir para Landing Page (via Link)</button>
      </Link>

      <br />

      <button onClick={handleClick}>
        Ir para Landing Page (via useNavigate)
      </button>
    </div>
  );
};
