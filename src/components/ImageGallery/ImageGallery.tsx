import ImageCard from '../ImageCard/ImageCard';
import css from "./ImageGallery.module.css";
import { FC } from 'react';
import { Image } from '../../type'

interface ImageGalleryProps {
    images: Image[];
    onClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClick}) => {

return (
     <ul className={css.imageGallery}>
       {images.map((image) => (
         <ImageCard
           key={image.id}
           imageUrl={image.small}
           alt={image.alt}
           onClick={() => onClick(image)} />
      ))}
    </ul>
  );
};

 export default ImageGallery;