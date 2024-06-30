import Modal from 'react-modal';
import { FC } from 'react';

interface ImageModalProps {
    images: {
        regular: string;
        alt: string;
    };
    isOpen: boolean;
    onRequestClose: () => void;
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
     backgroundColor: 'transparent',
    border: 'none',
  },
};

Modal.setAppElement('#root');


const ImageModal: FC<ImageModalProps> = ({ images, isOpen, onRequestClose }) => {
 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <img src={images.regular} alt={images.alt} />
    </Modal>
  );
};

export default ImageModal;