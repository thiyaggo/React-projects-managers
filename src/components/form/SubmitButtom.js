import styles from './SubmitButtom.module.css';

function SubmitButtom({text}){
    return (
        <div className={styles.btn_div}>
           <button className={styles.btn}>{text}</button>   
        </div>
    );
}

export default SubmitButtom;