import Messagens from "../layout/Messagens";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './Project.module.css';
import LinkButtom from '../layout/LinkButtom';
import Container from '../layout/Container';
import ProjectCard from '../project/ProjectCard';
import {useState, useEffect} from 'react';
function Project(){

    const [projects, setProjects] = useState([]);
    const location = useLocation();

    const [message, setMessage] = useState('');
    const [messageDelete, setMessageDelete] = useState('');



useEffect(() => {

  if (location.state?.msg) {

    setMessage(location.state.msg);

    window.history.replaceState({}, document.title);

  }

}, [location.state]);

   
//-----> reqisitando os dados da api pra exibir
    useEffect(()=>{
        fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res)=> res.json())//Esse trecho converte a resposta para um objeto JavaScript.
          .then((data)=>{//Depois que o JSON é convertido, o resultado é enviado para esse then()
            console.log(data)
            setProjects(data)//Atualiza o estado projects com os dados recebidos.
          })
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(() => {
            setProjects(projects.filter((project)=> project.id !== id))
            setMessageDelete('projeto excluido com sucesso!')
        })
        .catch((err)=> console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Seus projetos</h1>
                  <Messagens  msg={message} type="success"/>
                {messageDelete && <Messagens  msg={messageDelete} type="success"/>}
                <LinkButtom to="/newproject" text="Criar novo projeto"/>
            </div>
            <div className={styles.container_card}>
               {projects.length > 0 && //verifica se o array tem elementos
                projects.map((project)=> //percorre projects onde project representa cada array no momento do lop
                    <ProjectCard //“Para cada projeto do array, crie um ProjectCard.”
                    name={project.name}
                    id={project.id}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    handleRemove={removeProject}
                    />)
               }
            </div>
        </div>
       
    )
}

export default Project;