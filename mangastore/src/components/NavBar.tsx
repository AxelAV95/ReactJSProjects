import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";


function NavBar() {

  const { quantity } = useAppSelector((state) => state.shop)
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container-lg">
        <Link className="navbar-brand text-danger fw-bold fs-4" to="/">MangaStore</Link> 
        <div>
          <Link to="/cart" className="btn btn-danger text-white ms-auto px-4 rounded-pill fw-bold">
            <FaCartArrowDown className="me-2 fs-4"/> ({quantity})
          </Link>
        </div>
      </div>

    </nav>
  )

}

export default NavBar;
