import { useNavigate } from 'react-router-dom';
import ProjectForms from '../project/ProjectForms';
import styles from './NewProject.module.css';

function NewProject(){

    const navigate = useNavigate();

    function creatPost(project){
        //initialize cost and services  
        project.corts = 0;
        project.service =[];

        fetch('http://localhost:5000/projects', {
            method:'POST',
            headers: {'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((res)=>res.json)
        .then((data)=>{
            console.log(data);
            //redirect
            navigate('/project', {state: {msg: 'Projeto criado com sucesso!'}})
        })
        .catch((err)=> console.log(err))
    }

    return (
        <div className={styles.newProject_container}>
            <h1>Criar novo Projeto</h1>
            <p>Crie seu projeto para depois adicionar aos serviços</p>
            <div>
                <ProjectForms handleSubmit={creatPost} BtnText="Criar projeto" />    
            </div>    
         </div>

    );
}

export default NewProject;