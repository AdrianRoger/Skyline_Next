import Link from 'next/link'
import {useRouter} from "next/router";

export default function Navbar() {

  const router = useRouter();
  let active = router.pathname;
  active = active.slice(1);

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
                        <Link href="/" className={active === "" ? 'nav-link active': 'nav-link'}>Usuarios</Link>
                        <Link href="/Cidade" className={active === "cidade" ? 'nav-link active': 'nav-link'}>Cidades</Link>
                        <Link href="/Voo" className={active === "voo" ? 'nav-link active': 'nav-link'}>Voos</Link>
                        <Link href="/Reserva" className={active === "reserva" ? 'nav-link active': 'nav-link'}>Reservas</Link>
                        <Link href="/Contato" className={active === "contato" ? 'nav-link active': 'nav-link'}>Contatos</Link>
                    </div>
                  </div>
                </div>
              </div>

            </nav>
          </header>
        </>
    );
}
