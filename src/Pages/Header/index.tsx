import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as Lupa } from 'assets/search.svg';


export default function Header() {
  return (

    <header className={styles.header}>
      <Logo className={styles.header__logo} />
      <nav className={styles.menu__bg}>
        <div className={styles.menu}>
          <h5>Local</h5>
          <input type="text" placeholder="Para onde você quer ir" className={styles.menu__input}></input>
        </div>
        
        {/* <div className={styles.line}/> */}

        <div className={styles.menu}>
          <h5>Check-in</h5>
          <input type="date" placeholder="Insira das datas" className={styles.menu__input}></input>
        </div> 
        
        {/* <div className={styles.line}/> */}

        <div className={styles.menu}>
          <h5>Chech-out</h5>
          <input type="date" placeholder="Insira das datas" className={styles.menu__input}></input>
        </div>
        
        {/* <div className={styles.line}/> */}

        <div className={styles.menu}>
          <h5>Hóspedes</h5>
          <input type="number" placeholder="Insira a quantidade" className={styles.menu__input}></input>
        </div> 
        <Lupa className={styles.lupa} />
      </nav>
    </header>
  );
}
