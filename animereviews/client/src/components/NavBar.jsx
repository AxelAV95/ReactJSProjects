import { Link } from "react-router-dom"
import { FaBars, FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa"


function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light shadow-sm">
            <div className="container-lg">
                <Link to="/" className="text-decoration-none">
                    <div className="navbar-brand text-primary fw-bold fst-italic fs-3">
                        AnimeReview
                    </div>
                </Link>
                <div className="d-md-block d-none">
                    <div className="d-flex gap-3 align-items-center">
                        <Link to="/login" className="px-4 rounded-pill">
                            <button className="btn btn-primary text-white lead fw-bold"><FaSignInAlt className="me-2" />Login</button>
                        </Link>
                        <Link to="/register" className="px-4 rounded-pill">
                            <button className="btn btn-primary text-white lead fw-bold"><FaUserPlus className="me-2" />Register</button>
                        </Link>
                    </div>
                </div>
                <div className="d-block d-md-none">
                    <div className="dropdown">
                        <button className="btn btn-primary px-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaBars className="mb-1" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <Link to="/" className="text-decoration-none">
                                <li className="dropdown-item text-secondary fw-bold fs-6"><FaHome className="me-2" />Home</li>
                            </Link>
                            <Link to="/login" className="text-decoration-none">
                                <li className="dropdown-item text-secondary fw-bold fs-6"><FaSignInAlt className="me-2" />Log In</li>
                            </Link>
                            <Link to="/register" className="text-decoration-none">
                                <li className="dropdown-item text-secondary fw-bold fs-6"><FaUserPlus className="me-2" />Register</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar