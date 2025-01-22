import styles from "./Gallery.module.css";
import Slide from "../Slide/Slide";

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <Slide />
    </div>
  );
};

export default Gallery;
