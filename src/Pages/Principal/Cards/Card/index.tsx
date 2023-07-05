
import styles from './Card.module.scss';
import cards from 'data/destinos.json';


type Props = typeof cards[0];

export default function Card(props: Props) {
    
  const { title, acomodacao, description, category, price, photo } = props;
  return (
    <div className={styles.card}> 
      <div className={styles.item}>

        <div className={styles.item__imagem}>
          <img src={photo} alt={title} />
                   
        </div>
        <div className={styles.item__descricao}>
          <div className={styles.item__titulo}>
            <h2> {title} </h2>
            <p> {description} </p>
          </div >
          <div className={styles.item__tags}>
            <div className={styles.item__tipo}>{category.label}</div>
            <div className={styles.item__qtd}>  Acomoda {acomodacao} pessoas</div>
            <div className={styles.item__valor}> R$ {price.toFixed(2)}</div>

          </div>

        </div>


      </div>
    </div>





  );
}