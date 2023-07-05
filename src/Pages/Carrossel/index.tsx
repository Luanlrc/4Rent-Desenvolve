import Slider from "react-slick";
import styles from './Carrossel.module.scss';
import Tags from "./Tags";
import base from "./base.json";
import { useEffect, useState } from "react";

function importAllImages(): string[] {
    const imagesPaths = require.context('/public/assets/carrossel', false, /\.(png|jpe?g|svg)$/);
    return imagesPaths.keys().map(imagesPaths).slice(0, 10) as string[] || [];
}

function importAllCategories(): string[] {
    return base.map((category) => {
        return category.categoria;
    })
}

export default function Carrosel(){
    const [category, setCategory] = useState('');
    const [images, setImages] = useState(importAllImages());
    const [settings, setSettings] = useState({
        dots: true,
        slidesToShow: 5,
      });

      const categories: string[] = importAllCategories()

      useEffect(() => {
        let categoryImages = [];
        if(category) {
            categoryImages = base.filter((c) =>{
                return c.categoria === category
            })[0].arquivos;
        } else {
            categoryImages = importAllImages()
        }
        
        setImages(categoryImages)
        settings.slidesToShow = categoryImages.length < 5 ? categoryImages.length : 5;
      }, [category])

      return (
        <div>
            <Tags tags={categories} selectTag={setCategory} selectedTag={category}/>
            <div className={styles.container__carrossel}>
                <Slider {...settings}>
                    {images.map((image) => {
                        if(category) {
                            image = `/assets/carrossel/${image}`;
                        }
                        return (
                            <div className={styles.card__carrossel} >
                        <img  className={styles.img__carrossel} src={image}/>
                    </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
      );
    }