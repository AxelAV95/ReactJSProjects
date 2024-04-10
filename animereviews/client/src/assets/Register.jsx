import { Link } from "react-router-dom"

function Register() {
    return (
        <div className="container-lg my-5">
            <div className="text-center align-items-center align-content-center">
                <div className="d-flex justify-content-center">
                    <form className="border p-5">
                        <h4 className="text-secondary fw-bold fs-3 mb-5">Register</h4>

                        <div className="mb-3">
                            <input type="text" placeholder="Username" className="form-control" name="username" required />
                        </div>

                        <div className="mb-3">
                            <input type="email" placeholder="Email Address" className="form-control" name="email" required />
                        </div>

                        <div className="mb-3">
                            <input type="password" placeholder="Password" className="form-control" name="password" required />
                        </div>

                        <div className="mb-4">
                            <p>Already a Member? <Link to="/login">Sign In</Link></p>
                        </div>

                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register