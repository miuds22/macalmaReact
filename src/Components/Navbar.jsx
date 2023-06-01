import React from "react";

const Navbar = () => {
    return (
   <div>
        <nav className="navbar navbar-expand-lg bg-body-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"   >
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Discos
                        </a>
                        <ul className="dropdown-menu bg-danger">
                        <li><a className="dropdown-item" href="#">Macalma</a></li>
                        <li><a className="dropdown-item" href="#">Luces de la Oscuridad</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">EP's</a></li>
                        </ul>
                    </li>
                    </ul>
            </div>
        </div>
    </nav>

   </div>
    )

}
export default Navbar;