import locacoes from './cards.json';
import Card from './Card';
import styles from './Cards.module.scss'

export default function Cards(){
   return(
    <div className={styles.itens}>   
        {locacoes.map((item)=>(
            <Card 
            key={item.id}{...item}/>

        ))}

    </div>
   ) 
}