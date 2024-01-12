import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function Reserva(){

  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('http://skylineapi.somee.com/api/Reserva');
        setReservas(response.data);
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
						<h1 className="text-center titulo-3">Reservas</h1>
						<hr className="group-divider"></hr>
						<div className="table-responsive">
							<table className="table table-striped">
                <thead>
                  <tr>
                    <th>Data reserva</th>
                    <th>Qtd pessoas</th>
                    <th>Cliente</th>
                    <th>Preço total</th>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>Cancelada</th>
                  </tr>
                </thead>
                <tbody>
                  {reservas.map((r) => (
                    <tr key={r.id}>
                      <td>{format(new Date(r.dataReserva), 'dd/MM/yyyy')}</td>	
                      <td>{r.numPessoas}</td>
                      <td>{r.usuario.nome}-{r.usuario.cpf}</td>
                      <td>R$ {r.voo.precoUnit * r.numPessoas}</td>
                      <td>{r.voo.origem.nomeCidade}-{r.voo.origem.estado}</td>
                      <td>{r.voo.destino.nomeCidade}-{r.voo.destino.estado}</td>
                      <td>{r.cancelada ? 'Sim' : 'Não'}</td>
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
