import styles from './ProjectCard.module.css'
function ProjectCard({id, name, budget, category, handleRemove}){
    return (
        <div>
            <h3>{name}</h3>
            <p>
                <span>Orçamento:</span> ${budget}
            </p>
            <p>
                <span>Categoria:</span> {category}
            </p>
            <p>Delete</p>
            <p>Editar</p>
             
        </div>
    );

}

export default ProjectCard;