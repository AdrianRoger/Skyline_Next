import {useRouter} from "next/router";


export default function KeyFrame() {

  const router = useRouter();
  let titulo = router.pathname;
  titulo = titulo.slice(1);

  return (
      <section id="fundos" className="d-flex justify-content-center align-items-center text-center">
        <div className="fundo-azul-opaco revelar">
          <h1 className="titulo-3 text-capitalize">{titulo === "" ? 'Home' : titulo}</h1>
          {titulo !== "" && <p>Lista de {titulo} </p>}
        </div>
      </section>
  );
}
