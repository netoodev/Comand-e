import './ScrollPedidos.css'

const ScrollPedidos = () => {

  const opcoes = [
    {id: 1, name: "Salgados"},
    {id: 2, name: "Bebidas"},
    {id: 3, name: "Sobremesas"},
    {id: 4, name: "Sopas"},
  ];

  return (
    <div className='opcoes-container'>
        {
          opcoes.map((opcao) => (
            <div className='opcao' key={opcao.id}> 
              <span>{opcao.name}</span>
            </div>
          ))
        }
    </div>
  );
};

export default ScrollPedidos;