import styles from './ProjectCard.module.css'
import { Link } from "react-router-dom";
function ProjectCard({id, name, budget, category, handleRemove}){
    return (
        <div className={styles.project_card}>
            <div className={styles.titulo}>
                <h3>{name}</h3>
            </div>
            <div className={styles.corpo}>
                <p>
                    <span>Orçamento:</span> R${budget}
                </p>
                <p className={styles.category}>
                    <span className={`${styles[category.toLowerCase()]}`}></span> {category}
                </p>
            </div>
            <div className={styles.button}>
                <Link to='/' className={styles.delete}>Delete</Link>
                <Link to='/' className={styles.alterar}>Editar</Link>
            </div>
        </div>
    );
}

export default ProjectCard;