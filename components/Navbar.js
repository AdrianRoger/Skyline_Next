import Link from 'next/link'

export default function Navbar() {
    return (
        <>
          <header>
            <nav className="navbar navbar-expand-md bg-fundo navbar-dark pe-2">
              <div className="container-fluid d-flex justify-content-between">
                <Link href="/"	className="navbar-brand d-flex align-items-center logo"> 
                  <img className="logotipo-2" src="assets/img/logo_white.png" alt="Logotipo"></img>
                  Skyline
                </Link>
                <button className="navbar-toggler mx-sm-3" type="button"
                  data-bs-toggle="collapse" data-bs-target="#hamburguer">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="hamburguer">
                    <div className="navbar-nav ms-auto">
                        {/* <Link href="/" className="nav-link">Home</Link>
                        <Link href="/destino" className="nav-link">Destino</Link>
                        <Link href="/promocoes" className="nav-link">Promoções</Link>
                        <Link href="/contato" className="nav-link">Contato</Link>
                        <hr className="group-divider"></hr> */}
                      <div className="dropdown ms-2">
                        <button className="btn btn-outline-light btn-fundo dropdown-toggle"
                          type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Admin Pages</button>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" href="/">Clientes</Link></li>
                          <li><Link className="dropdown-item" href="/Contato">Contato</Link></li>
                          <li><Link className="dropdown-item" href="/Cidade">Cidades</Link></li>
                          <li><Link className="dropdown-item" href="/Voo">Vôo</Link></li>
                          <li><Link className="dropdown-item" href="/Reserva">Reservas</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </nav>
          </header>
        </>
    );
}
