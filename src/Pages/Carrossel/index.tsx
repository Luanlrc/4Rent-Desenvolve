import Slider from "react-slick";
    import styles from './Carrossel.module.scss'


export default function Carrosel(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1
        
        
      };
      return (
        <Slider {...settings}>
             <div className={styles.card__carrossel} >
                <img  className={styles.img__carrossel} src='/assets/carrossel/1.jpg'/>
            </div>
             <div className={styles.card__carrossel} >
                <img  className={styles.img__carrossel} src='/assets/carrossel/2.jpg'/>
            </div>
             <div className={styles.card__carrossel} >
                <img  className={styles.img__carrossel} src='/assets/carrossel/3.jpg'/>
            </div>
             <div className={styles.card__carrossel} >
                <img  className={styles.img__carrossel} src='/assets/carrossel/4.jpg'/>
            </div>
             <div className={styles.card__carrossel} >
                <img  className={styles.img__carrossel} src='/assets/carrossel/5.jpg'/>
            </div>
             <div className={styles.card__carrossel} >
                <img  className={styles.img__carrossel} src='/assets/carrossel/6.jpg'/>
            </div>
        </Slider>
      );
    }