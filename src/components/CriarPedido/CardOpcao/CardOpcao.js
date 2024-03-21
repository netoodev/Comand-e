import './CardOpcao.css';
import removeIcon from '../../../assets/CriarPedido/remove-icon.svg'
import addIcon from '../../../assets/CriarPedido/add-icon.svg'

const CardOpcao = () => {
     
    const cardapioOpcoes = [
        {id:1, name: "Coxinha de charque", price: 7.50, amount: 0, stock: 10},
        {id:2, name: "Coxinha de frango", price: 6, amount: 0, stock: 7},
        {id:3, name: "Empada", price: 6, amount: 0, stock: 4},
        {id:4, name: "Enroladinho", price: 6, amount: 0, stock: 0},
    ]
    
    return(
        <div className='cards'>
            {
                cardapioOpcoes.map((opcao) => {
                    if(opcao.stock > 0){
                        return(
                        <div className='card' key={opcao.id}>
                            <h5 className='opcao-name'>{opcao.name}</h5>
                            <p className='opcao-price'>R${opcao.price.toFixed(2).replace(".", ",")}</p>
                            <div className='amount-wrapper'>
                                <button><img src={removeIcon}></img></button>
                                <span>{opcao.amount}</span>
                                <button><img src={addIcon}></img></button>
                            </div>
                        </div>
                        );
                    } else if(opcao.stock == 0) {
                        return(
                            <div className='card indisponivel' key={opcao.id}>
                                <h5 className='opcao-name'>{opcao.name}</h5>
                                <p className='opcao-price'>R${opcao.price.toFixed(2).replace(".", ",")}</p>
                            </div>
                            );
                    }
                    
                })
            }
        </div>
    );
}

export default CardOpcao;