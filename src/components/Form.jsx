import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({SetCategoria}) => {
    const OPTIONS = [
        { value: 'general', label: 'General' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
    ]
    const [categoría, SelectNoticias] = useSelect('general', OPTIONS);

    const handleChange = (e) => {
        e.preventDefault();
        SetCategoria(categoría);
    };
    return ( 
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleChange}>
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <button type="submit" 
                            className={`btn-large amber darken-2 ${styles.btnBlock} `}
                            value="buscar"
                        >Buscar Noticias</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;