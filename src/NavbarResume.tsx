import { Link } from "react-router-dom";

function NavbarResume() {
  return (
    <div className="p-4 bg-gray-100 shadow">
      <Link to="/portfolio-react/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}

export default NavbarResume;
