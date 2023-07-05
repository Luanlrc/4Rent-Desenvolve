import Cards from './Cards';
import styles from './Principal.module.scss';

export default function Principal() {
  return (

    <main className={styles.main}>

      <section className={styles.main__principal}>

        <div className={styles.main__title}>
          <h1>Experiência Incrível no Paraná</h1>
          <button>Reserve Agora</button>
        </div>
        <div className={styles.main__cards}>
          <h3>As melhores acomodações da região</h3>
          <Cards/>
          <button>Ver mais</button>
        </div>
                
      </section>
    </main> 
  );
}