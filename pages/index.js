import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Qual tabela deseja vizualizar?</h1>
      <Link className="dropdown-item" href="/usuario">Clientes</Link>
      <Link className="dropdown-item" href="/contato">Contato</Link>
      <Link className="dropdown-item" href="/cidade">Cidades</Link>
      <Link className="dropdown-item" href="/voo">Vôo</Link>
      <Link className="dropdown-item" href="/reserva">Reservas</Link>
    </>
  )
}
