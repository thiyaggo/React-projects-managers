import styles from './ProjectEdit.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import ProjectForms from '../project/ProjectForms';
import Messagens from '../layout/Messagens';

function ProjectEdit(){

    const {id} = useParams()

    const [project, setProject] = useState({});
    const [showProjectForm, setShowPrjectForm] = useState(false)
    const [messagens, setMessagens] = useState()
    const [type, setType] =  useState()

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
            }).then(res => res.json())
            .then((data)=>{
                setProject(data);           
            })
            .catch((err)=> console.log(err))
        }, 1000)
    },[id])

    function toggleProjectForm(){
        setShowPrjectForm(!showProjectForm)//muda de false pra true
    }

    function editProject(project){
        setMessagens('')
        //budget validation
       
        if(project.budget < project.corts){
             setTimeout(() => {
                 setMessagens('Orçamento não pode ser menor que o custo do projeto!');
                setType('falha');
             }, 0);
            return false;
        }

        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',//só altera
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(project)//tranforma os dados em json
        }).then((res)=> res.json())//tranforma os dados em obj
          .then((data)=>{
            setProject(data)
            setShowPrjectForm(false)
            setMessagens('Projeto atualizado.');
            setType('success');
            return false;
          })
          .catch((err)=> console.log(err))
    }

    return (<>
        {project.name ? (
           <div className={styles.project_details}>
                <div className={styles.header_details}>
                    <div>
                        <h1>Informações do Projeto</h1>
                    </div>
                    <div>
                         <button onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar': 'Fechar'}
                        </button>
                    </div>
                   
                </div>
                 {messagens && <Messagens type={type} msg={messagens}/>}
                    {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <div className={styles.project_info_h3}>
                                    <h3>Projeto: {project.name}</h3>
                                </div>
                                <div>
                                    <p><span>Categoria: </span>{project.category.name}</p> 
                                    <p><span>Total orçamento: </span>R${project.budget}</p> 
                                    <p><span>Total Utilizado: </span>R${project.corts}</p> 
                                </div>
                              
                            </div>
                        ):(
                            <div className={styles.project_info_form}>
                                <ProjectForms handleSubmit={editProject} BtnText={'Concluir edição'} projectData={project}/>                
                            </div>
                    )}
           </div>
        ):(
            <div className={styles.project_details}>
                <Loading />
            </div>
            
        )}   
    </>)
}

export default ProjectEdit;