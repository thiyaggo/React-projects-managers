import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButtom from '../form/SubmitButtom';
import styles from './ProjectForms.module.css';

//--> function com props do texto do botao, da função submit e do project 
function ProjectForms({handleSubmit, projectData, BtnText}) {

//--> constantes pra aplicar as alterações com variaveis de estado com o uso do useState 
   const [categoria, setCategoria] = useState([]);
   const [project, setProject] = useState(projectData||{});

//--> fetch com o useEffect pra tarzer os dados do db.json pro select.
  useEffect(()=>{
    fetch('http://localhost:5000/categoria',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      },
    })
    .then((resp)=> resp.json())
    .then((data)=>{
      setCategoria(data)
    })
    .catch((err)=>console.log(err));
  }, [])

//--> faz o envio do dados do inputs para a pasta newPrject executando a função creatPost
  const submit = (e)=>{ 
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)// envias os dados como argumento pela props handleSubmit 
  }

  //--> atualizar o estado dos inputs e select em tempo real
  function handleChange(e){
    setProject({...project,[e.target.name]:e.target.value})
  }
    function handleCategory(e){
    setProject({...project,
      category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

    return (
      <form onSubmit={submit} className={styles.form}>
        <Input 
        text="Nome do Projeto"
        type="text" 
        name="name" 
        placeholder="Digite o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
        />

        <Select 
        text="Selecione a categoria" 
        name="category_id" 
        options={categoria}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
        />
        
        <Input 
        text="Orçamento do Projeto"
        type="number" 
        name="budget" 
        placeholder="Digite o orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
        />        
        <SubmitButtom text={BtnText}/>
      </form>
     
    );
}

export default ProjectForms;