import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Usuario(){

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('https://localhost:7244/api/Usuario');
        setUsuarios(response.data);
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
						<h1 className="text-center titulo-3">Usuários</h1>
						<hr className="group-divider"></hr>
						<div className="table-responsive">
							<table className="table table-striped">
                <thead>
                  <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Cep</th>
                    <th>Rua</th>
                    <th>Número</th>
                    <th>Complemento</th>
                    <th>Ativo</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario) => (
                    <tr key={usuario.cpf}>
                      <td>{usuario.cpf}</td>	
                      <td>{usuario.nome}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.telefone}</td>
                      <td>{usuario.cep}</td>
                      <td>{usuario.rua}</td>
                      <td>{usuario.numero}</td>
                      <td>{usuario.complemento? usuario.complemento : "-"}</td>
                      <td>{usuario.ativo ? 'Sim' : 'Não'}</td>
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
