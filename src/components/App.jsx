import { useEffect, useState } from "react";
import styles from "./App.module.css";
import ImageGallery from "./ImageGallery";
import { fetchImages } from "../services/api";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn";
import ImageModal from "./ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("Love");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      setError(false);
      try {
        setLoading(true);
        const data = await fetchImages(query, page, abortController.signal);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (err) {
        if (err.name === "CanceledError") {
          return;
        }
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => abortController.abort();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSubmit={handleSubmit} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {loading && <Loader loading={loading} />}
      {images.length > 0 && !error && (
        <LoadMoreBtn page={page} setPage={setPage} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
}

export default App;
