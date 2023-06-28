import styles from './Apresentacao.module.scss'
import { ReactComponent as Logo} from '../../assets/4rent.svg'

export default function Apresentacao() {
  return(
    <main>
      
      <header className={styles.header}>
      <nav className={styles.menu}>
        <Logo /> 
      </nav>
        <div className={styles.header__text} >
        Experiência incrível em Curitiba
        </div>
      </header>
    </main>

    
  );
}