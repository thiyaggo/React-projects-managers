import {useState, useEffect} from 'react';
import styles from './Messagens.module.css';
function Messagens({type, msg}){

    const [Visible, setVisible] = useState(false);

    useEffect(()=>{
        if(!msg){
            setVisible(false)
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false)
        }, 4000);

        return () => clearTimeout(timer)
    }, [msg])

    return (<>
        {Visible && (
             <div className={`${styles.menssagem} ${styles[type]}`}>
                {msg}
            </div>
        )}
    </>)
}

export default Messagens;