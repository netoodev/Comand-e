import "./CardOpcao.css";
import { useState } from "react";
import removeIcon from "../../../assets/CriarPedido/remove-icon.svg";
import addIcon from "../../../assets/CriarPedido/add-icon.svg";

const CardOpcao = () => {
  const [cardapioOpcoes, setCardapioOpcoes] = useState([
    { id: 1, name: "Coxinha de charque", price: 7.5, amount: 0, stock: 10 },
    { id: 2, name: "Coxinha de frango", price: 6, amount: 0, stock: 7 },
    { id: 3, name: "Empada", price: 6, amount: 0, stock: 4 },
    { id: 4, name: "Enroladinho", price: 6, amount: 0, stock: 0 },
  ]);

  const addItem = (id) => {
    setCardapioOpcoes((prevOpcoes) =>
      prevOpcoes.map((opcao) =>
        opcao.id === id && opcao.stock > 0
          ? { ...opcao, amount: opcao.amount + 1 }
          : opcao
      )
    );
  };

  const removeItem = (id) => {
    setCardapioOpcoes((prevOpcoes) =>
      prevOpcoes.map((opcao) =>
        opcao.id === id && opcao.amount > 0
          ? { ...opcao, amount: opcao.amount - 1 }
          : opcao
      )
    );
  };

  return (
    <div className="cards">
      {cardapioOpcoes.map((opcao) => {
        return (
          <div
            className={`card ${opcao.stock === 0 ? "indisponivel" : ""}`}
            key={opcao.id}
          >
            <h5 className="opcao-name">{opcao.name}</h5>
            <p className="opcao-price">
              R${opcao.price.toFixed(2).replace(".", ",")}
            </p>
            {opcao.stock > 0 && (
              <div className="amount-wrapper">
                <button onClick={() => removeItem(opcao.id)}>
                  <img src={removeIcon} alt="Remove Item"></img>
                </button>
                <span>{opcao.amount}</span>
                <button onClick={() => addItem(opcao.id)}>
                  <img src={addIcon} alt="Add Item"></img>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardOpcao;
