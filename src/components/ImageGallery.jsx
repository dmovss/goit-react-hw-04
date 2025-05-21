import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((item) => (
        <li key={item.id} onClick={() => onImageClick(item.urls.regular)}>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
