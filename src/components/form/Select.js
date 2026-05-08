import styles from './Select.module.css';

function Select({text, name, handleOnChange, value, options}){
    return (
        <div className={styles.form}>
            <div>
            <label htmlFor={name}>{text}</label>
            <select required
                id={name} 
                name={name} 
                onChange={handleOnChange} 
                value={value || ''}
            >
                <option value="">Selecione uma opção</option>
                {options && options.map((option)=>(//se existir o options entao criar a função seguinte
                    <option value={option.id} key={option.id}>
                        {option.nome}
                    </option>
                ))}
            </select>
            </div>
            
        </div>
    );
}

export default Select;

