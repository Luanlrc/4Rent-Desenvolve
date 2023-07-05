import styles from './Tags.module.scss';
import Tag from './Tag';

interface Props {
  tags: string[],
  selectTag: any,
  selectedTag: string
}

export default function Tags({tags, selectTag, selectedTag}: Props) {
  return(
    <div className={styles.tags}>
      { 
        tags.map((tag) => {
          return <Tag selectTag={selectTag} text={tag} selectedTag={selectedTag}/>;
        })
      }   
    </div>
  );
}