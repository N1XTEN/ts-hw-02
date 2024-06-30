import { FC } from 'react';
import css from './ImageCard.module.css';

interface ImageCardProps {
    imageUrl: string;
    alt: string;
    onClick: () => void;
}

 const ImageCard: FC<ImageCardProps> = ({ imageUrl, alt, onClick }) => {
   return (
     <li className={css.card}>
       <div className={css.container}>
         <img src={imageUrl} alt={alt} onClick={onClick} width="320" height="200"/>
       </div>
     </li>
   );
 };

 export default ImageCard;