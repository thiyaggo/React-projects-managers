import styles from './Home.module.css';
import LinkButtom from '../layout/LinkButtom';
function Home(){
    return (
        <section className={styles.sessao}>
             <h1>Bem vindo ao <span>MC Project</span></h1>
            <p>Comece a gerenciar seus projetos</p>
            <div>
                <LinkButtom to="/newproject" text="Criar Projeto" />
            </div>
            
            <div className={styles.img_projeto}></div>
        </section>
    );
}

export default Home;