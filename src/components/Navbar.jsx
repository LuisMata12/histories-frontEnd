import { Link } from "react-router-dom"

export const Navbar = () => {
    return (

    <div className="container-fluid navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#e3f2fd'}}>
        <a className="navbar-brand" href="#">Historie Name</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link to='/home' className="nav-link" aria-current="page" href="#">Home</Link>
            <Link to='/generate' className="nav-link" href="#">Generate</Link>
            <Link to='/login' className="nav-link" href="#">Login</Link>
        </div>
        </div>
    </div>

    )
  }