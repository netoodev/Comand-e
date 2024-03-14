 import './InputText.css';

 const InputText = (props) => {
    return(
        <>
            <div className='input-container'>
                <h4>{props.title}</h4>
                <input type={props.type} placeholder={props.placeholder}></input>
            </div>
        </>
    );
 }

export default InputText;