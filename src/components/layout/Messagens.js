import {useState, useEffect} from 'react';
import styles from './Messagens.module.css';
function Messagens({type, msg}){

    const [visible, setVisible] = useState(false);

useEffect(() => {
  if (!msg) return;

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
}, [msg]);   


    return (<>
        {visible && (
             <div className={`${styles.menssagem} ${styles[type]}`}>
                {msg}
            </div>
        )}
    </>)
}

export default Messagens;