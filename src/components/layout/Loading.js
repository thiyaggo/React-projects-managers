import styles from './Loading.module.css';

function Loading(){
    return (
        <div className={styles.container_spiner}>
            <div className={styles.spinner}></div>
            <p>Carregando seus projetos...</p>
        </div>
    )
}
export default Loading;