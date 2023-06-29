import styles from './Apresentacao.module.scss'
import { ReactComponent as Logo} from '../../assets/Group.svg'

export default function Apresentacao() {
  return(
    <main>
      <header className={styles.header}>
      <nav className={styles.menu}>
          <Logo/>
         <h2 className={styles.menu__text}>  4Rent</h2>
      </nav>
        <div className={styles.header__text} >
        Experiência incrível em Curitiba
        </div>
      </header>

    </main>

    
  );
}