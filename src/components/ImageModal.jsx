import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");
const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <img src={imageUrl} alt="Enlarged" />
    </Modal>
  );
};

export default ImageModal;
