import styles from './Principal.module.scss'
import { ReactComponent as Logo } from '../../assets/Group.svg'
import { ReactComponent as Lupa } from '../../assets/Vector.svg';
import { ReactComponent as Man } from '../../assets/silhueta.svg';
import Cards from './Cards';
import {motion} from 'framer-motion';


export default function Principal() {
  return (
    <main>
      <header className={styles.header}>
        <nav className={styles.menu}>

          <Logo className={styles.header__logo} />

          <h2 className={styles.menu__text}>  4Rent</h2>
          <nav className={styles.menu__informacoes}>
            <ul >
              <div className={styles.menu__opcoesgeral}>
                <h4 className={styles.menu__opcoes}> Local</h4>
                <h4 className={styles.menu__opcoes} >Check-in</h4>
                <h4 className={styles.menu__opcoes} >Check-out</h4>
                <h4 className={styles.menu__opcoes} >Hospedes</h4>
                <Lupa className={styles.lupa} />
              </div>

              <div className={styles.menu__opcoes__link}>
                <input type="text" placeholder="Para onde você quer ir" className={styles.menu__opcoes__link__ph}></input>
                <input type="text" placeholder="Insira a data" className={styles.menu__opcoes__link__ph}></input>
                <input type="text" placeholder="Insira a data" className={styles.menu__opcoes__link__ph}></input>
                <input type="text" placeholder="Número de pessoas" className={styles.menu__opcoes__link__ph}></input>

              </div>

            </ul>

          </nav>
          <Man className={styles.man} />
        </nav>

        <div className={styles.header__Text__Card}>
          <motion.div animate={{x:30,y:0}}className={styles.header__text} >
            Experiência incrível no Paraná!
          </motion.div>
          <motion.div animate={{x:-30,y:0}}className={styles.card} >
            <h2 className={styles.card__text}> As melhores acomodações da região</h2>
           <Cards />

          </motion.div>
        </div>
      </header>

    </main>


  );
}