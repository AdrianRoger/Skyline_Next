import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Contato(){

  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('http://skylineapi.somee.com/api/Contato');
        setContatos(response.data);
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
						<h1 className="text-center titulo-3">Contatos</h1>
						<hr className="group-divider"></hr>
						<div className="table-responsive">
							<table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Mensagem</th>
                    <th>Resolvido</th>
                  </tr>
                </thead>
                <tbody>
                  {contatos.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>	
                      <td>{c.nome}</td>
                      <td>{c.email}</td>
                      <td>{c.telefone}</td>
                      <td>{c.mensagem}</td>
                      <td>{c.resolvido ? 'Sim' : 'Não'}</td>
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
