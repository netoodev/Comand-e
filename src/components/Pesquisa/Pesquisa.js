import './Pesquisa.css';
import SearchIcon from '../../assets/pesquisa/search-icon.svg'

const Pesquisa = () => {
    return (
        <>
            <div className='pesquisa-container'>
                <img className='search-icon' src={SearchIcon}></img>
                <input type='search' placeholder='Pesquise o produto desejado'></input>
            </div>
        </>
    );
}

export default Pesquisa;