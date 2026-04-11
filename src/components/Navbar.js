import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Students</Link>
      <Link to="/favorites">Favourites</Link>
    </div>
  );
}

export default Navbar;