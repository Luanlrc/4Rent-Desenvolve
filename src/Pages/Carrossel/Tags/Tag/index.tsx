import { MouseEventHandler } from 'react';
import styles from './Tag.module.scss';

interface Props {
    text : string,
    selectTag: any,
    selectedTag: string
}

export default function Tag({text, selectTag, selectedTag}: Props) {
  function isTheSameSelection() {
    return text == selectedTag;
  }
  function selectingTag(){
    if(!isTheSameSelection()) {
      selectTag(text);
    } else {
      selectTag('');
    }
  }

  const activeClass = isTheSameSelection() ? styles.active : '';

  return (
    <button className={`${styles.tag} ${activeClass}`} 
      onClick={() => selectingTag()}>{text}</button>
  );
}