import Slider from 'react-slick';
import styles from './Carrossel.module.scss';

function importAllImages(): string[] {
  const imagesPaths = require.context('/public/assets/carrossel', false, /\.(png|jpe?g|svg)$/);
  return imagesPaths.keys().map(imagesPaths) as string[];
}
export default function Carrosel(){
  const settings = {
    dots: true,
    slidesToShow: 5,
  };

  const images: string[] = importAllImages();
  return (
    <div className={styles.container__carrossel}>
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className={styles.card__carrossel} >
              <img  className={styles.img__carrossel} src={image}/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}