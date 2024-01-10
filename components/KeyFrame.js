import {useRouter} from "next/router";

export default function KeyFrame() {

  const router = useRouter();
  let titulo = router.pathname;
  titulo = titulo.slice(1);

  return (
      <section id="fundos" className="d-flex justify-content-center align-items-center text-center">
        <div className="fundo-azul-opaco revelar">
          <h1 className="titulo-3 text-capitalize">{titulo === "" ? 'Usuários' : titulo}</h1>
          <p>Lista de {titulo === "" ? 'Usuario' : titulo}s</p>
          {/* {titulo !== "" && <p>Lista de {titulo} </p>} */}
        </div>
      </section>
  );
}
