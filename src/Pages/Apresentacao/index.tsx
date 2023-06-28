import styles from './Apresentacao.module.scss'
import { ReactComponent as Logo} from '../../assets/4rent.svg'

export default function Apresentacao() {
  return(
    <main>
      <nav className={styles.menu}>
        <Logo /> 
      </nav>
    </main>

    
  );
}