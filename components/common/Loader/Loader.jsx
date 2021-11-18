import Spinner from 'react-bootstrap/Spinner';
import styles from './Loader.module.scss';



function Loader({ animation = 'border', role = 'status', size }) {



    return (
        <div className={styles.loaderDefault}>
            <Spinner animation={animation} role={role} size={size} varian='danger' />
        </div>
    )
};

export default Loader;