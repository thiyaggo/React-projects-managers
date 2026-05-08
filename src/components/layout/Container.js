//pasta do meu layout
import { Outlet } from 'react-router-dom'; // components/layout/Container.jsx
import styles from './Container.module.css';

function Container({customClass= '', children}){
    return (
        <div className={`${styles.container} ${customClass}`.trim()}>
             {children ? children : <Outlet />}
        </div>
    );
}

export default Container;


