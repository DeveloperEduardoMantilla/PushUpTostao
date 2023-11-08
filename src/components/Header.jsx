import Logo from "../../public/img/logo.webp";
export default function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg em-nav">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="t_blank" aria-current="page" href="https://www.starbucks.com.co/menu">Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="t_blank" aria-current="page" href="https://www.starbucks.com.co/seccion/novedades">Novedades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="t_blank" aria-current="page" href="https://www.starbucks.com.co/stores">Contacto</a>
                </li>
            </ul>

            </div>
        </div>
        </nav>
    </>
  )
}
