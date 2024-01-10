import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function Voo(){

  const [voos, setVoos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('https://localhost:7244/api/Voo');
        setVoos(response.data);
      } catch (error) {
        console.error('Erro ao buscar na base de dados', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
			<div className="container max-formulario py-5">
				<div className="row">
					<div className="col">
						<h1 className="text-center titulo-3">Vôos</h1>
						<hr className="group-divider"></hr>
						<div className="table-responsive">
							<table className="table table-striped">
                <thead>
                  <tr>
                    <th>Número do Vôo</th>
                    <th>Compania</th>
                    <th>Assentos</th>
                    <th>Preço Unitário</th>
                    <th>Data de Partida</th>
                    <th>Origem</th>
                    <th>Destino</th>
                  </tr>
                </thead>
                <tbody>
                  {voos.map((v) => (
                    <tr key={v.id}>
                      <td>{v.numVoo}</td>	
                      <td>{v.compAerea}</td>
                      <td>{v.assentos}</td>
                      <td>R$ {v.precoUnit}</td>
                      <td>{format(new Date(v.dataPartida), 'dd/MM/yyyy')}</td>
                      <td>{v.origem.nomeCidade}-{v.origem.estado}</td>
                      <td>{v.destino.nomeCidade}-{v.destino.estado}</td>
                    </tr>
                  ))}
                </tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
