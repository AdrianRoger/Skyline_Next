import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Cidade(){

  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('https://localhost:7244/api/Cidade');
        setCidades(response.data);
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
						<h1 className="text-center titulo-3">Cidades</h1>
						<hr className="group-divider"></hr>
						<div className="table-responsive">
							<table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>País</th>
                    <th>Aeroporto</th>
                  </tr>
                </thead>
                <tbody>
                  {cidades.map((cidade) => (
                    <tr key={cidade.id}>
                      <td>{cidade.id}</td>	
                      <td>{cidade.nomeCidade}</td>
                      <td>{cidade.estado}</td>
                      <td>{cidade.pais}</td>
                      <td>{cidade.aeroporto}</td>
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
