import styles from './Input.module.css';

function Input({text, name, type, placeholder, handleOnChange, value}){
    return (
        <div className={styles.form}>
            <div>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            placeholder={placeholder} 
            id={name} 
            name={name} 
            onChange={handleOnChange}//onChange altera o estado que vem pelas props 
            value={value}
            required
            />
            </div>
            
        </div>
    );
}

export default Input;